async function checkKey() {
  const key = document.getElementById("key").value;
  document.getElementById("result").innerText = "✅ Demo: Key kontrol hazır değil";
}

function randomKey() { return Math.random().toString(36).substring(2, 10).toUpperCase(); }

function addKey() { document.getElementById("adminResult").innerText = "✅ Demo: Key eklendi"; }
function deleteKey() { document.getElementById("adminResult").innerText = "❌ Demo: Key silindi"; }