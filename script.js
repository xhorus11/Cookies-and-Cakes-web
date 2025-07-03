// --- BASE DE DATOS DE PRODUCTOS ---
const productsData = [
    // --- TORTAS (7 ejemplos) ---
    { id: 'torta-chocolate', category: 'torta', name: 'Torta de Chocolate', price: '$25.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Chocolate', description: 'Delicioso bizcocho de chocolate húmedo, relleno con manjar y frambuesas frescas, cubierto con un suave ganache de chocolate.', materials: [ 'Harina de trigo', 'Cacao en polvo', 'Huevos de campo', 'Frambuesas frescas', 'Manjar casero', 'Chocolate' ] },
    { id: 'torta-red-velvet', category: 'torta', name: 'Torta Red Velvet', price: '$28.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Red+Velvet', description: 'Un clásico inolvidable. Bizcocho de terciopelo rojo, suave y ligeramente achocolatado, con un irresistible frosting de queso crema.', materials: [ 'Harina', 'Azúcar', 'Buttermilk', 'Aceite', 'Huevos', 'Cacao', 'Queso crema' ] },
    { id: 'torta-zanahoria', category: 'torta', name: 'Torta de Zanahoria', price: '$26.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Zanahoria', description: 'Bizcocho especiado y húmedo con zanahoria rallada y nueces trozadas, cubierto con un delicioso frosting de queso crema.', materials: [ 'Zanahoria', 'Harina integral', 'Nueces', 'Canela', 'Huevos', 'Queso crema' ] },
    { id: 'cheesecake-frutos-rojos', category: 'torta', name: 'Cheesecake Frutos Rojos', price: '$24.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cheesecake', description: 'Cremoso cheesecake horneado sobre una base de galleta, coronado con una generosa salsa casera de frutos rojos.', materials: [ 'Queso crema', 'Crema de leche', 'Galletas', 'Mantequilla', 'Frutos rojos', 'Azúcar' ] },
    { id: 'torta-tres-leches', category: 'torta', name: 'Torta Tres Leches', price: '$22.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Tres+Leches', description: 'Bizcocho esponjoso bañado en una mezcla de tres leches, cubierto con merengue italiano y un toque de canela.', materials: [ 'Leche condensada', 'Leche evaporada', 'Crema de leche', 'Huevos', 'Harina', 'Canela' ] },
    { id: 'torta-limon-amapolas', category: 'torta', name: 'Torta Limón y Amapolas', price: '$23.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Limon', description: 'Fresco y aromático bizcocho de limón con semillas de amapola, relleno con curd de limón y cubierto con un glaseado suave.', materials: [ 'Limón', 'Semillas de amapola', 'Harina', 'Azúcar', 'Yogurt', 'Mantequilla' ] },
    { id: 'torta-panqueque-naranja', category: 'torta', name: 'Torta Panqueque Naranja', price: '$27.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Panqueque+Naranja', description: 'Finas capas de panqueques intercaladas con una delicada crema de naranja y manjar, cubierta con chocolate.', materials: [ 'Naranja', 'Manjar', 'Harina', 'Huevos', 'Chocolate', 'Leche' ] },
    
    // --- GALLETAS (7 ejemplos) ---
    { id: 'cookies-chocolate-chip', category: 'galleta', name: 'Cookies Chocolate Chip', price: '$1.700 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cookies', description: 'La clásica galleta americana: crujiente por fuera, blanda por dentro y repleta de chips de chocolate semi-amargo.', materials: [ 'Chips de chocolate', 'Harina', 'Mantequilla', 'Azúcar rubia', 'Huevo', 'Bicarbonato' ] },
    { id: 'galletas-vainilla', category: 'galleta', name: 'Galletas de Vainilla', price: '$1.500 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Vainilla', description: 'Tiernas galletas de mantequilla con un toque de vainilla, decoradas a mano con glaseado real. Perfectas para regalos y eventos.', materials: [ 'Harina', 'Mantequilla', 'Azúcar', 'Huevo', 'Vainilla', 'Azúcar glas' ] },
    { id: 'galletas-craqueladas', category: 'galleta', name: 'Galletas Craqueladas', price: '$1.800 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Craqueladas', description: 'Intensas galletas de chocolate con una textura similar a un brownie, cubiertas de azúcar glas que se craquela al hornear.', materials: [ 'Chocolate amargo', 'Cacao', 'Azúcar glas', 'Huevo', 'Harina' ] },
    { id: 'galletas-avena-pasas', category: 'galleta', name: 'Galletas Avena y Pasas', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Avena+y+Pasas', description: 'Una galleta contundente y sabrosa, con la textura de la avena y el dulzor de las pasas. Ligeramente especiada con canela.', materials: [ 'Avena', 'Pasas', 'Harina', 'Canela', 'Mantequilla', 'Azúcar rubia' ] },
    { id: 'galletas-limon', category: 'galleta', name: 'Galletas de Limón', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Limon', description: 'Galletas suaves y mantecosas con un intenso sabor a limón y un glaseado brillante.', materials: [ 'Limón', 'Harina', 'Mantequilla', 'Azúcar', 'Huevo' ] },
    { id: 'galletas-jengibre', category: 'galleta', name: 'Galletas de Jengibre', price: '$1.700 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Jengibre', description: 'Clásicas galletas especiadas con jengibre, canela y clavo de olor. Perfectas para la temporada navideña o para acompañar un té.', materials: [ 'Jengibre', 'Canela', 'Melaza', 'Harina', 'Mantequilla' ] },
    { id: 'galletas-matcha', category: 'galleta', name: 'Galletas de Matcha', price: '$1.900 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Matcha', description: 'Originales galletas con el distintivo sabor del té verde matcha y trocitos de chocolate blanco.', materials: [ 'Té matcha', 'Chocolate blanco', 'Harina', 'Mantequilla', 'Azúcar' ] },

    // --- REPOSTERÍA (7 ejemplos) ---
    { id: 'alfajores-maicena', category: 'reposteria', name: 'Alfajores de Maicena', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Alfajores', description: 'Suaves y delicados alfajores que se deshacen en la boca, rellenos de manjar y con los bordes pasados por coco rallado.', materials: [ 'Maicena', 'Manjar', 'Coco rallado', 'Harina', 'Mantequilla', 'Yemas de huevo' ] },
    { id: 'brownies-chocolate', category: 'reposteria', name: 'Brownies de Chocolate', price: '$2.200 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Brownies', description: 'Cuadrados de chocolate intensos y húmedos, con una capa superior crujiente. Pueden incluir nueces o chips de chocolate extra.', materials: ['Chocolate', 'Mantequilla', 'Azúcar', 'Huevos', 'Harina', 'Nueces (opcional)'] },
    { id: 'macarons-surtidos', category: 'reposteria', name: 'Macarons Surtidos', price: '$2.000 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Macarons', description: 'Finos merengues de almendra con un relleno cremoso. Disponibles en una variedad de sabores como chocolate, frambuesa, pistacho y maracuyá.', materials: [ 'Harina de almendras', 'Claras de huevo', 'Azúcar', 'Rellenos variados' ] },
    { id: 'cupcakes-vainilla', category: 'reposteria', name: 'Cupcakes de Vainilla', price: '$2.000 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cupcakes', description: 'Esponjosos cupcakes de vainilla cubiertos con un suave buttercream de vainilla y chispas de colores.', materials: [ 'Vainilla', 'Harina', 'Mantequilla', 'Leche', 'Huevos' ] },
    { id: 'pie-de-limon', category: 'reposteria', name: 'Mini Pie de Limón', price: '$2.500 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Mini+Pies', description: 'Porción individual del clásico pie de limón, con base de galleta, relleno cremoso y merengue italiano.', materials: [ 'Limones', 'Leche condensada', 'Galletas', 'Mantequilla', 'Claras de huevo' ] },
    { id: 'donas-glaseadas', category: 'reposteria', name: 'Donas Glaseadas', price: '$1.800 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Donas', description: 'Donas horneadas, esponjosas y ligeras, cubiertas con un glaseado de azúcar o de chocolate.', materials: [ 'Harina', 'Leche', 'Levadura', 'Azúcar glas', 'Mantequilla' ] },
    { id: 'rollos-canela', category: 'reposteria', name: 'Rollos de Canela', price: '$2.300 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Rollos+Canela', description: 'Tiernos rollos de masa dulce con un generoso relleno de canela y azúcar, cubiertos con un glaseado de queso crema.', materials: [ 'Canela', 'Queso crema', 'Harina', 'Levadura', 'Mantequilla' ] },

    // --- PERSONALIZADOS ---
    { id: 'cupcakes-personalizados', category: 'personalizado', name: 'Cupcakes Personalizados', price: 'Desde $2.000 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cupcakes+Pers.', description: 'Nuestros cupcakes son la porción perfecta de felicidad. Elige el sabor del bizcocho y el frosting a tu gusto. Ideales para mesas dulces.', materials: [ 'Ingredientes varían según la elección del cliente', 'Base de harina, azúcar, huevos, mantequilla' ] },
    { id: 'torta-de-boda', category: 'personalizado', name: 'Torta de Boda', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Boda', description: 'Diseñamos la torta de tus sueños para tu día especial. Múltiples pisos, sabores y decoraciones florales o temáticas. Contáctanos para una cotización.', materials: ['Ingredientes premium', 'Diseño a medida', 'Flores naturales o de azúcar', 'Fondant o buttercream'] },
    { id: 'galletas-corporativas', category: 'personalizado', name: 'Galletas Corporativas', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Logo', description: 'Galletas de mantequilla personalizadas con el logo de tu empresa en papel de azúcar comestible. Perfectas para eventos, regalos a clientes o activaciones de marca.', materials: ['Mantequilla', 'Harina', 'Azúcar', 'Papel de azúcar comestible', 'Tinta comestible'] }
];

// --- CÓDIGO DEL SITIO WEB ---
document.addEventListener('DOMContentLoaded', () => {
    handleMobileMenu();
    loadFooter();
    setActiveNav();
    loadPageContent();
});

function handleMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => navLinks.classList.toggle('active'));
    }
}

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
                    <li><a href="reposteria.html">Repostería</a></li>
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
        <div class="copyright"><p>&copy; ${new Date().getFullYear()} C&C Cookies and Cakes. Todos los derechos reservados.</p></div>`;
    }
}

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });
}

function loadPageContent() {
    const page = window.location.pathname.split("/").pop();
    switch(page) {
        case 'index.html':
        case '':
            initHeroSlider();
            loadProductPreviews();
            break;
        case 'tortas.html':
            loadCategorizedProducts(['torta'], '#product-grid');
            break;
        case 'galletas.html':
            loadCategorizedProducts(['galleta'], '#product-grid');
            break;
        case 'reposteria.html':
            loadCategorizedProducts(['reposteria'], '#product-grid');
            break;
        case 'Personalization.html':
            loadCategorizedProducts(['personalizado'], '#product-grid', 3);
            break;
        case 'detalles.html':
            loadProductDetails();
            break;
        case 'faq.html':
            initFaqAccordion();
            break;
    }
}

function initHeroSlider() {
    const sliderContainer = document.querySelector('.hero-slider');
    if (!sliderContainer) return;
    const images = ['images/slider-1.jpg', 'images/slider-2.jpg', 'images/slider-3.jpg'];
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${img})`;
        if (index === 0) slide.classList.add('active');
        sliderContainer.appendChild(slide);
    });
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
}

