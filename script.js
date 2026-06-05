
const fContainer = document.getElementById('flower-container');
const sContainer = document.getElementById('sparkle-container');

function createEffect() {
    const f = document.createElement('div');
    f.innerHTML = '🌸'; f.className = 'flower';
    f.style.left = Math.random() * 100 + 'vw';
    f.style.animationDuration = Math.random() * 5 + 5 + 's';
    fContainer.appendChild(f);
    
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    sContainer.appendChild(s);
    
    setTimeout(() => { f.remove(); s.remove(); }, 6000);
}

document.getElementById('gift').onclick = () => {
    document.getElementById('intro').style.display = 'none';
    const main = document.getElementById('main-content');
    main.style.display = 'block';
    setTimeout(() => main.style.opacity = '1', 100);
    document.getElementById('bgMusic').play();
    setInterval(createEffect, 300);
    setInterval(() => {
        if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
            window.scrollBy(0, 1);
        }
    }, 80);
};
