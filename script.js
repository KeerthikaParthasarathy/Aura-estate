function switchFilter(type) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  const select = document.getElementById('assetSelect');
  if (type === 'buy') {
    select.innerHTML = `
      <option>Penthouse / Luxury Apartment</option>
      <option>Waterfront Villa</option>
      <option>Gated Estate</option>
    `;
  } else if (type === 'rent') {
    select.innerHTML = `
      <option>Prime Office Floor</option>
      <option>High-Street Retail Store</option>
      <option>Coworking Hub</option>
    `;
  } else if (type === 'reit') {
    select.innerHTML = `
      <option>Urban Commercial Trust</option>
      <option>Logistics Warehouse Trust</option>
      <option>Diversified Income Fund</option>
    `;
  }
}