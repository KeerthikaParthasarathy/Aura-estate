// Horizontal Slider Scroll
function scrollSlider(id, distance) {
  const container = document.getElementById(id);
  container.scrollBy({ left: distance, behavior: 'smooth' });
}

// Hero Search Tab Switcher
function switchFilter(type) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  const select = document.getElementById('assetSelect');
  if (type === 'buy') {
    select.innerHTML = `
      <option>Waterfront Villa / Sky Penthouse</option>
      <option>Architectural Gated Estate</option>
      <option>Modernist Alpine Sanctuary</option>
    `;
  } else if (type === 'rent') {
    select.innerHTML = `
      <option>Grade-A Corporate Floor</option>
      <option>High-Street Flagship Store</option>
      <option>Creative Tech Loft</option>
    `;
  } else if (type === 'reit') {
    select.innerHTML = `
      <option>Automated Logistics Trust</option>
      <option>Urban Prime Commercial REIT</option>
      <option>Bio-Park Research Trust</option>
    `;
  }
}

// Day vs Twilight Lighting Switcher
let isTwilight = false;
const daytimeImages = {
  res1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
  res2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  res3: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  res4: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80"
};
const twilightImages = {
  res1: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
  res2: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
  res3: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  res4: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
};

function toggleLightingMode() {
  isTwilight = !isTwilight;
  const btn = document.getElementById('lightingToggle');
  const dataset = isTwilight ? twilightImages : daytimeImages;

  document.getElementById('img-res1').src = dataset.res1;
  document.getElementById('img-res2').src = dataset.res2;
  document.getElementById('img-res3').src = dataset.res3;
  document.getElementById('img-res4').src = dataset.res4;

  btn.innerHTML = isTwilight ? "🌙 Twilight View" : "☀️ Day View";
}

// Interactive Dividend Calculator Logic
let currentRate = 8.8;

function selectFund(rate, btn) {
  currentRate = rate;
  document.querySelectorAll('.fund-chips .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  updateCalculator();
}

function updateCalculator() {
  const capital = parseFloat(document.getElementById('capitalSlider').value);
  document.getElementById('capitalDisplay').innerText = '$' + capital.toLocaleString();

  const annual = (capital * currentRate) / 100;
  const monthly = annual / 12;
  const fiveYear = annual * 5;

  document.getElementById('annualPayout').innerText = '$' + Math.round(annual).toLocaleString();
  document.getElementById('monthlyPayout').innerText = '$' + Math.round(monthly).toLocaleString();
  document.getElementById('fiveYearPayout').innerText = '$' + Math.round(fiveYear).toLocaleString();
}

// 3D Tilt Micro-Interaction
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
});

