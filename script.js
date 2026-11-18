// Website JavaScript Funktionalität
console.log("Website geladen!");
// Funktion für dynamischen Content
function addDynamicContent() {
 const body = document.body;
 const newParagraph = document.createElement('p');
 newParagraph.textContent = 'Dieser Text wurde mit JavaScript hinzugefügt!';
 newParagraph.className = 'highlight';
 body.appendChild(newParagraph);
}
// Event Listener für Seitenladung
document.addEventListener('DOMContentLoaded', function() {
 console.log('DOM ist bereit!');
 const button = document.createElement('button');
 button.textContent = 'Dynamischen Content hinzufügen';
 button.onclick = addDynamicContent;
 document.body.appendChild(button);
});
// Die JavaScript-Funktionalität wird im Branch feature-javascript ergänzt.

// FEHLER: nur für die Reset-Übung
function brokenFunction() {
    console.log("Dies ist ein Fehler);
    undefinedVariable.someMethod();
}

brokenFunction();
