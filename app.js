

let out = document.getElementById('output');
let iconz = document.getElementById('clip');

iconz.addEventListener('click', () => {
    window.navigator.clipboard.writeText(out.innerText)
});