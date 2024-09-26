// Functie om een unieke nonce te genereren
function generateNonce() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString();
}

// Genereer de nonce
const nonce = generateNonce();

// Voeg de nonce toe aan de Content Security Policy
const metaCSP = document.createElement('meta');
metaCSP.httpEquiv = "Content-Security-Policy";
metaCSP.content = `script-src 'self' 'nonce-${nonce}';`;
document.head.appendChild(metaCSP);

// Voeg nonce toe aan de importmap
const importmapScript = document.createElement('script');
importmapScript.type = 'importmap';
importmapScript.nonce = nonce;  // Zorg dat de nonce hier wordt toegevoegd
importmapScript.textContent = JSON.stringify({
    imports: {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
    }
});
document.body.appendChild(importmapScript);

// Voeg een inline script toe met de juiste nonce
const inlineScript = document.createElement('script');
inlineScript.nonce = nonce;
inlineScript.textContent = "console.log('Dit inline script is toegestaan.');"; // Voeg hier je code toe
document.body.appendChild(inlineScript);
