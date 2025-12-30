// Carousel Logic
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let current = 0;

function showSlide(index) {
    slides.forEach((s) => s.classList.remove('active'));
    slides[index].classList.add('active');
}

next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

// Modal Logic
const modal = document.getElementById("videoModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};
