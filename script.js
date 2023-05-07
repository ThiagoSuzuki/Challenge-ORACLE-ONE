textarea.focus(); // focus text area

function isEmpty(textarea) {
  if (textarea.length === 0) {
    document.getElementById("vazio").innerHTML = ("Campo está vazio. Digite algo");
    document.getElementById("vazio").style.color = "red";
    return true;
  }
  return false;
}

function criptografar() {
  let textarea = document.getElementById("textarea").value;
  texto = textarea;

  var texto = textarea.toLowerCase();
  console.log("valor do textarea antes de criptografar: ", texto);

  if (isEmpty(textarea)) {
    return;
  }

  let cripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

  console.log("valor criptografado: " + cripto);
  document.getElementById("textarea").value = cripto;
  document.getElementById("result").innerHTML = cripto;
}

//

function descriptografar() {
  let textarea = document.getElementById("textarea").value;
  texto = textarea;
  console.log("valor do textarea: ", texto);

  if (isEmpty(textarea)) { // verifica se campo textarea está vazio
    return;
  }

  let decripto = texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  console.log("valor descriptografado: " + decripto);
  document.getElementById("textarea").value = decripto;
  document.getElementById("result").innerHTML = decripto;
}

function copiarTexto() {
  let textarea = document.getElementById("textarea");
  textarea.select();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textarea.value)
      .then(() => {
        console.log("Texto copiado: " + textarea.value);
        document.getElementById("textocopiado").innerHTML = ("Texto copiado: " + textarea.value);
        alert("Texto copiado: " + textarea.value);
      })
      .catch(err => alert("Erro ao copiar texto: " + err));
  } else {
    alert("Este navegador não suporta a API Clipboard.");
  }
}
