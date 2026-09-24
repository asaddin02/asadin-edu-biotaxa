/**
 * BioTaxa - Modul Analisis Morfologi vs Racun (Trade-Off Lab)
 * Memvisualisasikan fenomena evolusi biologis "Morphological-Venom Trade-Off":
 * Kompromi metabolik antara kekuatan mekanik capit vs potensi mematikan racun.
 */

const TradeOffLab = {
  activeSpecimenA: "pandinus-imperator",
  activeSpecimenB: "mastigoproctus-giganteus",

  init() {
    this.renderPresets();
    this.renderComparison();
    this.setupEventListeners();
  },

  // Preset duel populer berdasarkan percakapan
  presets: [
    {
      title: "Kaisar vs Ketonggeng (Sesuai Percakapan)",
      idA: "pandinus-imperator",
      idB: "mastigoproctus-giganteus",
      note: "Uji coba fakta: Apakah capit ketonggeng lebih kuat dari kalajengking kaisar? Lihat perbandingan massa otot dan biomekanikanya!"
    },
    {
      title: "Dua Kutub Ekstrem: Kaisar vs Deathstalker",
      idA: "pandinus-imperator",
      idB: "leiurus-quinquestriatus",
      note: "Perbandingan kontras sempurna: Capit raksasa tanpa racun vs capit rapuh dengan racun neurotoksik pembunuh."
    },
    {
      title: "Hutan Raksasa vs Ketonggeng",
      idA: "heterometrus-swammerdami",
      idB: "mastigoproctus-giganteus",
      note: "Heterometrus swammerdami adalah pemegang rekor daya remuk capit tertinggi di kelas Arachnida."
    },
    {
      title: "Deathstalker vs Ekor Gemuk",
      idA: "leiurus-quinquestriatus",
      idB: "androctonus-australis",
      note: "Adu dua kalajengking paling berbisa di Gurun Sahara dan Timur Tengah."
    }
  ],

  renderPresets() {
    const container = document.getElementById("tradeoff-presets");
    if (!container) return;

    container.innerHTML = this.presets.map((p, idx) => `
      <button class="preset-pill ${idx === 0 ? 'active' : ''}" data-a="${p.idA}" data-b="${p.idB}">
        <span>⚔️</span>
        <span>${p.title}</span>
      </button>
    `).join('');

    container.querySelectorAll(".preset-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".preset-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeSpecimenA = btn.dataset.a;
        this.activeSpecimenB = btn.dataset.b;
        this.renderComparison();
      });
    });
  },

  renderComparison() {
    const spA = CURATED_SPECIES.find(s => s.id === this.activeSpecimenA) || CURATED_SPECIES[0];
    const spB = CURATED_SPECIES.find(s => s.id === this.activeSpecimenB) || CURATED_SPECIES[1];

    const container = document.getElementById("tradeoff-arena");
    if (!container) return;

    // Evaluasi siapa yang capitnya lebih kuat & siapa yang racunnya lebih mematikan
    const clawWinner = spA.tradeOff.clawForceScore > spB.tradeOff.clawForceScore 
      ? spA.commonNameId 
      : (spB.tradeOff.clawForceScore > spA.tradeOff.clawForceScore ? spB.commonNameId : "Seimbang");
    
    const venomWinner = spA.tradeOff.venomToxicityScore > spB.tradeOff.venomToxicityScore 
      ? spA.commonNameId 
      : (spB.tradeOff.venomToxicityScore > spA.tradeOff.venomToxicityScore ? spB.commonNameId : "Seimbang / Tanpa Racun");

    container.innerHTML = `
      <div class="arena-grid">
        <!-- Spesimen A -->
        <div class="fighter-card" onclick="App.openModal('${spA.id}')">
          <div class="fighter-badge badge-a">SPESIMEN 1</div>
          <div class="fighter-img-wrap">
            <img src="${spA.image}" alt="${spA.commonNameId}" loading="lazy" referrerpolicy="no-referrer" onerror="App.handleImageError(this, '${spA.taxonomy ? (spA.taxonomy.class || spA.taxonomy.kingdom) : 'Arachnida'}')" />
          </div>
          <div class="fighter-info">
            <h3>${spA.commonNameId}</h3>
            <p class="fighter-sci"><em>${spA.scientificName}</em></p>
            <span class="fighter-order-tag">${spA.taxonomy.order} (${spA.taxonomy.class})</span>
          </div>

          <div class="stat-group">
            <div class="stat-header">
              <span>Gaya Cengkeram / Capit (Crushing Force)</span>
              <strong>${spA.tradeOff.clawForceScore}/100</strong>
            </div>
            <div class="meter-bar-bg">
              <div class="meter-bar-fill claw-fill" style="width: ${spA.tradeOff.clawForceScore}%"></div>
            </div>
            <p class="stat-note">${spA.tradeOff.clawForceDescription}</p>
          </div>

          <div class="stat-group">
            <div class="stat-header">
              <span>Potensi Bisa / Racun (Venom Toxicity)</span>
              <strong>${spA.tradeOff.venomToxicityScore}/100</strong>
            </div>
            <div class="meter-bar-bg">
              <div class="meter-bar-fill venom-fill" style="width: ${spA.tradeOff.venomToxicityScore}%"></div>
            </div>
            <p class="stat-note">${spA.tradeOff.venomDescription}</p>
          </div>

          <button class="btn-inspect" onclick="event.stopPropagation(); App.openModal('${spA.id}')">
            🔍 Buka Dossier Lengkap
          </button>
        </div>

        <!-- VS Divider & Biological Verdict -->
        <div class="arena-vs-column">
          <div class="vs-circle">VS</div>
          
          <div class="verdict-box">
            <h4>HASIL ANALISIS EVOLUSI</h4>
            <div class="verdict-item">
              <span class="v-label">Capit Terkuat:</span>
              <span class="v-val text-amber">${clawWinner}</span>
            </div>
            <div class="verdict-item">
              <span class="v-label">Racun Terkuat:</span>
              <span class="v-val text-purple">${venomWinner}</span>
            </div>
            <div class="verdict-summary">
              <p>
                <strong>Hukum Kompromi Energi:</strong> Sintesis racun membutuhkan kalori metabolisme sangat masif. Hewan dengan capit raksasa seperti <em>${spA.tradeOff.clawForceScore > 75 ? spA.commonNameId : spB.commonNameId}</em> memotong biaya produksi racun dan menginvestasikannya ke serat otot dan kitin tebal.
              </p>
            </div>
          </div>
        </div>

        <!-- Spesimen B -->
        <div class="fighter-card" onclick="App.openModal('${spB.id}')">
          <div class="fighter-badge badge-b">SPESIMEN 2</div>
          <div class="fighter-img-wrap">
            <img src="${spB.image}" alt="${spB.commonNameId}" loading="lazy" referrerpolicy="no-referrer" onerror="App.handleImageError(this, '${spB.taxonomy ? (spB.taxonomy.class || spB.taxonomy.kingdom) : 'Arachnida'}')" />
          </div>
          <div class="fighter-info">
            <h3>${spB.commonNameId}</h3>
            <p class="fighter-sci"><em>${spB.scientificName}</em></p>
            <span class="fighter-order-tag">${spB.taxonomy.order} (${spB.taxonomy.class})</span>
          </div>

          <div class="stat-group">
            <div class="stat-header">
              <span>Gaya Cengkeram / Capit (Crushing Force)</span>
              <strong>${spB.tradeOff.clawForceScore}/100</strong>
            </div>
            <div class="meter-bar-bg">
              <div class="meter-bar-fill claw-fill" style="width: ${spB.tradeOff.clawForceScore}%"></div>
            </div>
            <p class="stat-note">${spB.tradeOff.clawForceDescription}</p>
          </div>

          <div class="stat-group">
            <div class="stat-header">
              <span>Potensi Bisa / Racun (Venom Toxicity)</span>
              <strong>${spB.tradeOff.venomToxicityScore}/100</strong>
            </div>
            <div class="meter-bar-bg">
              <div class="meter-bar-fill venom-fill" style="width: ${spB.tradeOff.venomToxicityScore}%"></div>
            </div>
            <p class="stat-note">${spB.tradeOff.venomDescription}</p>
          </div>

          <button class="btn-inspect" onclick="event.stopPropagation(); App.openModal('${spB.id}')">
            🔍 Buka Dossier Lengkap
          </button>
        </div>
      </div>
    `;
  },

  setupEventListeners() {
    // Interactive trade-off slider
    const slider = document.getElementById("evolution-slider");
    const sliderOutput = document.getElementById("slider-output-desc");
    const sliderSpeciesList = document.getElementById("slider-species-list");

    if (slider && sliderOutput && sliderSpeciesList) {
      const updateSliderAnalysis = (val) => {
        let text = "";
        let matched = [];

        if (val <= 30) {
          text = "🎯 <strong>Zona Ekstrem Racun Kimiawi (Capit Kurus / Rapuh):</strong> Hewan di spektrum ini tidak membuang energi membangun otot capit besar. Sengatan jarum halus yang menyuntikkan koktail neurotoksin sanggup menghentikan detak jantung mangsa dalam sekejap.";
          matched = CURATED_SPECIES.filter(s => s.tradeOff && s.tradeOff.venomToxicityScore >= 80);
        } else if (val <= 70) {
          text = "⚖️ <strong>Zona Seimbang (Fisik Sedang + Kimiawi Sedang):</strong> Menggunakan kombinasi cakar/taring fisik untuk menahan mangsa, lalu melumpuhkannya dengan racun sedang atau sekresi pertahanan.";
          matched = CURATED_SPECIES.filter(s => s.tradeOff && s.tradeOff.venomToxicityScore > 20 && s.tradeOff.venomToxicityScore < 80);
        } else {
          text = "💪 <strong>Zona Ekstrem Kekuatan Mekanis (Capit Masif / Zirah Tebal):</strong> 0% racun atau racun sangat ringan. Murni mengandalkan tenaga cengkeram meremukkan tulang dan cangkang, atau semprotan asam konsentrasi tinggi.";
          matched = CURATED_SPECIES.filter(s => s.tradeOff && s.tradeOff.clawForceScore >= 80);
        }

        sliderOutput.innerHTML = text;
        sliderSpeciesList.innerHTML = matched.map(s => `
          <div class="slider-chip" onclick="App.openModal('${s.id}')">
            <img src="${s.image}" alt="${s.commonNameId}" referrerpolicy="no-referrer" onerror="App.handleImageError(this, '${s.taxonomy ? (s.taxonomy.class || s.taxonomy.kingdom) : 'Arachnida'}')" />
            <div>
              <div class="chip-name">${s.commonNameId}</div>
              <div class="chip-scores">Capit: ${s.tradeOff.clawForceScore} | Racun: ${s.tradeOff.venomToxicityScore}</div>
            </div>
          </div>
        `).join('');
      };

      slider.addEventListener("input", (e) => updateSliderAnalysis(parseInt(e.target.value, 10)));
      updateSliderAnalysis(parseInt(slider.value, 10));
    }
  }
};
