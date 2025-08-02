// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigoInput = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

const amigos = []

function agregarAmigo() {
    const amigo = amigoInput.value

    if (amigo === "") return alert("Por favor ingresa un valor");

    listaAmigos.innerHTML = "";
    resultado.innerHTML = ""
    amigos.push(amigo);

    const fragmento = document.createDocumentFragment();
    
    amigos.forEach(amigo => {
        const amigoElemento = document.createElement("li");
        amigoElemento.textContent = amigo;
        fragmento.appendChild(amigoElemento);
    });

    listaAmigos.appendChild(fragmento);

    amigoInput.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) return alert("Por favor ingresa amigos");

    resultado.innerHTML = "";
    listaAmigos.innerHTML = "";

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    const resultadoEl = document.createElement("li");
    resultadoEl.textContent = `El amigo sorteado es: ${amigoSorteado}`;

    resultado.appendChild(resultadoEl);
}