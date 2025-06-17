let index = 0;
const carousel = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const visibleItems = 3;

function nextSlide() {
    items[index].classList.add("blur"); // Размытие перед переключением
    index = (index + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    items[index].classList.add("blur"); // Размытие перед переключением
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const shift = index * (items[0].clientWidth + 10);
    carousel.style.transform = `translateX(-${shift}px)`;

    setTimeout(() => {
        items.forEach(item => item.classList.remove("blur")); // Снятие размытия после анимации
    }, 500);
}
