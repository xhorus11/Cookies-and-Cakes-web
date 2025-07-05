// --- BASE DE DATOS DE PRODUCTOS ---
const productsData = [
    // --- TORTAS (8 ejemplos) ---
    { id: 'torta-chocolate', category: 'torta', name: 'Torta de Ciruela', price: '$40.000 - $50.000', image_card: 'https://i.imgur.com/GwNkAJA.jpeg', description: '꩜.ᐟ Bizcocho firme de ciruelas con nueces, relleno de crema de ciruelas y manjar', materials: [ 'Harina de trigo', 'Cacao en polvo', 'Huevos de campo', 'Frambuesas frescas', 'Manjar casero', 'Chocolate' ] },
    { id: 'torta-red-velvet', category: 'torta', name: 'Kuchen de Manzana', price: '$15.000', image_card: 'https://i.imgur.com/E9lq9yc.jpeg', description: 'Suave masa, rellena de manzanas y nueces, cubierto de Crumble.', materials: [ 'Harina', 'Azúcar', 'Buttermilk', 'Aceite', 'Huevos', 'Cacao', 'Queso crema' ] },
    { id: 'torta-zanahoria', category: 'torta', name: 'Torta de Zanahoria', price: '$26.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Zanahoria', description: 'Bizcocho especiado y húmedo con zanahoria rallada y nueces trozadas, cubierto con un delicioso frosting de queso crema.', materials: [ 'Zanahoria', 'Harina integral', 'Nueces', 'Canela', 'Huevos', 'Queso crema' ] },
    { id: 'cheesecake-frutos-rojos', category: 'torta', name: 'Cheesecake Frutos Rojos', price: '$24.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cheesecake', description: 'Cremoso cheesecake horneado sobre una base de galleta, coronado con una generosa salsa casera de frutos rojos.', materials: [ 'Queso crema', 'Crema de leche', 'Galletas', 'Mantequilla', 'Frutos rojos', 'Azúcar' ] },
    { id: 'torta-tres-leches', category: 'torta', name: 'Torta Tres Leches', price: '$22.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Tres+Leches', description: 'Bizcocho esponjoso bañado en una mezcla de tres leches, cubierto con merengue italiano y un toque de canela.', materials: [ 'Leche condensada', 'Leche evaporada', 'Crema de leche', 'Huevos', 'Harina', 'Canela' ] },
    { id: 'torta-limon-amapolas', category: 'torta', name: 'Torta Limón y Amapolas', price: '$23.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Limon', description: 'Fresco y aromático bizcocho de limón con semillas de amapola, relleno con curd de limón y cubierto con un glaseado suave.', materials: [ 'Limón', 'Semillas de amapola', 'Harina', 'Azúcar', 'Yogurt', 'Mantequilla' ] },
    { id: 'torta-panqueque-naranja', category: 'torta', name: 'Torta Panqueque Naranja', price: '$27.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Panqueque+Naranja', description: 'Finas capas de panqueques intercaladas con una delicada crema de naranja y manjar, cubierta con chocolate.', materials: [ 'Naranja', 'Manjar', 'Harina', 'Huevos', 'Chocolate', 'Leche' ] },
    { id: 'torta-selva-negra', category: 'torta', name: 'Torta Selva Negra', price: '$29.000', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Selva+Negra', description: 'Capas de bizcocho de chocolate embebido en licor de cereza, con crema chantilly y cerezas. Decorada con virutas de chocolate.', materials: ['Chocolate', 'Cerezas', 'Crema Chantilly', 'Harina', 'Huevos', 'Licor de Cereza'] },

    // --- GALLETAS (6 ejemplos) ---
    { id: 'cookies-chocolate-chip', category: 'galleta', name: 'Cookies Chocolate Chip', price: '$1.700 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cookies', description: 'La clásica galleta americana: crujiente por fuera, blanda por dentro y repleta de chips de chocolate semi-amargo.', materials: [ 'Chips de chocolate', 'Harina', 'Mantequilla', 'Azúcar rubia', 'Huevo', 'Bicarbonato' ] },
    { id: 'galletas-vainilla', category: 'galleta', name: 'Galletas de Vainilla', price: '$1.500 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Vainilla', description: 'Tiernas galletas de mantequilla con un toque de vainilla, decoradas a mano con glaseado real. Perfectas para regalos y eventos.', materials: [ 'Harina', 'Mantequilla', 'Azúcar', 'Huevo', 'Vainilla', 'Azúcar glas' ] },
    { id: 'galletas-craqueladas', category: 'galleta', name: 'Galletas Craqueladas', price: '$1.800 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Craqueladas', description: 'Intensas galletas de chocolate con una textura similar a un brownie, cubiertas de azúcar glas que se craquela al hornear.', materials: [ 'Chocolate amargo', 'Cacao', 'Azúcar glas', 'Huevo', 'Harina' ] },
    { id: 'galletas-avena-pasas', category: 'galleta', name: 'Galletas Avena y Pasas', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Avena+y+Pasas', description: 'Una galleta contundente y sabrosa, con la textura de la avena y el dulzor de las pasas. Ligeramente especiada con canela.', materials: [ 'Avena', 'Pasas', 'Harina', 'Canela', 'Mantequilla', 'Azúcar rubia' ] },
    { id: 'galletas-limon', category: 'galleta', name: 'Galletas de Limón', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Limon', description: 'Galletas suaves y mantecosas con un intenso sabor a limón y un glaseado brillante.', materials: [ 'Limón', 'Harina', 'Mantequilla', 'Azúcar', 'Huevo' ] },
    { id: 'galletas-jengibre', category: 'galleta', name: 'Galletas de Jengibre', price: '$1.700 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Jengibre', description: 'Clásicas galletas especiadas con jengibre, canela y clavo de olor. Perfectas para la temporada navideña o para acompañar un té.', materials: [ 'Jengibre', 'Canela', 'Melaza', 'Harina', 'Mantequilla' ] },

    // --- REPOSTERÍA (4 ejemplos) ---
    { id: 'alfajores-maicena', category: 'reposteria', name: 'Alfajores de Maicena', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Alfajores', description: 'Suaves y delicados alfajores que se deshacen en la boca, rellenos de manjar y con los bordes pasados por coco rallado.', materials: [ 'Maicena', 'Manjar', 'Coco rallado', 'Harina', 'Mantequilla', 'Yemas de huevo' ] },
    { id: 'brownies-chocolate', category: 'reposteria', name: 'Brownies de Chocolate', price: '$2.200 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Brownies', description: 'Cuadrados de chocolate intensos y húmedos, con una capa superior crujiente. Pueden incluir nueces o chips de chocolate extra.', materials: ['Chocolate', 'Mantequilla', 'Azúcar', 'Huevos', 'Harina', 'Nueces (opcional)'] },
    { id: 'macarons-surtidos', category: 'reposteria', name: 'Macarons Surtidos', price: '$2.000 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Macarons', description: 'Finos merengues de almendra con un relleno cremoso. Disponibles en una variedad de sabores como chocolate, frambuesa, pistacho y maracuyá.', materials: [ 'Harina de almendras', 'Claras de huevo', 'Azúcar', 'Rellenos variados' ] },
    { id: 'rollos-canela', category: 'reposteria', name: 'Rollos de Canela', price: '$2.300 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Rollos+Canela', description: 'Tiernos rollos de masa dulce con un generoso relleno de canela y azúcar, cubiertos con un glaseado de queso crema.', materials: [ 'Canela', 'Queso crema', 'Harina', 'Levadura', 'Mantequilla' ] },

    // --- PERSONALIZADOS ---
    { id: 'cupcakes-personalizados', category: 'personalizado', name: 'Cupcakes Personalizados', price: 'Desde $2.000 c/u', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Cupcakes+Pers.', description: 'Nuestros cupcakes son la porción perfecta de felicidad. Elige el sabor del bizcocho y el frosting a tu gusto. Ideales para mesas dulces.', materials: [ 'Ingredientes varían según la elección del cliente', 'Base de harina, azúcar, huevos, mantequilla' ] },
    { id: 'torta-de-boda', category: 'personalizado', name: 'Torta de Boda', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Boda', description: 'Diseñamos la torta de tus sueños para tu día especial. Múltiples pisos, sabores y decoraciones florales o temáticas. Contáctanos para una cotización.', materials: ['Ingredientes premium', 'Diseño a medida', 'Flores naturales o de azúcar', 'Fondant o buttercream'] },
    { id: 'galletas-corporativas', category: 'personalizado', name: 'Galletas Corporativas', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Logo', description: 'Galletas de mantequilla personalizadas con el logo de tu empresa en papel de azúcar comestible. Perfectas para eventos, regalos a clientes o activaciones de marca.', materials: ['Mantequilla', 'Harina', 'Azúcar', 'Papel de azúcar comestible', 'Tinta comestible'] }
];

// --- FUNCIONES GLOBALES ---

function renderProducts(products, gridElement) {
    if (!gridElement) return;
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

function loadCategorizedProducts(categories, gridSelector, limit) {
    const productGrid = document.querySelector(gridSelector);
    if (!productGrid) return;
    let productsToDisplay = productsData.filter(p => categories.includes(p.category));
    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }
    renderProducts(productsToDisplay, productGrid);
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
                    <a href="personalizados.html" class="btn btn-primary">Encargar o Personalizar</a>
                </div>
            </div>`;
    } else {
        container.innerHTML = '<p>Producto no encontrado. Por favor, vuelve al <a href="index.html">inicio</a>.</p>';
    }
}

function initFaqAccordion() {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;

    faqContainer.addEventListener('click', (e) => {
        const questionButton = e.target.closest('.faq-question');
        if (!questionButton) return;

        const currentItem = questionButton.parentElement;
        const answer = currentItem.querySelector('.faq-answer');
        const isActive = currentItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            }
        });

        if (!isActive) {
            currentItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            currentItem.classList.remove('active');
            answer.style.maxHeight = null;
        }
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
    if (deliveryDate) {
        const date = new Date(deliveryDate);
        const userTimezoneOffset = date.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(date.getTime() + userTimezoneOffset);
        const formattedDate = new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' }).format(adjustedDate);
        message += `🗓️ *Fecha de Retiro Deseada:* ${formattedDate}\n`;
    }
    message += `\n✨ *Detalles de la cotización:*\n${details}\n\n`;
    message += `¡Muchas gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank').focus();
}

// --- LÓGICA DE INICIALIZACIÓN DE PÁGINA ---
function initializePage() {
    const pageName = window.location.pathname.split('/').pop();

    // Funciones comunes a todas las páginas
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    const footer = document.getElementById('contacto');
    if (footer) {
        footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-column"><h4>Navegación</h4><ul><li><a href="index.html">Inicio</a></li><li><a href="tortas.html">Tortas</a></li><li><a href="galletas.html">Galletas</a></li><li><a href="reposteria.html">Repostería</a></li><li><a href="personalizados.html">Personalizados</a></li><li><a href="faq.html">Preguntas Frecuentes</a></li></ul></div>
            <div class="footer-column"><h4>Síguenos</h4><div class="social-media"><a href="https://www.instagram.com/c_y_c_cookies_and_cakes/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a><a href="https://wa.me/56961961556" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a></div></div>
            <div class="footer-column map-container"><h4>Ubicación para Retiros</h4><p>La Florida, Santiago, Chile</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53225.9772345856!2d-70.61834383125!3d-33.513599999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d007a34965c7%3A0x889856d3b37996a0!2sLa%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1718155099513!5m2!1ses-419!2scl" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
        <div class="copyright"><p>&copy; ${new Date().getFullYear()} C&C Cookies and Cakes. Todos los derechos reservados.</p></div>`;
    }
    
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === pageName) {
            link.classList.add('active');
        }
    });

    // Funciones específicas de cada página
    if (pageName === 'index.html' || pageName === '') {
        const sliderContainer = document.querySelector('.hero-slider');
        if (sliderContainer) {
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
        loadCategorizedProducts(['torta'], '#torta-product-grid', 3);
        loadCategorizedProducts(['galleta'], '#galleta-product-grid', 3);
        loadCategorizedProducts(['reposteria'], '#reposteria-product-grid', 3);
    } else if (pageName === 'tortas.html') {
        loadCategorizedProducts(['torta'], '#product-grid');
    } else if (pageName === 'galletas.html') {
        loadCategorizedProducts(['galleta'], '#product-grid');
    } else if (pageName === 'reposteria.html') {
        loadCategorizedProducts(['reposteria'], '#product-grid');
    } else if (pageName === 'personalizados.html') {
        const productGrid = document.getElementById('product-grid');
        if (productGrid) {
            loadCategorizedProducts(['personalizado'], '#product-grid', 3);
        }
    } else if (pageName === 'detalles.html') {
        loadProductDetails();
    } else if (pageName === 'faq.html') {
        initFaqAccordion();
    }
}

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializePage);
