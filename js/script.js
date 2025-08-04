document.addEventListener('DOMContentLoaded', function() {
    // Manejo de la lógica de mostrar/ocultar proyectos dentro de los servicios
    const showProjectsButtons = document.querySelectorAll('.show-projects-btn');
    const backToServiceButtons = document.querySelectorAll('.back-to-service-btn');

    showProjectsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceItem = this.closest('.service-item');
            const defaultContent = serviceItem.querySelector('.service-default-content');
            const targetId = this.getAttribute('data-target');
            const projectView = serviceItem.querySelector(`#${targetId}-projects`);

            if (defaultContent && projectView) {
                // Ocultar contenido por defecto
                defaultContent.classList.add('d-none');
                
                // Mostrar vista de proyectos con animación
                projectView.classList.remove('d-none');
                setTimeout(() => { // Pequeño delay para que la transición CSS sea visible
                    projectView.classList.add('active');
                }, 10);

                // Inicializar el carrusel específico de este servicio
                const carouselElement = projectView.querySelector('.carousel');
                if (carouselElement && !carouselElement.dataset.bsCls) { // Evita reinicializar
                    const carousel = new bootstrap.Carousel(carouselElement);
                    carouselElement.dataset.bsCls = 'initialized'; // Marca como inicializado
                }
            }
        });
    });

    backToServiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceItem = this.closest('.service-item');
            const defaultContent = serviceItem.querySelector('.service-default-content');
            const projectView = this.closest('.service-project-view');

            if (defaultContent && projectView) {
                // Ocultar vista de proyectos con animación
                projectView.classList.remove('active');
                setTimeout(() => { // Pequeño delay para que la transición CSS sea visible
                    projectView.classList.add('d-none');
                    // Mostrar contenido por defecto
                    defaultContent.classList.remove('d-none');
                }, 400); // Duración de la transición CSS
            }
        });
    });

    // Inicialización del carrusel principal del Hero (si tienes múltiples slides)
    // Asegúrate de que el carrusel principal tenga el ID "mainCarousel"
    var mainCarouselElement = document.getElementById('mainCarousel');
    if (mainCarouselElement) {
        var mainCarousel = new bootstrap.Carousel(mainCarouselElement, {
            interval: 5000, // Intervalo de 5 segundos
            ride: 'carousel'
        });
    }
});