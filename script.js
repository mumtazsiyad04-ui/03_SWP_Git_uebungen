
// Website JavaScript Funktionalität
console.log("Website geladen!");

// Funktion für dynamischen Content
function addDynamicContent() {
    const container = document.querySelector('.container');

    const newParagraph = document.createElement('p');

    newParagraph.textContent =
        'Dieser Text wurde mit JavaScript hinzugefügt!';

    newParagraph.className = 'highlight';

    container.appendChild(newParagraph);
}

// Event Listener für Seitenladung
document.addEventListener('DOMContentLoaded', function() {

    console.log('DOM ist bereit!');

    const button = document.getElementById('addContentBtn');

    button.addEventListener('click', addDynamicContent);

});
