// --- BASE DE DATOS DE PRODUCTOS ---
// Esta es tu base de datos central. Edita, añade o quita productos aquí.
// Categorías: 'torta', 'galleta', 'reposteria', 'personalizado'
const productsData = [
    // --- TORTAS ---
    { id: 'torta-chocolate', category: 'torta', name: 'Torta de Chocolate', price: '$25.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Chocolate', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Torta+Chocolate', description: 'Delicioso bizcocho de chocolate húmedo, relleno con manjar y frambuesas frescas, cubierto con un suave ganache de chocolate.', materials: [ 'Harina de trigo', 'Cacao en polvo', 'Huevos de campo', 'Frambuesas frescas', 'Manjar casero', 'Chocolate' ] },
    { id: 'torta-red-velvet', category: 'torta', name: 'Torta Red Velvet', price: '$28.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Red+Velvet', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Torta+Red+Velvet', description: 'Un clásico inolvidable. Bizcocho de terciopelo rojo, suave y ligeramente achocolatado, con un irresistible frosting de queso crema.', materials: [ 'Harina', 'Azúcar', 'Buttermilk', 'Aceite', 'Huevos', 'Cacao', 'Queso crema' ] },
    { id: 'torta-zanahoria', category: 'torta', name: 'Torta de Zanahoria', price: '$26.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Zanahoria', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Torta+Zanahoria', description: 'Bizcocho especiado y húmedo con zanahoria rallada y nueces trozadas, cubierto con un delicioso frosting de queso crema.', materials: [ 'Zanahoria', 'Harina integral', 'Nueces', 'Canela', 'Huevos', 'Queso crema' ] },
    { id: 'cheesecake-frutos-rojos', category: 'torta', name: 'Cheesecake Frutos Rojos', price: '$24.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cheesecake', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Cheesecake', description: 'Cremoso cheesecake horneado sobre una base de galleta, coronado con una generosa salsa casera de frutos rojos.', materials: [ 'Queso crema', 'Crema de leche', 'Galletas', 'Mantequilla', 'Frutos rojos', 'Azúcar' ] },
    
    // --- GALLETAS ---
    { id: 'cookies-chocolate-chip', category: 'galleta', name: 'Cookies Chocolate Chip', price: '$1.700 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cookies', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Cookies', description: 'La clásica galleta americana: crujiente por fuera, blanda por dentro y repleta de chips de chocolate semi-amargo.', materials: [ 'Chips de chocolate', 'Harina', 'Mantequilla', 'Azúcar rubia', 'Huevo', 'Bicarbonato' ] },
    { id: 'galletas-vainilla', category: 'galleta', name: 'Galletas de Vainilla', price: '$1.500 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Vainilla', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Galletas+Vainilla', description: 'Tiernas galletas de mantequilla con un toque de vainilla, decoradas a mano con glaseado real. Perfectas para regalos y eventos.', materials: [ 'Harina', 'Mantequilla', 'Azúcar', 'Huevo', 'Vainilla', 'Azúcar glas' ] },
    { id: 'galletas-craqueladas', category: 'galleta', name: 'Galletas Craqueladas', price: '$1.800 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Craqueladas', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Craqueladas', description: 'Intensas galletas de chocolate con una textura similar a un brownie, cubiertas de azúcar glas que se craquela al hornear.', materials: [ 'Chocolate amargo', 'Cacao', 'Azúcar glas', 'Huevo', 'Harina' ] },

    // --- REPOSTERÍA Y OTROS ---
    { id: 'alfajores-maicena', category: 'reposteria', name: 'Alfajores de Maicena', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Alfajores', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Alfajores', description: 'Suaves y delicados alfajores que se deshacen en la boca, rellenos de manjar y con los bordes pasados por coco rallado.', materials: [ 'Maicena', 'Manjar', 'Coco rallado', 'Harina', 'Mantequilla', 'Yemas de huevo' ] },
    { id: 'brownies-chocolate', category: 'reposteria', name: 'Brownies de Chocolate', price: '$2.200 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Brownies', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Brownies', description: 'Cuadrados de chocolate intensos y húmedos, con una capa superior crujiente. Pueden incluir nueces o chips de chocolate extra.', materials: ['Chocolate', 'Mantequilla', 'Azúcar', 'Huevos', 'Harina', 'Nueces (opcional)'] },
    { id: 'macarons-surtidos', category: 'reposteria', name: 'Macarons Surtidos', price: '$2.000 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Macarons', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Macarons', description: 'Finos merengues de almendra con un relleno cremoso. Disponibles en una variedad de sabores como chocolate, frambuesa, pistacho y maracuyá.', materials: [ 'Harina de almendras', 'Claras de huevo', 'Azúcar', 'Rellenos variados' ] },

    // --- PERSONALIZADOS ---
    { id: 'cupcakes-personalizados', category: 'personalizado', name: 'Cupcakes Personalizados', price: 'Desde $2.000 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cupcakes', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Cupcakes', description: 'Nuestros cupcakes son la porción perfecta de felicidad. Elige el sabor del bizcocho y el frosting a tu gusto. Ideales para mesas dulces.', materials: [ 'Ingredientes varían según la elección del cliente', 'Base de harina, azúcar, huevos, mantequilla' ] },
    { id: 'torta-de-boda', category: 'personalizado', name: 'Torta de Boda', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Boda', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Torta+Boda', description: 'Diseñamos la torta de tus sueños para tu día especial. Múltiples pisos, sabores y decoraciones florales o temáticas. Contáctanos para una cotización.', materials: ['Ingredientes premium', 'Diseño a medida', 'Flores naturales o de azúcar', 'Fondant o buttercream'] },
    { id: 'galletas-corporativas', category: 'personalizado', name: 'Galletas Corporativas', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Logo', image_detail: 'https://placehold.co/600x600/E18AAA/FFFFFF?text=Galletas+Logo', description: 'Galletas de mantequilla personalizadas con el logo de tu empresa en papel de azúcar comestible. Perfectas para eventos, regalos a clientes o activaciones de marca.', materials: ['Mantequilla', 'Harina', 'Azúcar', 'Papel de azúcar comestible', 'Tinta comestible'] }
];

// --- CÓDIGO DEL SITIO WEB ---
document.addEventListener('DOMContentLoaded', () => {
    handleMobileMenu();
    loadFooter();
    setActiveNav();
    loadPageContent();
});

// Maneja el menú hamburguesa en móviles
function handleMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Carga el contenido del footer dinámicamente para no repetirlo
function loadFooter() {
    const footer = document.getElementById('contacto');
    if (footer) {
        footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-column">
                <h4>Navegación</h4>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="tortas.html">Tortas</a></li>
                    <li><a href="galletas.html">Galletas</a></li>
                    <li><a href="Personalization.html">Personalizados</a></li>
                    <li><a href="faq.html">Preguntas Frecuentes</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Síguenos</h4>
                <div class="social-media">
                    <a href="https://www.instagram.com/c_y_c_cookies_and_cakes/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/56961961556" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="footer-column map-container">
                <h4>Ubicación para Retiros</h4>
                <p>La Florida, Santiago, Chile</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53225.9772345856!2d-70.61834383125!3d-33.513599999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d007a34965c7%3A0x889856d3b37996a0!2sLa%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1718155099513!5m2!1ses-419!2scl" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} C&C Cookies and Cakes. Todos los derechos reservados.</p>
        </div>`;
    }
}

// Marca el link de navegación activo
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Función principal que determina qué contenido cargar
function loadPageContent() {
    const page = window.location.pathname.split("/").pop();

    switch(page) {
        case 'index.html':
        case '':
            initHeroSlider();
            loadProductPreviews();
            break;
        case 'tortas.html':
            loadCategorizedProducts('torta');
            break;
        case 'galletas.html':
            // Carga galletas y repostería en la misma página
            loadCategorizedProducts(['galleta', 'reposteria']);
            break;
        case 'Personalization.html':
            loadCategorizedProducts('personalizado');
            break;
        case 'detalles.html':
            loadProductDetails();
            break;
        case 'faq.html':
            initFaqAccordion();
            break;
    }
}

// Inicia el carrusel de imágenes de fondo en la página de inicio
function initHeroSlider() {
    const sliderContainer = document.querySelector('.hero-slider');
    if (!sliderContainer) return;

    const images = [
        'images/slider-1.jpg',
        'images/slider-2.jpg',
        'images/slider-3.jpg'
    ];
    
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${img})`;
        if (index === 0) slide.classList.add('active');
        sliderContainer.appendChild(slide);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slider .slide');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Cambia de imagen cada 5 segundos
}

// Carga vistas previas de productos en la página de inicio
function loadProductPreviews() {
    loadProductsToGrid('torta', '#torta-product-grid', 4);
    loadProductsToGrid('galleta', '#galleta-product-grid', 4);
    loadProductsToGrid('reposteria', '#reposteria-product-grid', 4);
}

// Función genérica para cargar productos en una cuadrícula
function loadProductsToGrid(category, gridSelector, limit) {
    const productGrid = document.querySelector(gridSelector);
    if (!productGrid) return;
    
    const productsToDisplay = productsData.filter(p => p.category === category).slice(0, limit);
    renderProducts(productsToDisplay, productGrid);
}

// Carga productos en las páginas de categoría
function loadCategorizedProducts(categories) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    // Asegurarse de que 'categories' sea siempre un array
    const categoryArray = Array.isArray(categories) ? categories : [categories];
    
    const productsToDisplay = productsData.filter(p => categoryArray.includes(p.category));
    renderProducts(productsToDisplay, productGrid);
}

// Renderiza las tarjetas de producto en una cuadrícula
function renderProducts(products, gridElement) {
    gridElement.innerHTML = ''; // Limpiar la cuadrícula
    if (products.length === 0) {
        gridElement.innerHTML = '<p>Próximamente más delicias en esta categoría.</p>';
        return;
    }
    
    products.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image_card}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <a href="detalles.html?id=${product.id}" class="btn btn-secondary">Ver Detalles</a>
            </div>
        `;
        gridElement.appendChild(card);
    });
}

// Carga los detalles de un producto específico en detalles.html
function loadProductDetails() {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = productsData.find(p => p.id === productId);

    if (product) {
        document.title = `${product.name} - C&C Cookies and Cakes`;
        const materialsList = product.materials.map(material => `<li><i class="fas fa-cookie-bite"></i> ${material}</li>`).join('');
        container.innerHTML = `
            <div class="product-detail-layout">
                <div class="product-detail-image"><img src="${product.image_detail}" alt="${product.name}"></div>
                <div class="product-detail-info">
                    <h1 class="product-detail-title">${product.name}</h1>
                    <p class="product-detail-price">${product.price}</p>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-extra"><h3>Ingredientes Principales</h3><ul>${materialsList}</ul></div>
                    <div class="product-availability-note">
                        <strong>Nota:</strong> Todos los pedidos están sujetos a disponibilidad y se agendan con 10-20 días de anticipación.
                    </div>
                    <a href="Personalization.html" class="btn btn-primary">Encargar o Personalizar</a>
                </div>
            </div>`;
    } else {
        container.innerHTML = '<p>Producto no encontrado. Por favor, vuelve al <a href="index.html">inicio</a>.</p>';
    }
}

// Inicializa el acordeón de la página de FAQ
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}

// Envía el formulario de pedido personalizado a WhatsApp
function sendOrderToWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('whatsappPhone').value.trim();
    const details = document.getElementById('customDetails').value.trim();
    
    if (!name || !phone || !details) {
        alert('Por favor, completa todos los campos requeridos: Nombre, WhatsApp y Detalles.');
        return;
    }
    
    const businessWhatsAppNumber = "56961961556"; 
    let message = `¡Hola C&C Cookies and Cakes! 👋 Quisiera cotizar un pedido personalizado:\n\n👤 *Nombre:* ${name}\n📱 *WhatsApp:* ${phone}\n✨ *Detalles de la cotización:* ${details}\n\n¡Muchas gracias!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank').focus();
}