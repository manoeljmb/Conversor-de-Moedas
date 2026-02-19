  async function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const resultElement = document.getElementById("result");
    const rateInfoElement = document.getElementById("rateInfo");
    const updatedInfoElement = document.getElementById("updatedInfo");
    const detailsInfoElement = document.getElementById("detailsInfo");
    const inverseInfoElement = document.getElementById("inverseInfo");



    if (isNaN(amount) || amount <= 0) {
      resultElement.innerText = "Digite um valor válido.";
      rateInfoElement.innerText = "";
      updatedInfoElement.innerText = "";
      detailsInfoElement.innerText = "";
      inverseInfoElement.innerText = "";


      return;
    }

    resultElement.innerText = "Calculando...";
    rateInfoElement.innerText = "";
    updatedInfoElement.innerText = "";
    detailsInfoElement.innerText = "";
    inverseInfoElement.innerText = "";



    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const data = await response.json();

      const rate = data.rates[to];

      if (!rate) {
        resultElement.innerText = "Moeda não encontrada.";
        return;
      }

      const converted = (amount * rate).toFixed(2);

      resultElement.innerText = `${converted} ${to}`;
      rateInfoElement.innerText = `1 ${from} = ${rate.toFixed(4)} ${to}`;
      detailsInfoElement.innerText = `${amount} ${from} × ${rate.toFixed(6)} = ${converted} ${to}`;

      const inverseRate = (1 / rate);
      inverseInfoElement.innerText = `Conversão inversa: 1 ${to} = ${inverseRate.toFixed(4)} ${from}`;

      const now = new Date();
      const formattedDate = now.toLocaleDateString("pt-BR");
      const formattedTime = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

      updatedInfoElement.innerText = `Atualizado em ${formattedDate} às ${formattedTime}`;

    } catch (error) {
      resultElement.innerText = "Erro ao buscar cotação.";
      rateInfoElement.innerText = "Verifique sua conexão ou tente novamente.";
    }
  }

document.getElementById("copyBtn").addEventListener("click", () => {
  const resultText = document.getElementById("result").innerText;
  const copyMsgElement = document.getElementById("copyMsg");

  if (!resultText || resultText.includes("Erro") || resultText.includes("Carregando")) {
    copyMsgElement.innerText = "Nada para copiar.";
    return;
  }

  // Tentativa moderna
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(resultText)
      .then(() => {
        copyMsgElement.innerText = "Copiado!";
        setTimeout(() => copyMsgElement.innerText = "", 2000);
      })
      .catch(() => {
        copyMsgElement.innerText = "Erro ao copiar.";
      });

  } else {
    // Fallback antigo
    const textarea = document.createElement("textarea");
    textarea.value = resultText;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      copyMsgElement.innerText = "Copiado!";
      setTimeout(() => copyMsgElement.innerText = "", 2000);
    } catch (err) {
      copyMsgElement.innerText = "Erro ao copiar.";
    }

    document.body.removeChild(textarea);
  }
});


  document.getElementById("convertBtn").addEventListener("click", convertCurrency);
  document.getElementById("swapBtn").addEventListener("click", () => {
  const fromSelect = document.getElementById("from");
  const toSelect = document.getElementById("to");

  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;

  convertCurrency();
});


  // Converter automaticamente quando mudar moeda
  document.getElementById("from").addEventListener("change", convertCurrency);
  document.getElementById("to").addEventListener("change", convertCurrency);

  // Converter automaticamente quando mudar valor
  document.getElementById("amount").addEventListener("input", convertCurrency);

  // Converter automaticamente ao carregar
  convertCurrency();

function getFavorites() {
  return JSON.parse(localStorage.getItem("currencyFavorites")) || [];
}

function saveFavorites(favs) {
  localStorage.setItem("currencyFavorites", JSON.stringify(favs));
}

function renderFavorites() {
  const favoritesList = document.getElementById("favoritesList");
  const favs = getFavorites();

  favoritesList.innerHTML = "";

  if (favs.length === 0) {
    favoritesList.innerHTML = "<p style='color:#9ca3af;font-size:13px;margin:0;'>Nenhum favorito salvo.</p>";
    return;
  }

  favs.forEach((fav, index) => {
    const div = document.createElement("div");
    div.className = "favorite-item";

    div.innerHTML = `
      <span class="favorite-text">${fav.from} → ${fav.to}</span>
      <div>
        <button onclick="loadFavorite(${index})">Usar</button>
        <button class="favorite-remove" onclick="removeFavorite(${index})">X</button>
      </div>
    `;

    favoritesList.appendChild(div);
  });
}

function loadFavorite(index) {
  const favs = getFavorites();
  const fav = favs[index];

  document.getElementById("from").value = fav.from;
  document.getElementById("to").value = fav.to;

  convertCurrency();
}

function removeFavorite(index) {
  const favs = getFavorites();
  favs.splice(index, 1);
  saveFavorites(favs);
  renderFavorites();
}

document.getElementById("saveFavBtn").addEventListener("click", () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const favs = getFavorites();

  // evita duplicado
  const alreadyExists = favs.some(f => f.from === from && f.to === to);

  if (!alreadyExists) {
    favs.push({ from, to });
    saveFavorites(favs);
    renderFavorites();
  } else {
    alert("Esse favorito já existe!");
  }
});

// renderiza favoritos ao carregar a página
renderFavorites();
window.loadFavorite = loadFavorite;
window.removeFavorite = removeFavorite;

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convertCurrency();
  }
});


document.querySelectorAll(".quick-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const from = btn.getAttribute("data-from");
    const to = btn.getAttribute("data-to");

    document.getElementById("from").value = from;
    document.getElementById("to").value = to;

    convertCurrency();
  });
});