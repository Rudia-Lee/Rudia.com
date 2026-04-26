document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element, index) {
        element.style.transitionDelay = index * 0.08 + "s";
        observer.observe(element);
    });

    const textElements = document.querySelectorAll(".text-animate");

    textElements.forEach(function (element) {
        const text = element.textContent;
        element.textContent = "";

        [...text].forEach(function (letter, index) {
            const span = document.createElement("span");

            if (letter === " ") {
                span.innerHTML = "&nbsp;";
            } else {
                span.textContent = letter;
            }

            span.classList.add("char");
            span.style.transitionDelay = index * 0.035 + "s";

            element.appendChild(span);

            setTimeout(function () {
                span.classList.add("show");
            }, 150);
        });
    });

    /* KR / EN 토글 스위치 */
    const langButtons = document.querySelectorAll(".lang-btn");
    const langContainer = document.querySelector(".language");

    if (langButtons.length > 0 && langContainer) {
        langButtons.forEach(function (btn, index) {
            btn.addEventListener("click", function () {
                langButtons.forEach(function (button) {
                    button.classList.remove("active");
                });

                btn.classList.add("active");

                if (index === 1) {
                    langContainer.classList.add("en");
                } else {
                    langContainer.classList.remove("en");
                }
            });
        });
    }
});