import { test, expect } from '@playwright/test';

test.use({ serviceWorkers: 'allow' });

test('installable manifest and offline lessons through the service worker', async ({ page, context }) => {
  const manifest = await (await page.request.get('/manifest.webmanifest')).json();
  expect(manifest.short_name).toBe('BioTaxa');
  expect(manifest.icons.some(i => i.purpose === 'maskable')).toBe(true);

  await page.addInitScript(() => {
    localStorage.setItem('biotaxa-force-sw', '1');
    localStorage.setItem('biotaxa-level', JSON.stringify('smp'));
  });
  await page.goto('/#/learn');
  await page.evaluate(() => navigator.serviceWorker.ready);
  await expect
    .poll(
      async () =>
        page.evaluate(async () => {
          const keys = await caches.keys();
          const app = keys.find(k => k.startsWith('biotaxa-app-'));
          return app ? (await (await caches.open(app)).keys()).length : 0;
        }),
      { timeout: 20000 }
    )
    .toBeGreaterThan(50);

  await context.setOffline(true);
  await expect(page.locator('#net-status')).toBeVisible();
  // A full reload without network is served by the service worker.
  // (Playwright's offline emulation reports navigator.onLine = true after a reload, so the banner is not re-checked.)
  await page.reload();
  await page.goto('/#/learn/fotosintesis');
  await expect(page.locator('h1')).toHaveText('Tumbuhan & fotosintesis');
  await page.goto('/#/lab/photosynthesis');
  await expect(page.locator('#lab-output')).toContainText('gelembung');
  await page.goto('/#/quiz/klasifikasi');
  await expect(page.locator('.quiz-q').first()).toBeVisible();
  await context.setOffline(false);
});
