document.addEventListener("DOMContentLoaded", function () {
    const profileDrop = document.querySelector(".menu-btn");
    const dropContent = document.querySelector(".dropdown-content");
    profileDrop.addEventListener("click", function (event) {
        dropContent.classList.toggle("active")
        event.stopPropagation();
    });
    document.addEventListener("click", function (event) {
        if (!dropContent.contains(event.target) && !profileDrop.contains(event.target)) {
            dropContent.classList.remove("active");
        }
    });
});


// Находим элементы
const filterPrev = document.querySelector('.filter-prev');
const filterNext = document.querySelector('.filter-next');
const filterLeft = document.querySelector('.filter-left');

// Функция для проверки текущей позиции прокрутки
function checkScroll() {
  if (filterLeft.scrollLeft > 0) {
    filterPrev.style.display = 'block';
  } else {
    filterPrev.style.display = 'none';
  }
    filterNext.style.display =
        filterLeft.scrollWidth > filterLeft.clientWidth &&
        filterLeft.scrollWidth - filterLeft.clientWidth - filterLeft.scrollLeft > 0
        ? 'block'
        : 'none';
}

// Обработчик клика по кнопке "next"
filterNext.addEventListener('click', () => {
  // Прокручиваем вправо на 120px (можно изменить значение)
  filterLeft.scrollBy({
    left: 120,
    behavior: 'smooth'
  });
  // Немного задерживаем проверку, чтобы scrollLeft обновился
  setTimeout(checkScroll, 300);
});

// Обработчик клика по кнопке "prev"
filterPrev.addEventListener('click', () => {
  // Прокручиваем влево на 120px
  filterLeft.scrollBy({
    left: -120,
    behavior: 'smooth'
  });
  setTimeout(checkScroll, 300);
});
// Можно также отслеживать событие прокрутки, чтобы обновлять видимость кнопки в случае, если пользователь прокручивает вручную
filterLeft.addEventListener('scroll', checkScroll);



document.addEventListener("DOMContentLoaded", function () {
    const mobOpenModalBtn = document.getElementById("mob-open-filter-modal");
    const openModalBtn = document.getElementById("open-filter-modal");
    const closeModalBtn = document.getElementById("close-filter-modal");
    const modal = document.querySelector(".filter-modal");
    const bodyC = document.querySelector("body");

    // Функция открытия модального окна
    function openModal() {
        modal.style.display = "flex";
        bodyC.style.overflow = "hidden";
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = "none";
        bodyC.style.overflow = "";
    }

    // Обработчики событий
    openModalBtn.addEventListener("click", openModal);
    mobOpenModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal); // Закрытие при клике на фон
});







document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".home-product");
    products.forEach((product, index) => {
        if (index >= 16) {
            product.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".home-product");
    const productsPerPage = 16;
    let currentPage = 1;
    const totalPages = Math.ceil(products.length / productsPerPage);
    
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageNumber = document.getElementById("pageNumber");

    function showPage(page) {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;

        products.forEach((product, index) => {
            if (index >= start && index < end) {
                product.style.display = "flex";
            } else {
                product.style.display = "none";
            }
        });

        pageNumber.textContent = page;

        // Блокируем кнопки, если достигли границы
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Показываем первую страницу при загрузке
    showPage(currentPage);
});