function loadProductPreviews() {
    loadCategorizedProducts(['torta'], '#torta-product-grid', 3);
    loadCategorizedProducts(['galleta'], '#galleta-product-grid', 3);
    loadCategorizedProducts(['reposteria'], '#reposteria-product-grid', 3);
}

function loadCategorizedProducts(categories, gridSelector, limit) {
    const productGrid = document.querySelector(gridSelector);
    if (!productGrid) return;
    let productsToDisplay = productsData.filter(p => categories.includes(p.category));
    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }
    renderProducts(productsToDisplay, productGrid);
}

function renderProducts(products, gridElement) {
    gridElement.innerHTML = '';
    if (products.length === 0) {
        gridElement.innerHTML = '<p>Próximamente más delicias en esta categoría.</p>';
        return;
    }
    products.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <a href="detalles.html?id=${product.id}" class="product-card-link">
                <div class="product-image-container">
                    <img src="${product.image_card}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                </div>
            </a>
            <div class="product-card-action">
                 <a href="detalles.html?id=${product.id}" class="btn btn-secondary">Ver Detalles</a>
            </div>
        `;
        gridElement.appendChild(card);
    });
}

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
                <div class="product-detail-image"><img src="${product.image_card.replace('400x400', '600x600')}" alt="${product.name}"></div>
                <div class="product-detail-info">
                    <h1 class="product-detail-title">${product.name}</h1>
                    <p class="product-detail-price">${product.price}</p>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-availability-note">
                        <strong>Nota:</strong> Todos los pedidos están sujetos a disponibilidad y se agendan con 10-20 días de anticipación.
                    </div>
                    <div class="product-detail-extra"><h3>Ingredientes Principales</h3><ul>${materialsList}</ul></div>
                    <a href="Personalization.html" class="btn btn-primary">Encargar o Personalizar</a>
                </div>
            </div>`;
    } else {
        container.innerHTML = '<p>Producto no encontrado. Por favor, vuelve al <a href="index.html">inicio</a>.</p>';
    }
}

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.toggle('active');
            answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : null;
        });
    });
}

function sendOrderToWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('whatsappPhone').value.trim();
    const email = document.getElementById('email').value.trim();
    const productType = document.getElementById('productType').value;
    const details = document.getElementById('customDetails').value.trim();
    const deliveryDate = document.getElementById('deliveryDate').value;

    if (!name || !phone || !details) {
        alert('Por favor, completa los campos requeridos: Nombre, WhatsApp y Descripción de tu idea.');
        return;
    }
    
    const businessWhatsAppNumber = "56961961556"; 
    
    let message = `¡Hola C&C Cookies and Cakes! 👋 Quisiera cotizar un pedido personalizado:\n\n`;
    message += `👤 *Nombre:* ${name}\n`;
    message += `📱 *WhatsApp:* ${phone}\n`;
    if (email) message += `📧 *Correo:* ${email}\n`;
    message += `🎂 *Tipo de Producto:* ${productType}\n`;
    if (deliveryDate) message += `🗓️ *Fecha de Retiro Deseada:* ${deliveryDate}\n`;
    message += `\n✨ *Detalles de la cotización:*\n${details}\n\n`;
    message += `¡Muchas gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank').focus();
}
