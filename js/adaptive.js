document.addEventListener("DOMContentLoaded", function () {
    let products = document.querySelectorAll(".mob-home-product");
    let showMoreBtn = document.getElementById("show-more-btn");

    let visibleCount = 5; // Начальное количество отображаемых элементов
    let step = 5; // Количество элементов для подгрузки

    showMoreBtn.addEventListener("click", function () {
        let hiddenProducts = Array.from(products).slice(visibleCount, visibleCount + step);

        hiddenProducts.forEach(product => {
            product.style.display = "flex";
        });

        visibleCount += step;

        // Если показали все элементы — скрываем кнопку
        if (visibleCount >= products.length) {
            showMoreBtn.style.display = "none";
        }
    });
});