// Comprehensive Drill-Down Data
const detailsData = {
  res1: {
    category: "Residential Luxury Estate",
    title: "The Lumina Waterfront Villa",
    price: "$4,850,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    description: "Architectural coastal estate with double-height glass pavilions, private infinity pool, yacht mooring slip, and automated shading.",
    specs: ["7,200 sq.ft Built Area", "Private Deepwater Boat Slip", "Sub-Zero & Wolf Kitchens", "Smart Home Automation", "Zero HOA Dues"],
    broker: {
      name: "Marcus Vance",
      role: "Senior Partner • Coastal Prime",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    }
  },
  res2: {
    category: "Residential Sky-Villa",
    title: "Skyline Crown Penthouse",
    price: "$3,400,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description: "Occupying the entire 46th floor with 360-degree skyline views, private direct elevator access, and climate-controlled wine gallery.",
    specs: ["5,400 sq.ft Living Space", "Private Sky-Deck & Fire Pit", "24/7 White-Glove Concierge", "3 Underground EV Parking Bays"],
    broker: {
      name: "Elena Rostova",
      role: "Managing Director • Sky Penthouses",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    }
  },
  res3: {
    category: "Alpine Luxury Estate",
    title: "The Aspen Forest Residence",
    price: "$6,200,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    description: "Surrounded by private cedar forests, featuring thermal glass pavilions, geothermal floor heating, and indoor heated infinity pool.",
    specs: ["8,900 sq.ft Footprint", "Heated Indoor Pool & Spa", "Ski-In / Ski-Out Access", "Acoustic Cinema Lounge"],
    broker: {
      name: "Julian Thorne",
      role: "Principal Advisor • Alpine & Rural",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
    }
  },
  res4: {
    category: "Mid-Century Modern Villa",
    title: "Bel-Air Modernist Sanctuary",
    price: "$2,950,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    description: "Iconic minimalist architecture designed around central zen water gardens, olive trees, and natural cantilevered terraces.",
    specs: ["4,800 sq.ft Open Plan", "Zen Water Courtyard", "Integrated Solar Micro-Grid", "Independent Artist Studio"],
    broker: {
      name: "Marcus Vance",
      role: "Senior Partner • Modern Architecture",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    }
  },
  com1: {
    category: "Grade-A Commercial Space",
    title: "Vanguard Business Tower - Fl. 18",
    price: "$28,000 / month",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    description: "Turn-key corporate headquarters equipped with 180 executive workstations, 4 acoustic boardroom suites, and panoramic harbor views.",
    specs: ["12,500 sq.ft Usable Area", "LEED Gold Certified", "Redundant Fiber-Optic Backbone", "24/7 Executive Security & Valet"],
    broker: {
      name: "David Sterling",
      role: "Head of Corporate Tenancy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  },
  com2: {
    category: "Creative Commercial Space",
    title: "Nexus Creative Tech Loft",
    price: "$19,500 / month",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    description: "Industrial chic loft with double-height exposed timber ceilings, soundproof podcast suites, and flexible collaboration floorplates.",
    specs: ["8,200 sq.ft Floorplate", "Flexible Lease (1-5 Years)", "Subdivided Floor Option", "Pet-Friendly Tech Complex"],
    broker: {
      name: "David Sterling",
      role: "Head of Corporate Tenancy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  },
  com3: {
    category: "Flagship Corporate Landmark",
    title: "Aura Apex Global Triplex",
    price: "$55,000 / month",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    description: "Entire 3-floor triplex tower with dedicated VIP street entrance, private rooftop helipad, and board governance facilities.",
    specs: ["24,000 sq.ft Triplex", "Private Helipad Access", "High-Volume Air Filtration", "Biometric Floor Access"],
    broker: {
      name: "David Sterling",
      role: "Head of Corporate Tenancy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  },
  reit1: {
    category: "Institutional Trust (REIT)",
    title: "Urban Prime Commercial REIT",
    price: "8.8% Net Annual Yield",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    description: "Fractional exposure to 14 tier-1 commercial towers leased to Fortune 500 tech and banking institutions with an average weighted lease expiry of 7.2 years.",
    specs: ["$10,000 Minimum Entry", "Quarterly Direct Dividends", "Independent Big-4 Audit", "Liquid Secondary Market"],
    broker: {
      name: "Sarah Jenkins, CFA",
      role: "Portfolio Fund Manager",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    }
  },
  reit2: {
    category: "High-Growth Infrastructure REIT",
    title: "Modern Industrial Logistics REIT",
    price: "10.4% Net Annual Yield",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    description: "Capitalized trust focusing exclusively on automated robotics fulfillment hubs and cold-storage supply chains near key transit corridors.",
    specs: ["$25,000 Minimum Entry", "Monthly Cash Distribution", "99.2% Portfolio Occupancy", "Inflation-Linked Leases"],
    broker: {
      name: "Sarah Jenkins, CFA",
      role: "Portfolio Fund Manager",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    }
  },
  reit3: {
    category: "Specialized Healthcare REIT",
    title: "Bio-Park Research Trust",
    price: "9.2% Net Annual Yield",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
    description: "Specialized trust focused on pharmaceutical oncology research wet-labs and outpatient clinical facilities.",
    specs: ["$15,000 Minimum Entry", "Semi-Annual Dividends", "Triple-Net (NNN) Leases", "Recession-Resilient Tenant Base"],
    broker: {
      name: "Sarah Jenkins, CFA",
      role: "Portfolio Fund Manager",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    }
  }
};

// Sub-Tab Switcher inside Drill-Down Drawer
function setModalTab(tab) {
  document.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-btn-${tab}`).classList.add('active');

  document.getElementById('view-overview').style.display = tab === 'overview' ? 'block' : 'none';
  document.getElementById('view-floorplan').style.display = tab === 'floorplan' ? 'block' : 'none';
  document.getElementById('view-virtualtour').style.display = tab === 'virtualtour' ? 'block' : 'none';
}

function switchFloorLevel(text) {
  document.getElementById('floorLevelText').innerText = text;
}

function assignBrokerWorkflow(brokerName, propertyTitle) {
  alert(`✓ Broker ${brokerName} has been directly assigned to your consultation for "${propertyTitle}". An invitation and NDA packet have been dispatched to your email!`);
}

// 1-Level Drill-Down Drawer with 3D Floorplan, Virtual Tour & Broker Assignment
function openDrillDown(id) {
  const item = detailsData[id];
  if (!item) return;

  const content = `
    <span style="color: #c5a880; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">${item.category}</span>
    <h2 style="font-family: 'Playfair Display', serif; font-size: 1.9rem; margin: 0.4rem 0 0.2rem; color: #fff;">${item.title}</h2>
    <div style="font-size: 1.4rem; color: #c5a880; font-weight: 700; margin-bottom: 1.1rem;">${item.price}</div>

    <!-- Sub-Navigation Tabs -->
    <div class="drilldown-tabs">
      <button class="tab-pill active" id="tab-btn-overview" onclick="setModalTab('overview')">Overview</button>
      <button class="tab-pill" id="tab-btn-floorplan" onclick="setModalTab('floorplan')">3D Floorplan</button>
      <button class="tab-pill" id="tab-btn-virtualtour" onclick="setModalTab('virtualtour')">Virtual Tour (360°)</button>
    </div>

    <!-- Tab 1: Overview -->
    <div id="view-overview">
      <img src="${item.image}" style="width: 100%; height: 230px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;" alt="${item.title}">
      <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.2rem;">${item.description}</p>
      <h4 style="color: #fff; margin-bottom: 0.6rem; font-size: 1rem;">Key Specifications & Highlights:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 1.2rem;">
        ${item.specs.map(s => `<li style="color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.9rem;">✓ ${s}</li>`).join('')}
      </ul>
    </div>

    <!-- Tab 2: Interactive 3D Floorplan -->
    <div id="view-floorplan" style="display: none;">
      <div class="floorplan-box">
        <div class="fp-header">
          <span style="color:#c5a880; font-size:0.85rem; font-weight:600;">Architectural Blueprint Stage</span>
          <div class="level-btns">
            <button class="chip active" onclick="switchFloorLevel('Level 1: Main Living, Waterfront Terrace & Chef Kitchen')">L1</button>
            <button class="chip" onclick="switchFloorLevel('Level 2: Master Executive Suites & Observation Deck')">L2</button>
          </div>
        </div>
        <div id="floorLevelText" style="color:#94a3b8; font-size:0.85rem; margin-bottom:0.8rem;">Level 1: Main Living, Waterfront Terrace & Chef Kitchen</div>
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80" style="width:100%; height:210px; object-fit:cover; border-radius:8px; filter: grayscale(30%) contrast(110%);" alt="3D Architectural Blueprint">
      </div>
    </div>

    <!-- Tab 3: Virtual Tour Stage -->
    <div id="view-virtualtour" style="display: none;">
      <div class="virtual-stage">
        <div class="tour-overlay">
          <span>● 360° Real-Time Immersion</span>
          <button class="btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="alert('Launching 360° 3D Virtual Walkthrough...')">Launch Full Tour</button>
        </div>
        <img src="${item.image}" style="width:100%; height:230px; object-fit:cover; border-radius:8px; filter: brightness(0.85);" alt="360 Tour Frame">
      </div>
    </div>

    <!-- Direct Broker-Assignment Section -->
    <div class="broker-card">
      <div class="broker-info">
        <img src="${item.broker.avatar}" alt="${item.broker.name}" class="broker-avatar">
        <div>
          <span class="broker-badge">Direct Assigned Broker</span>
          <h4 style="color:#fff; font-size:1.05rem; margin:0.1rem 0;">${item.broker.name}</h4>
          <p style="color:#94a3b8; font-size:0.8rem;">${item.broker.role}</p>
        </div>
      </div>
      <div class="broker-actions">
        <button class="btn-primary" style="width:100%; padding:0.85rem;" onclick="assignBrokerWorkflow('${item.broker.name}', '${item.title}')">
          Assign ${item.broker.name.split(' ')[0]} & Book Consultation
        </button>
      </div>
    </div>
  `;

  document.getElementById('drawerContent').innerHTML = content;
  document.getElementById('drawerBackdrop').classList.add('show');
}

function closeDrillDown() {
  document.getElementById('drawerBackdrop').classList.remove('show');
}