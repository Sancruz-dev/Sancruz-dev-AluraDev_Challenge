const selected = document.querySelector(".selecionado");
const selecionadoBox = document.querySelector(".selecionado-box");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".busca-box input");

const optionsList = document.querySelectorAll(".option");

selecionadoBox.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");
  
  if (optionsContainer.classList.contains("active")) 
  { searchBox.focus(); }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });

});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};


// === === === === === CONFIGURAÇÃO HIGHLIGHT 

const codeArea = document.querySelector(".codigo-wrapper")
const linguagem = document.querySelector(".options-container")
const btn = document.querySelector(".btn-verhighlight")

function mudaLinguagem() {
    const codigo = codeArea.querySelector("code")
    codeArea.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    codeArea.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', ()=> {
    mudaLinguagem()
})

btn.addEventListener('click', ()=> {
    const codigo = codeArea.querySelector('code')
    console.log(codigo);
    hljs.highlightBlock(codigo)
})