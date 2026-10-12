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
    cta: "Schedule Private Chauffeur Tour"
  },
  res2: {
    category: "Residential Sky-Villa",
    title: "Skyline Crown Penthouse",
    price: "$3,400,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description: "Occupying the entire 46th floor with 360-degree skyline views, private direct elevator access, and climate-controlled wine gallery.",
    specs: ["5,400 sq.ft Living Space", "Private Sky-Deck & Fire Pit", "24/7 White-Glove Concierge", "3 Underground EV Parking Bays"],
    cta: "Schedule Private Chauffeur Tour"
  },
  res3: {
    category: "Alpine Luxury Estate",
    title: "The Aspen Forest Residence",
    price: "$6,200,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    description: "Surrounded by private cedar forests, featuring thermal glass pavilions, geothermal floor heating, and indoor heated infinity pool.",
    specs: ["8,900 sq.ft Footprint", "Heated Indoor Pool & Spa", "Ski-In / Ski-Out Access", "Acoustic Cinema Lounge"],
    cta: "Schedule Private Chauffeur Tour"
  },
  res4: {
    category: "Mid-Century Modern Villa",
    title: "Bel-Air Modernist Sanctuary",
    price: "$2,950,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    description: "Iconic minimalist architecture designed around central zen water gardens, olive trees, and natural cantilevered terraces.",
    specs: ["4,800 sq.ft Open Plan", "Zen Water Courtyard", "Integrated Solar Micro-Grid", "Independent Artist Studio"],
    cta: "Schedule Private Chauffeur Tour"
  },
  com1: {
    category: "Grade-A Commercial Space",
    title: "Vanguard Business Tower - Fl. 18",
    price: "$28,000 / month",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    description: "Turn-key corporate headquarters equipped with 180 executive workstations, 4 acoustic boardroom suites, and panoramic harbor views.",
    specs: ["12,500 sq.ft Usable Area", "LEED Gold Certified", "Redundant Fiber-Optic Backbone", "24/7 Executive Security & Valet"],
    cta: "Request Commercial Tenancy Deck"
  },
  com2: {
    category: "Creative Commercial Space",
    title: "Nexus Creative Tech Loft",
    price: "$19,500 / month",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    description: "Industrial chic loft with double-height exposed timber ceilings, soundproof podcast suites, and flexible collaboration floorplates.",
    specs: ["8,200 sq.ft Floorplate", "Flexible Lease (1-5 Years)", "Subdivided Floor Option", "Pet-Friendly Tech Complex"],
    cta: "Request Commercial Tenancy Deck"
  },
  com3: {
    category: "Flagship Corporate Landmark",
    title: "Aura Apex Global Triplex",
    price: "$55,000 / month",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    description: "Entire 3-floor triplex tower with dedicated VIP street entrance, private rooftop helipad, and board governance facilities.",
    specs: ["24,000 sq.ft Triplex", "Private Helipad Access", "High-Volume Air Filtration", "Biometric Floor Access"],
    cta: "Request Commercial Tenancy Deck"
  },
  reit1: {
    category: "Institutional Trust (REIT)",
    title: "Urban Prime Commercial REIT",
    price: "8.8% Net Annual Yield",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    description: "Fractional exposure to 14 tier-1 commercial towers leased to Fortune 500 tech and banking institutions with an average weighted lease expiry of 7.2 years.",
    specs: ["$10,000 Minimum Entry", "Quarterly Direct Dividends", "Independent Big-4 Audit", "Liquid Secondary Market"],
    cta: "Download Full Investor Prospectus"
  },
  reit2: {
    category: "High-Growth Infrastructure REIT",
    title: "Modern Industrial Logistics REIT",
    price: "10.4% Net Annual Yield",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    description: "Capitalized trust focusing exclusively on automated robotics fulfillment hubs and cold-storage supply chains near key transit corridors.",
    specs: ["$25,000 Minimum Entry", "Monthly Cash Distribution", "99.2% Portfolio Occupancy", "Inflation-Linked Leases"],
    cta: "Download Full Investor Prospectus"
  },
  reit3: {
    category: "Specialized Healthcare REIT",
    title: "Bio-Park Research Trust",
    price: "9.2% Net Annual Yield",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
    description: "Specialized trust focused on pharmaceutical oncology research wet-labs and outpatient clinical facilities.",
    specs: ["$15,000 Minimum Entry", "Semi-Annual Dividends", "Triple-Net (NNN) Leases", "Recession-Resilient Tenant Base"],
    cta: "Download Full Investor Prospectus"
  }
};

function openDrillDown(id) {
  const item = detailsData[id];
  if (!item) return;

  const content = `
    <span style="color: #c5a880; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">${item.category}</span>
    <h2 style="font-family: 'Playfair Display', serif; font-size: 2rem; margin: 0.4rem 0 0.2rem; color: #fff;">${item.title}</h2>
    <div style="font-size: 1.5rem; color: #c5a880; font-weight: 700; margin-bottom: 1.2rem;">${item.price}</div>
    
    <img src="${item.image}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 1.2rem;" alt="${item.title}">
    
    <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">${item.description}</p>
    
    <h4 style="color: #fff; margin-bottom: 0.8rem; font-size: 1.05rem;">Specifications & Asset Drill-down:</h4>
    <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
      ${item.specs.map(s => `<li style="color: #e2e8f0; margin-bottom: 0.5rem; font-size: 0.92rem;">✓ ${s}</li>`).join('')}
    </ul>
    
    <button class="btn-primary" style="width: 100%; padding: 0.95rem;" onclick="alert('Inquiry confirmed! Our Senior Private Advisor will contact you.')">${item.cta}</button>
  `;

  document.getElementById('drawerContent').innerHTML = content;
  document.getElementById('drawerBackdrop').classList.add('show');
}

function closeDrillDown() {
  document.getElementById('drawerBackdrop').classList.remove('show');
}