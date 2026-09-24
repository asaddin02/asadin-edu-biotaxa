/**
 * BioTaxa - Modul Navigasi & Eksplorasi Taksonomi Buku Hayat (Living Codex Atlas)
 * Mengelola navigasi hierarki biologi bergaya bab buku dari puncak silsilah:
 * Kehidupan di Dunia (LUCA) -> 3 Domain -> Seluruh Kingdom -> Seluruh Filum -> Kelas -> Ordo -> Spesies
 * 100% Otomatis: Saat membuka kategori apa pun, seluruh spesimen kurasi langsung tersaji dengan opsi live data.
 */

const TaxonomyExplorer = {
  currentPath: {
    domain: null,   // null = Bab 0: Kehidupan di Dunia (Biota / Universal LUCA)
    kingdom: null,  // Bab II: Kingdom di dalam Domain
    phylum: null,   // Bab III: Filum di dalam Kingdom
    class: null,    // Bab IV: Kelas di dalam Filum
    order: null     // Bab V: Ordo di dalam Kelas
  },

  init() {
    this.updateBreadcrumbs();
    this.renderHierarchyCards();
    this.renderTaxonomyGuide();
  },

  /**
   * Reset kembali ke pembuka silsilah: Kehidupan di Dunia (Prolog: LUCA)
   */
  resetToRoot() {
    this.currentPath.domain = null;
    this.currentPath.kingdom = null;
    this.currentPath.phylum = null;
    this.currentPath.class = null;
    this.currentPath.order = null;
    this.updateBreadcrumbs();
    this.renderHierarchyCards();
    App.applyTaxonomyFilter(null, null, null, null, null);
  },

  resetToDomains() {
    this.resetToRoot();
  },

  /**
   * Pilih Domain (Bab I)
   */
  selectDomain(domainId) {
    this.currentPath.domain = domainId;
    this.currentPath.kingdom = null;
    this.currentPath.phylum = null;
    this.currentPath.class = null;
    this.currentPath.order = null;
    this.updateBreadcrumbs();
    this.renderHierarchyCards();
    App.applyTaxonomyFilter(domainId, null, null, null, null);
  },

  /**
   * Pilih Kingdom (Bab II)
   */
  selectKingdom(domainId, kingdomId) {
    this.currentPath.domain = domainId;
    this.currentPath.kingdom = kingdomId;
    this.currentPath.phylum = null;
    this.currentPath.class = null;
    this.currentPath.order = null;
    this.updateBreadcrumbs();
    this.renderHierarchyCards();
    App.applyTaxonomyFilter(domainId, kingdomId, null, null, null);
  },

  /**
   * Pilih Filum (Bab III)
   */
  selectPhylum(domainId, kingdomId, phylumId) {
    this.currentPath.domain = domainId;
    this.currentPath.kingdom = kingdomId;
    this.currentPath.phylum = phylumId;
    this.currentPath.class = null;
    this.currentPath.order = null;
    this.updateBreadcrumbs();
    this.renderHierarchyCards();
    App.applyTaxonomyFilter(domainId, kingdomId, phylumId, null, null);
  },

  /**
   * Pilih Kelas (Bab IV)
   */
  selectClass(domainId, kingdomId, phylumId, classId) {
    this.currentPath.domain = domainId;
    this.currentPath.kingdom = kingdomId;
    this.currentPath.phylum = phylumId;
    this.currentPath.class = classId;
    this.currentPath.order = null;
    this.updateBreadcrumbs();
    this.renderHierarchyCards();
    App.applyTaxonomyFilter(domainId, kingdomId, phylumId, classId, null);
  },

  /**
   * Pilih Ordo (Bab V)
   */
  selectOrder(domainId, kingdomId, phylumId, classId, orderId) {
    this.currentPath.domain = domainId;
    this.currentPath.kingdom = kingdomId;
    this.currentPath.phylum = phylumId;
    this.currentPath.class = classId;
    this.currentPath.order = orderId;
    this.updateBreadcrumbs();
    this.renderHierarchyCards();
    App.applyTaxonomyFilter(domainId, kingdomId, phylumId, classId, orderId);
  },

  /**
   * Helper: Mengambil daftar spesimen kurasi lokal yang cocok dengan konteks hierarki aktif
   */
  getMatchingCuratedSpecies(domainId, kingdomId, phylumId, classId, orderId) {
    let list = CURATED_SPECIES;
    if (domainId) {
      list = list.filter(s => s.taxonomy && s.taxonomy.domain && s.taxonomy.domain.toLowerCase() === domainId.toLowerCase());
    }
    if (kingdomId) {
      list = list.filter(s => {
        if (!s.taxonomy || !s.taxonomy.kingdom) return false;
        const kLower = s.taxonomy.kingdom.toLowerCase();
        const target = kingdomId.toLowerCase();
        return kLower.includes(target) || target.includes(kLower);
      });
    }
    if (phylumId) {
      list = list.filter(s => {
        if (!s.taxonomy || !s.taxonomy.phylum) return false;
        const pLower = s.taxonomy.phylum.toLowerCase();
        const target = phylumId.toLowerCase();
        return pLower.includes(target) || target.includes(pLower);
      });
    }
    if (classId) {
      list = list.filter(s => {
        if (!s.taxonomy || !s.taxonomy.class) return false;
        const cLower = s.taxonomy.class.toLowerCase();
        const target = classId.toLowerCase();
        return cLower.includes(target) || target.includes(cLower);
      });
    }
    if (orderId) {
      list = list.filter(s => {
        if (!s.taxonomy || !s.taxonomy.order) return false;
        const oLower = s.taxonomy.order.toLowerCase();
        const target = orderId.toLowerCase();
        return oLower.includes(target) || target.includes(oLower);
      });
    }
    return list;
  },

  /**
   * Helper: Render kartu spesimen kurasi unggulan
   */
  renderCuratedSpeciesHTML(speciesList, titleText) {
    if (!speciesList || speciesList.length === 0) return "";
    return `
      <div class="drilldown-species-section">
        <div class="section-header-row" style="margin-top: 8px; margin-bottom: 20px;">
          <div>
            <h4 style="font-size: 1.35rem; color: var(--green-deep); font-weight: 800;">
              ⭐ ${titleText || "Spesimen Kurasi Unggulan"}
            </h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 4px;">
              Dossier lengkap dilengkapi adaptasi biologi, morfologi, foto valid, dan metrik komprehensif.
            </p>
          </div>
          <span class="count-pill">${speciesList.length} Spesies</span>
        </div>
        <div class="species-grid">
          ${speciesList.map(sp => App.createCardHTML(sp, false)).join('')}
        </div>
      </div>
    `;
  },

  /**
   * Penarikan Otomatis Spesies Langsung dari API Berdasarkan Kategori
   */
  async loadLiveCategorySpecies(taxonName, rank = 'order') {
    const grid = document.getElementById("live-category-species-grid");
    const countBadge = document.getElementById("live-species-count");
    if (!grid) return;

    grid.innerHTML = Array(4).fill(0).map(() => `
      <div class="skeleton-card">
        <div class="skeleton-img"></div>
        <div class="skeleton-body">
          <div class="skeleton-line short"></div>
          <div class="skeleton-line med"></div>
          <div class="skeleton-line"></div>
        </div>
      </div>
    `).join('');

    try {
      const results = await SpeciesAPI.getSpeciesByTaxonCategory(taxonName, rank, 18);
      const curatedSciNames = new Set(CURATED_SPECIES.map(s => s.scientificName.toLowerCase()));
      const filteredResults = results.filter(r => !curatedSciNames.has(r.scientificName.toLowerCase()));

      if (filteredResults.length === 0) {
        if (countBadge) countBadge.textContent = "Koleksi Kurasi Lengkap";
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.92rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
            ✨ Seluruh spesimen kurasi untuk takson <strong>${taxonName}</strong> telah tersaji lengkap pada koleksi di atas.
          </div>
        `;
        return;
      }

      if (countBadge) {
        countBadge.textContent = `+${filteredResults.length} Spesies Dunia Ditemukan`;
      }

      grid.innerHTML = filteredResults.map(sp => App.createCardHTML(sp, true)).join('');
      App.updateFavoriteButtons();
    } catch (err) {
      if (countBadge) countBadge.textContent = "Mode Offline";
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 18px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          Data kurasi lokal tetap dapat diakses lengkap di atas.
        </div>
      `;
    }
  },

  /**
   * Render pita navigasi pembatas buku (Book Ribbon Breadcrumbs)
   */
  updateBreadcrumbs() {
    const nav = document.getElementById("taxonomy-breadcrumbs");
    if (!nav) return;
    nav.classList.add("book-ribbon");

    const items = [
      `<button class="bc-item ${!this.currentPath.domain ? 'active' : ''}" onclick="TaxonomyExplorer.resetToRoot()">
        📖 <span>Prolog: Pohon Hayat</span>
      </button>`
    ];

    if (this.currentPath.domain) {
      const domObj = TAXONOMY_TREE.domains.find(d => d.id === this.currentPath.domain);
      const domName = domObj ? domObj.name : this.currentPath.domain;
      items.push(`
        <span class="bc-sep">›</span>
        <button class="bc-item ${!this.currentPath.kingdom ? 'active' : ''}" onclick="TaxonomyExplorer.selectDomain('${this.currentPath.domain}')">
          🧬 <span>Bab I: Domain ${domName}</span>
        </button>
      `);
    }

    if (this.currentPath.kingdom) {
      const domObj = TAXONOMY_TREE.domains.find(d => d.id === this.currentPath.domain);
      const kObj = domObj && domObj.kingdoms ? domObj.kingdoms.find(k => k.id === this.currentPath.kingdom) : null;
      const kName = kObj ? kObj.name : this.currentPath.kingdom;
      items.push(`
        <span class="bc-sep">›</span>
        <button class="bc-item ${!this.currentPath.phylum ? 'active' : ''}" onclick="TaxonomyExplorer.selectKingdom('${this.currentPath.domain}', '${this.currentPath.kingdom}')">
          👑 <span>Bab II: Kingdom ${kName}</span>
        </button>
      `);
    }

    if (this.currentPath.phylum) {
      const domObj = TAXONOMY_TREE.domains.find(d => d.id === this.currentPath.domain);
      const kObj = domObj && domObj.kingdoms ? domObj.kingdoms.find(k => k.id === this.currentPath.kingdom) : null;
      const phylumObj = kObj && kObj.phyla ? kObj.phyla.find(p => p.id === this.currentPath.phylum) : null;
      const name = phylumObj ? phylumObj.name : this.currentPath.phylum;
      items.push(`
        <span class="bc-sep">›</span>
        <button class="bc-item ${!this.currentPath.class ? 'active' : ''}" onclick="TaxonomyExplorer.selectPhylum('${this.currentPath.domain}', '${this.currentPath.kingdom}', '${this.currentPath.phylum}')">
          🔬 <span>Bab III: Filum ${name}</span>
        </button>
      `);
    }

    if (this.currentPath.class) {
      const domObj = TAXONOMY_TREE.domains.find(d => d.id === this.currentPath.domain);
      const kObj = domObj && domObj.kingdoms ? domObj.kingdoms.find(k => k.id === this.currentPath.kingdom) : null;
      const phylumObj = kObj && kObj.phyla ? kObj.phyla.find(p => p.id === this.currentPath.phylum) : null;
      const classObj = phylumObj && phylumObj.classes ? phylumObj.classes.find(c => c.id === this.currentPath.class) : null;
      const name = classObj ? classObj.name : this.currentPath.class;
      items.push(`
        <span class="bc-sep">›</span>
        <button class="bc-item ${!this.currentPath.order ? 'active' : ''}" onclick="TaxonomyExplorer.selectClass('${this.currentPath.domain}', '${this.currentPath.kingdom}', '${this.currentPath.phylum}', '${this.currentPath.class}')">
          🏷️ <span>Bab IV: Kelas ${name}</span>
        </button>
      `);
    }

    if (this.currentPath.order) {
      const domObj = TAXONOMY_TREE.domains.find(d => d.id === this.currentPath.domain);
      const kObj = domObj && domObj.kingdoms ? domObj.kingdoms.find(k => k.id === this.currentPath.kingdom) : null;
      const phylumObj = kObj && kObj.phyla ? kObj.phyla.find(p => p.id === this.currentPath.phylum) : null;
      const classObj = phylumObj && phylumObj.classes ? phylumObj.classes.find(c => c.id === this.currentPath.class) : null;
      const orderObj = classObj && classObj.orders ? classObj.orders.find(o => o.id === this.currentPath.order) : null;
      const name = orderObj ? orderObj.name : this.currentPath.order;
      items.push(`
        <span class="bc-sep">›</span>
        <button class="bc-item active">
          🎯 <span>Bab V: Ordo ${name}</span>
        </button>
      `);
    }

    nav.innerHTML = items.join('');
  },

  /**
   * Render Bab Buku Hierarki Taksonomi Dinamis
   */
  renderHierarchyCards() {
    const container = document.getElementById("taxonomy-drilldown-container");
    if (!container) return;

    // BAB 0: PROLOG KEHIDUPAN DI DUNIA (BIOTA / UNIVERSAL LUCA)
    if (!this.currentPath.domain) {
      const rootInfo = TAXONOMY_TREE.root;
      container.innerHTML = `
        <div class="drilldown-header">
          <div class="taxa-rank-badge" style="margin-bottom: 12px; display: inline-block;">📖 PROLOG: POHON HAYAT UNIVERSAL (TREE OF LIFE)</div>
          <h3>${rootInfo.name}</h3>
          <p style="margin-bottom: 12px; color: var(--green-primary); font-weight: 700;">
            ${rootInfo.indonesianName} • Titik Mula Seluruh Hayat (LUCA) ~3,8 Miliar Tahun Lalu
          </p>
          <p>${rootInfo.description}</p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 32px; display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; box-shadow: var(--shadow-sm);">
          <div>
            <div style="font-size: 0.8rem; color: var(--brown-wood); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Estimasi Spesies Makhluk Hidup di Bumi</div>
            <div style="font-size: 1.3rem; font-weight: 800; color: var(--green-deep);">${rootInfo.estimatedSpecies}</div>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="count-pill">3 Domain</span>
            <span class="count-pill">6 Kingdom</span>
            <span class="count-pill">${CURATED_SPECIES.length} Spesies Kurasi Unggulan</span>
          </div>
        </div>

        <div class="drilldown-header">
          <h4 style="font-size: 1.3rem; color: var(--green-deep); font-weight: 800; margin-bottom: 6px;">Buka Bab I: Pilih Salah Satu dari 3 Domain Kehidupan</h4>
          <p>Klik salah satu domain di bawah ini untuk menjelajahi silsilah kerajaan dan anggota organisasinya:</p>
        </div>

        <div class="taxa-grid">
          ${TAXONOMY_TREE.domains.map(dom => `
            <div class="taxa-card domain-card" onclick="TaxonomyExplorer.selectDomain('${dom.id}')">
              <div class="taxa-card-header">
                <span class="taxa-rank-badge">BAB I: DOMAIN</span>
                <span class="taxa-icon">${dom.id === 'eukarya' ? '🧬' : (dom.id === 'bacteria' ? '🔬' : '🌋')}</span>
              </div>
              <h4 class="taxa-card-title">${dom.name}</h4>
              <p class="taxa-card-sub">${dom.indonesianName}</p>
              <p class="taxa-card-desc">${dom.description}</p>
              <div class="taxa-card-footer">
                <span>Buka Bab II: Kingdom di ${dom.name}</span>
                <span>›</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      return;
    }

    const currentDomain = TAXONOMY_TREE.domains.find(d => d.id === this.currentPath.domain);

    // BAB II: KINGDOM (DI DALAM DOMAIN TERPILIH)
    if (this.currentPath.domain && !this.currentPath.kingdom) {
      const kingdoms = currentDomain.kingdoms || [];
      const matchingCurated = this.getMatchingCuratedSpecies(currentDomain.id, null, null, null, null);

      container.innerHTML = `
        <div class="drilldown-header">
          <div class="taxa-rank-badge" style="margin-bottom: 12px; display: inline-block;">📖 BAB II: KERANGKA KERJAAN (KINGDOM DI DALAM DOMAIN ${currentDomain.name.toUpperCase()})</div>
          <h3>Pilih Kingdom (Kerajaan Hayat)</h3>
          <p>
            Di dalam Domain <strong>${currentDomain.name}</strong> (${currentDomain.indonesianName}), organisme dikelompokkan ke dalam kerajaan-kerajaan besar berdasarkan cara memperoleh nutrisi dan struktur sel.
          </p>
        </div>
        <div class="taxa-grid">
          ${kingdoms.map(k => {
            const icons = { animalia: "🦁", plantae: "🌿", fungi: "🍄", protista: "🦠", eubacteria: "🧫", archaebacteria: "🌋" };
            const icon = icons[k.id] || "🌱";
            return `
              <div class="taxa-card kingdom-card" onclick="TaxonomyExplorer.selectKingdom('${currentDomain.id}', '${k.id}')">
                <div class="taxa-card-header">
                  <span class="taxa-rank-badge">BAB II: KINGDOM</span>
                  <span class="taxa-icon">${icon}</span>
                </div>
                <h4 class="taxa-card-title">${k.name}</h4>
                <p class="taxa-card-sub">${k.indonesianName}</p>
                <p class="taxa-card-desc">${k.description}</p>
                <div class="taxa-card-footer">
                  <span>Buka Bab III: Filum ${k.name}</span>
                  <span>›</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        ${this.renderCuratedSpeciesHTML(matchingCurated, `Spesimen Unggulan Domain ${currentDomain.name}`)}
      `;
      return;
    }

    const currentKingdom = (currentDomain.kingdoms || []).find(k => k.id === this.currentPath.kingdom);

    // BAB III: FILUM (DI BAWAH KINGDOM TERPILIH)
    if (this.currentPath.kingdom && !this.currentPath.phylum) {
      const phyla = currentKingdom.phyla || [];
      const matchingCurated = this.getMatchingCuratedSpecies(currentDomain.id, currentKingdom.id, null, null, null);

      container.innerHTML = `
        <div class="drilldown-header">
          <div class="taxa-rank-badge" style="margin-bottom: 12px; display: inline-block;">📖 BAB III: FILUM (RANCANGAN TUBUH DI KINGDOM ${currentKingdom.name.toUpperCase()})</div>
          <h3>Pilih Filum di dalam Kingdom ${currentKingdom.name} (${currentKingdom.indonesianName})</h3>
          <p>${currentKingdom.description}</p>
        </div>
        <div class="taxa-grid">
          ${phyla.map(phylum => `
            <div class="taxa-card phylum-card" onclick="TaxonomyExplorer.selectPhylum('${currentDomain.id}', '${currentKingdom.id}', '${phylum.id}')">
              <div class="taxa-card-header">
                <span class="taxa-rank-badge">BAB III: FILUM</span>
                <span class="taxa-child-count">${phylum.classes ? phylum.classes.length + ' Kelas' : ''}</span>
              </div>
              <h4 class="taxa-card-title">${phylum.name}</h4>
              <p class="taxa-card-sub">${phylum.indonesianName}</p>
              <p class="taxa-card-desc">${phylum.description}</p>
              <div class="taxa-card-footer">
                <span>Buka Bab IV: Kelas ${phylum.name}</span>
                <span>›</span>
              </div>
            </div>
          `).join('')}
        </div>

        ${this.renderCuratedSpeciesHTML(matchingCurated, `Spesimen Unggulan Kingdom ${currentKingdom.name}`)}
      `;
      return;
    }

    const currentPhylum = (currentKingdom.phyla || []).find(p => p.id === this.currentPath.phylum);

    // BAB IV: KELAS (DI BAWAH FILUM TERPILIH)
    if (this.currentPath.phylum && !this.currentPath.class) {
      const classes = currentPhylum.classes || [];
      const matchingCurated = this.getMatchingCuratedSpecies(currentDomain.id, currentKingdom.id, currentPhylum.id, null, null);

      container.innerHTML = `
        <div class="drilldown-header">
          <div class="taxa-rank-badge" style="margin-bottom: 12px; display: inline-block;">📖 BAB IV: KELAS ANATOMI (DI BAWAH FILUM ${currentPhylum.name.toUpperCase()})</div>
          <h3>Kelas di dalam Filum ${currentPhylum.name} (${currentPhylum.indonesianName})</h3>
          <p>${currentPhylum.description}</p>
        </div>
        <div class="taxa-grid">
          ${classes.map(cls => `
            <div class="taxa-card class-card" onclick="TaxonomyExplorer.selectClass('${currentDomain.id}', '${currentKingdom.id}', '${currentPhylum.id}', '${cls.id}')">
              <div class="taxa-card-header">
                <span class="taxa-rank-badge">BAB IV: KELAS</span>
                <span class="taxa-child-count">${cls.orders ? cls.orders.length + ' Ordo' : 'Spesimen'}</span>
              </div>
              <h4 class="taxa-card-title">${cls.name}</h4>
              <p class="taxa-card-sub">${cls.indonesianName}</p>
              <p class="taxa-card-desc">${cls.description}</p>
              <div class="taxa-card-footer">
                <span>Buka Bab V: Ordo Biologi</span>
                <span>›</span>
              </div>
            </div>
          `).join('')}
        </div>

        ${this.renderCuratedSpeciesHTML(matchingCurated, `Koleksi Spesimen Filum ${currentPhylum.name}`)}
      `;
      return;
    }

    const currentClass = (currentPhylum.classes || []).find(c => c.id === this.currentPath.class);

    // BAB V: ORDO (DI BAWAH KELAS TERPILIH)
    if (this.currentPath.class && !this.currentPath.order) {
      const orders = currentClass ? (currentClass.orders || []) : [];
      const matchingCurated = this.getMatchingCuratedSpecies(
        currentDomain.id, 
        currentKingdom.id, 
        currentPhylum.id, 
        currentClass ? currentClass.id : null, 
        null
      );

      container.innerHTML = `
        <div class="drilldown-header">
          <div class="taxa-rank-badge" style="margin-bottom: 12px; display: inline-block;">📖 BAB V: ORDO BIOLOGI (${currentClass ? currentClass.name.toUpperCase() : ''})</div>
          <h3>Pilih Ordo di dalam Kelas ${currentClass ? currentClass.name : ''} (${currentClass ? currentClass.indonesianName : ''})</h3>
          <p>${currentClass ? currentClass.description : ''}</p>
        </div>
        <div class="taxa-grid">
          ${orders.length > 0 ? orders.map(ord => `
            <div class="taxa-card order-card" 
                 onclick="TaxonomyExplorer.selectOrder('${currentDomain.id}', '${currentKingdom.id}', '${currentPhylum.id}', '${currentClass.id}', '${ord.id}')">
              <div class="taxa-card-header">
                <span class="taxa-rank-badge">BAB V: ORDO</span>
              </div>
              <h4 class="taxa-card-title">${ord.name}</h4>
              <p class="taxa-card-sub">${ord.indonesianName}</p>
              <p class="taxa-card-desc">${ord.description}</p>
              <div class="taxa-card-footer">
                <span>Buka Seluruh Spesies ${ord.name}</span>
                <span>›</span>
              </div>
            </div>
          `).join('') : `
            <div class="taxa-card" style="cursor: default;">
              <h4>${currentClass ? currentClass.name : ''}</h4>
              <p>Menampilkan seluruh koleksi spesimen dari kelas ini.</p>
            </div>
          `}
        </div>

        ${this.renderCuratedSpeciesHTML(matchingCurated, `Spesimen Unggulan Kelas ${currentClass ? currentClass.name : ''}`)}
      `;
      return;
    }

    // BAB V (SUB-BAB SPESIFIK): ORDO TERPILIH (SPESIES LENGKAP OTOMATIS)
    if (this.currentPath.order) {
      const orders = currentClass ? (currentClass.orders || []) : [];
      const currentOrder = orders.find(o => o.id === this.currentPath.order) || { name: this.currentPath.order, indonesianName: this.currentPath.order, description: "" };
      
      const matchingCurated = this.getMatchingCuratedSpecies(
        currentDomain.id, 
        currentKingdom.id, 
        currentPhylum.id, 
        currentClass ? currentClass.id : null, 
        this.currentPath.order
      );

      container.innerHTML = `
        <div class="drilldown-header">
          <div class="taxa-rank-badge" style="margin-bottom: 12px; display: inline-block;">📖 BAB V: ORDO ${currentOrder.name.toUpperCase()}</div>
          <h3>Ordo ${currentOrder.name} (${currentOrder.indonesianName})</h3>
          <p>${currentOrder.description || (currentClass ? currentClass.description : '')}</p>
        </div>

        <div style="margin-bottom: 24px;">
          <button class="btn-reset-filters" style="background: var(--bg-card); color: var(--green-deep); border-color: var(--border-subtle);" onclick="TaxonomyExplorer.selectClass('${currentDomain.id}', '${currentKingdom.id}', '${currentPhylum.id}', '${currentClass.id}')">
            ‹ Kembali ke Daftar Ordo Kelas ${currentClass.name}
          </button>
        </div>

        ${this.renderCuratedSpeciesHTML(matchingCurated, `Spesimen Kurasi Unggulan Ordo ${currentOrder.name}`)}

        <div class="drilldown-species-section" style="margin-top: 36px;">
          <div class="section-header-row" style="margin-bottom: 18px;">
            <div>
              <h4 style="font-size: 1.35rem; color: var(--green-deep); font-weight: 800;">
                🌐 Seluruh Spesies Dunia dalam Ordo ${currentOrder.name} (Live API)
              </h4>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 4px;">
                Tersinkronisasi otomatis dengan basis data taksonomi global iNaturalist.
              </p>
            </div>
            <span id="live-species-count" class="count-pill">Memuat data...</span>
          </div>
          <div id="live-category-species-grid" class="species-grid"></div>
        </div>
      `;

      this.loadLiveCategorySpecies(currentOrder.name, 'order');
    }
  },

  /**
   * Render panduan penjelasan 8 tingkat taksonomi biologi
   */
  renderTaxonomyGuide() {
    const container = document.getElementById("taxonomy-levels-guide");
    if (!container) return;

    container.innerHTML = TAXONOMY_LEVELS.map((lvl, index) => `
      <div class="level-card">
        <div class="level-num">${index + 1}</div>
        <div class="level-name">${lvl.label}</div>
        <div class="level-desc">${lvl.desc}</div>
      </div>
    `).join('');
  }
};
