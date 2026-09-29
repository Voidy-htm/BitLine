const lPage = document.querySelector('.loading-page')
const lMain = document.getElementById('main')

const emo = document.getElementById('emo')
let emojis = ['👾', '⚡', '🤖', '🚀']
let currentIndex = 0;

const site = document.getElementById('content')
site.classList.add('hidden')


emo.addEventListener('animationiteration', () => {
    currentIndex = (currentIndex + 1) % emojis.length;
    emo.textContent = emojis[currentIndex]
})

window.addEventListener('load', () => {
    setTimeout(() => {
        lPage.classList.add('hidden');
        site.style.animation = 'enter 1s ease-in'
        site.classList.remove('hidden')
    }, 3000);
})


