document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector(".form form");
    const submitBtn = document.querySelector(".form__btn");

    if (form){
        form.addEventListener("submit",(e) =>{
            e.preventDefault();

            const textoOrginal = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "Enviando Solicitud";

            console.log("Formulario Funciona")

            setTimeout(()=> {
                submitBtn.textContent="¡Enviado con éxito!";

                form.reset();

                setTimeout(()=>{
                    submitBtn.disabled = false;
                    submitBtn.textContent = textoOrginal;
                },2500)
                
            },1200)

        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".investment__card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animado");
                observer.unobserve(entry.target); // Se ejecuta una sola vez por tarjeta
            }
        });
    }, {
        threshold: 0.1 // Se dispara cuando el 10% de la tarjeta entra en pantalla
    });

    cards.forEach(card => observer.observe(card));
});




document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todas las tarjetas que queremos animar
    const containers = document.querySelectorAll(".data__container");

    // Configuramos el observador
    const observerOptions = {
        root: null, // Utiliza la ventana del navegador (viewport)
        rootMargin: "0px",
        threshold: 0.2 // Se activa cuando al menos el 20% del elemento es visible en pantalla
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento ya llegó a la pantalla
            if (entry.isIntersecting) {
                // Añadimos la clase que dispara la animación de opacidad
                entry.target.classList.add("is-visible");
                
                // Deitamos de observar el elemento para que la animación ocurra una sola vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Ponemos a observar cada contenedor de datos
    containers.forEach(container => {
        observer.observe(container);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos tanto los bloques de datos como el hero__data
    const elementsToAnimate = document.querySelectorAll(".data__container, .hero__data");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase para disparar la animación
                entry.target.classList.add("is-visible");
                
                // Dejamos de observar el elemento para que la animación ocurra una sola vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Ponemos a observar cada elemento encontrado
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});