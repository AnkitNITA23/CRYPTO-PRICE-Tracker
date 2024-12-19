document.getElementById('checkPrice').addEventListener('click', async () => {
  const crypto = document.getElementById('crypto').value;
  const currency = document.getElementById('currency').value;

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`);
    const data = await response.json();
    const price = data[crypto][currency];

    document.getElementById('priceOutput').innerHTML = `
      <div class="mt-4 p-6 bg-gray-800 rounded-lg shadow-lg fade-in">
        <h3 class="text-2xl font-bold">Crypto: ${crypto}</h3>
        <p class="text-lg">Price in ${currency.toUpperCase()}: <span class="text-yellow-500 font-bold">${price}</span></p>
      </div>`;
  } catch (error) {
    document.getElementById('priceOutput').innerHTML = `<p class="text-red-500">Error fetching price. Please try again.</p>`;
  }
});
