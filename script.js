// --- BASE DE DATOS DE PRODUCTOS ---
const productsData = [
    // --- TORTAS (8 ejemplos) ---
    { id: 'torta-chocolate', category: 'torta', name: 'Torta Amor', price: '$40.000 - $48.000', image_card: 'https://i.imgur.com/f8kng5n.jpeg', description: '୨୧ Hojarascas rellenas con manjar, crema pastelera y chantilly con frambuesas enteras.<br><br>୨୧ Disponible para 20 y 25 personas. ', materials: [ 'Harina de trigo', 'Cacao en polvo', 'Huevos de campo', 'Frambuesas frescas', 'Manjar casero', 'Chocolate' ] },
    { id: 'torta-red-velvet', category: 'torta', name: 'Kuchen de Manzana', price: '$15.000', image_card: 'https://i.imgur.com/E9lq9yc.jpeg', description: '୨୧ Suave masa, rellena de manzanas y nueces, cubierto de Crumble.<br><br>୨୧ Disponible para 10 a 15 personas.', materials: [ 'Harina', 'Azúcar', 'Buttermilk', 'Aceite', 'Huevos', 'Cacao', 'Queso crema' ] },
    { id: 'torta-zanahoria', category: 'torta', name: 'Torta Amapolas', price: '$35.000 - $42.000', image_card: 'https://i.imgur.com/McNjkAs.jpeg', description: '୨୧ Bizcocho de amapolas, relleno de manjar, mermelada de frambuesa con chantilly y cubierta de crema Chantilly.<br><br>୨୧ Disponible para 20 y 25 personas.', materials: [ 'Zanahoria', 'Harina integral', 'Nueces', 'Canela', 'Huevos', 'Queso crema' ] },
    { id: 'cheesecake-frutos-rojos', category: 'torta', name: 'Kuchen de Nuez', price: '$18.000', image_card: 'https://i.imgur.com/sNk6xWC.jpeg', description: '୨୧ Suave masa, relleno de una delicada crema de manjar y nuez.<br><br>୨୧ Disponible para 10 a 15 personas.', materials: [ 'Queso crema', 'Crema de leche', 'Galletas', 'Mantequilla', 'Frutos rojos', 'Azúcar' ] },
    { id: 'torta-tres-leches', category: 'torta', name: 'Torta de Ciruela', price: '$40.000 - $50.000', image_card: 'https://i.imgur.com/GwNkAJA.jpeg', description: '୨୧ Bizcocho firme de ciruelas con nueces, relleno de crema de ciruelas y manjar.<br><br>୨୧ Disponible para 20 y 25 personas.', materials: [ 'Leche condensada', 'Leche evaporada', 'Crema de leche', 'Huevos', 'Harina', 'Canela' ] },
    { id: 'torta-limon-amapolas', category: 'torta', name: 'Torta Panqueque Chocolate', price: '$45.000 - $55.000', image_card: 'https://i.imgur.com/HMqjsXY.jpeg', description: '୨୧ Rellena de mousse de chocolate amargo y chocolate dulce.<br><br>୨୧ Disponible para 20 y 25 personas. ', materials: [ 'Limón', 'Semillas de amapola', 'Harina', 'Azúcar', 'Yogurt', 'Mantequilla' ] },
    { id: 'torta-panqueque-naranja', category: 'torta', name: 'Torta Mil Hojas', price: '$40.000 - $48.000', image_card: 'https://i.imgur.com/Srf1dWc.jpeg', description: '୨୧ Hojarascas rellenas de manjar y nueces, cubierta con merengue italiano.<br><br>୨୧ Disponible para 20 y 25 personas. ', materials: [ 'Naranja', 'Manjar', 'Harina', 'Huevos', 'Chocolate', 'Leche' ] },
    { id: 'torta-selva-negra', category: 'torta', name: 'Torta Colonial', price: '$40.000 - $48.000', image_card: 'https://i.imgur.com/DbCXzpi.jpeg', description: '୨୧ Hojarascas rellenas de manjar con nueces y crema pastelera.<br><br>୨୧ Disponible para 20 y 25 personas.', materials: ['Chocolate', 'Cerezas', 'Crema Chantilly', 'Harina', 'Huevos', 'Licor de Cereza'] },
    { id: 'torta-mixta', category: 'torta', name: 'Torta Mixta', price: '$40.000 - $50.000', image_card: 'https://i.imgur.com/uXslHVR.jpeg', description: '୨୧ Bizcocho de chocolates, relleno de mix de frutos rojos al ron, hojarascas , manjar y chantilly, cubierta con chantilly.<br><br>୨୧ Disponible para 20 y 25 personas.', materials: ['Chocolate', 'Cerezas', 'Crema Chantilly', 'Harina', 'Huevos', 'Licor de Cereza'] },

    // --- GALLETAS (6 ejemplos) ---
    { id: 'galletas-surtidas', category: 'galleta', name: 'Galletas surtidas', price: '', image_card: 'https://i.postimg.cc/fLBCjsFK/Captura-de-pantalla-2025-07-13-144948.png', description: 'Deléitate con esta exquisita selección de galletas artesanales, perfectas para acompañar un café o endulzar cualquier momento del día. Cada pieza está elaborada con dedicación y variedad de sabores y texturas', materials: [ 'Chips de chocolate', 'Harina', 'Mantequilla', 'Azúcar rubia', 'Huevo', 'Bicarbonato' ] },
    { id: 'galletas-craqueladas', category: 'galleta', name: 'Galletas craqueladas', price: '', image_card: 'https://i.postimg.cc/4xqNVSsX/Galletas-craqueladas-red-velvet.jpg', description: 'Deliciosas galletas craqueladas, disponibles en Red Velvet, Limón y más.', materials: [ 'Chocolate amargo', 'Cacao', 'Azúcar glas', 'Huevo', 'Harina' ] },
    { id: 'galletas-vainilla', category: 'galleta', name: 'Galleta de Vainilla', price: '', image_card: 'https://i.postimg.cc/pd4cJK6N/galleta-de-vainilla.jpg', description: 'Exquisita galleta de vainilla decorada con royalcing', materials: [ 'Huevo', 'Harina', 'Mantequilla', 'Azúcar' ] },
    { id: 'galletas-jengibre', category: 'galleta', name: 'Galletas de Jengibre', price: '', image_card: 'https://i.postimg.cc/tg6R5N4W/galletas-de-jengibre.jpg', description: 'Clásicas galletas especiadas con jengibre, canela y clavo de olor. Perfectas para la temporada navideña o para acompañar un té.', materials: [ 'Jengibre', 'Canela', 'Melaza', 'Harina', 'Mantequilla' ] },
    { id: 'galletas-personalizadas', category: 'galleta', name: 'Galletas Personalizadas', price: '', image_card: 'https://i.postimg.cc/kMzBpZxX/galletas-personalizadas.jpg', description: 'Diseñadas especialmente para ti, estas deliciosas galletas de vainilla combinan sabor casero con creatividad única. Decoradas a mano con glaseado royal, son perfectas para cumpleaños, eventos, regalos especiales o simplemente darte un gustito original.', materials: [ 'Huevo', 'Azúcar', 'Harina', 'Mantequilla' ] },
    { id: 'galletas-delicias', category: 'galleta', name: 'Galletas Delicias', price: '', image_card: 'https://i.postimg.cc/T1hrGDw8/galletas-delicias-2.jpg', description: 'Una galleta única y sofisticada, cargada con trozos de nueces y almendras tostadas, con un toque de naranja. Una verdadera delicia.', materials: ['Harina', 'Mantequilla', 'Nueces', 'Almendras', 'Ralladura de naranja'] },
    { id: 'galletas-adviento', category: 'galleta', name: 'Calendario de Adviento', price: '$12.500', image_card: 'https://i.postimg.cc/CxQM6rBs/calendario-adviento.jpg', description: 'Presentamos nuestro Calendario de Adviento de 12 días con Galletas Decoradas, hechas con amor y dedicación para hacer de esta temporada un momento inolvidable. Cada día, descubre una nueva galleta decorada y deliciosa detrás de una de las 12 ventanas de nuestro calendario.', materials: ['Harina', 'Mantequilla', 'huevo', 'Azúcar'] },

    // --- REPOSTERÍA (4 ejemplos) ---
    { id: 'alfajores-maicena', category: 'reposteria', name: 'Alfajores de Maicena', price: '', image_card: 'https://i.postimg.cc/J75nvxcQ/alfajor-de-maicena.jpg', description: 'Suaves y delicados alfajores que se deshacen en la boca, rellenos de manjar y con los bordes pasados por coco rallado.', materials: [ 'Maicena', 'Manjar', 'Coco rallado', 'Harina', 'Mantequilla', 'Yemas de huevo' ] },
    { id: 'macarons-surtidos', category: 'reposteria', name: 'Macarons Surtidos', price: '', image_card: 'https://i.postimg.cc/qq1CTxng/macarrons-amarillos.jpg', description: 'Finos merengues de almendra con un relleno cremoso. Disponibles en una variedad de sabores como chocolate, frambuesa, limón, maracuyá y más.', materials: [ 'Harina de almendras', 'Claras de huevo', 'Azúcar', 'Rellenos variados' ] },
    { id: 'rollos-canela', category: 'reposteria', name: 'Rollos de Canela', price: '', image_card: 'https://i.postimg.cc/3JJPFXM0/rollo-de-canela.jpg', description: 'Tiernos rollos de masa dulce con un generoso relleno de canela y azúcar, cubiertos con un glaseado de queso crema.', materials: [ 'Canela', 'Queso crema', 'Harina', 'Levadura', 'Mantequilla' ] },
    { id: 'pie-limon', category: 'reposteria', name: 'Pie de Limón', price: '', image_card: 'https://i.postimg.cc/FHSV73xN/pie-de-limon-2.jpg', description: 'Clásico y refrescante pie de limón con una base de galleta crujiente, un relleno cremoso y un merengue italiano perfectamente dorado.', materials: ['Base de galleta', 'Leche condensada', 'Jugo de limón fresco', 'Huevos', 'Merengue italiano'] },
    { id: 'dulces-chilenos', category: 'reposteria', name: 'Dulces Chilenos', price: 'Valor depende del dulce', image_card: 'https://i.postimg.cc/xjb8r5jf/Captura-de-pantalla-2025-07-13-152247.png', description: 'Nuestra bandeja rebosa sabor con los clásicos alfajores chilenos y chilenitos cubiertos de merengue, rellenos con suave manjar y decorados con azúcar flor, coco o nuez. Cada bocado es una explosión de nostalgia y dulzura artesanal', materials: [ 'Manjar', 'Huevos', 'Harina', 'Leche', 'Mantequilla' ] },
    { id: 'churros', category: 'reposteria', name: 'Churros', price: '', image_card: 'https://i.postimg.cc/8z8NRgLM/churros.jpg', description: 'Sumérgelos en manjar, chocolate o azúcar y déjate llevar por el placer de un clásico irresistible 🤤✨ Perfectos para acompañar tu cafecito o para una tarde de antojo.', materials: [ 'Huevos', 'Harina', 'Azúcar', 'Mantequilla' ] },
    
    // --- PERSONALIZADOS ---
    { id: 'cupcakes-personalizados', category: 'personalizado', name: 'Cupcakes Personalizados de Suculentas', price: 'Desde $2.000 c/u', image_card: 'https://i.postimg.cc/cJQRzjxc/cupcakes-cactus.jpg', description: 'Nuestros cupcakes son la porción perfecta de felicidad. Elige el sabor del bizcocho y el frosting a tu gusto. Ideales para mesas dulces.', materials: [ 'Ingredientes varían según la elección del cliente', 'Base de harina, azúcar, huevos, mantequilla' ] },
    { id: 'torta-de-boda', category: 'personalizado', name: 'Torta de Boda', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Boda', description: 'Diseñamos la torta de tus sueños para tu día especial. Múltiples pisos, sabores y decoraciones florales o temáticas. Contáctanos para una cotización.', materials: ['Ingredientes premium', 'Diseño a medida', 'Flores naturales o de azúcar', 'Fondant o buttercream'] },
    { id: 'galletas-corporativas', category: 'personalizado', name: 'Galletas Corporativas', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Logo', description: 'Galletas de mantequilla personalizadas con el logo de tu empresa en papel de azúcar comestible. Perfectas para eventos, regalos a clientes o activaciones de marca.', materials: ['Mantequilla', 'Harina', 'Azúcar', 'Papel de azúcar comestible', 'Tinta comestible'] },
    { id: 'galletas-personalizadas', category: 'personalizado', name: 'Galletas Personalizadas', price: 'Consultar', image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Galletas+Tematicas', description: 'Creamos galletas con el diseño que tú quieras. Perfectas para cumpleaños, bautizos, baby showers o cualquier celebración. Cuéntanos tu idea y la horneamos para ti.', materials: ['Diseño a medida', 'Galleta de mantequilla o vainilla', 'Glasé real (Royal Icing)', 'Colorantes comestibles'] }
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
        let priceNote = '';

        if (product.category === 'galleta') {
            priceNote = `
                <div style="background-color: #fdeff2; border-left: 4px solid #E18AAA; padding: 12px 18px; margin: 0 0 1.5rem 0; font-size: 0.95rem; color: #555;">
                    <strong>Nota sobre el precio:</strong> El valor puede variar según el nivel de detalle y personalización del diseño. ¡No dudes en consultar!
                </div>
            `;
        }

        container.innerHTML = `
            <div class="product-detail-layout">
                <div class="product-detail-image"><img src="${product.image_detail || product.image_card}" alt="${product.name}"></div>
                <div class="product-detail-info">
                    <h1 class="product-detail-title">${product.name}</h1>
                    <p class="product-detail-price">${product.price}</p>
                    ${priceNote}
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-extra"><h3>Ingredientes Principales</h3><ul>${materialsList}</ul></div>

                    <div class="product-availability-note" style="margin-top: 1.5rem; margin-bottom: 1rem; text-align: center; font-size: 0.9rem; color: #6c757d;">
                        <i class="fas fa-info-circle"></i> Pedidos se agendan con 10-20 días de anticipación.
                    </div>
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
    
    const productSelectionSelect = document.getElementById('productSelection');
    const selectedProduct = productSelectionSelect.value;
    
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

    if (selectedProduct) {
        message += `🍰 *Producto del catálogo:* ${selectedProduct}\n`;
    }

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
            <div class="footer-column"><h4>Navegación</h4><ul><li><a href="index.html">Inicio</a></li><li><a href="personalizados.html">Personalizados</a></li><li><a href="faq.html">Preguntas Frecuentes</a></li></ul></div>
            <div class="footer-column"><h4>Síguenos</h4><div class="social-media"><a href="https://www.instagram.com/c_y_c_cookies_and_cakes/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a><a href="https://wa.me/56961961556" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a></div></div>
            <div class="footer-column map-container"><h4>Ubicación para Retiros</h4><p>Maipú, Santiago, Chile</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.7821707684957!2d-70.77727492355119!3d-33.5590355030826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ddaf14e28d0d%3A0x60e3d5ed0b27d8d9!2sMichimalongo%201791%2C%209282109%20Santiago%2C%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1751917337624!5m2!1ses!2scl" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="copyright"><p>&copy; ${new Date().getFullYear()} C&C Cookies and Cakes. Todos los derechos reservados.</p></div>`;
    }
    
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === pageName) {
            link.classList.add('active');
        }
    });

    // --- LÓGICA CORREGIDA PARA CARGAR PRODUCTOS ---
    if (pageName === 'index.html' || pageName === '') {
        const sliderContainer = document.querySelector('.hero-slider');
        if (sliderContainer) {
            const images = ['images/torta-encanto.webp', 'images/galletas-animalitos.webp', 'images/navidad.jpg'];
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
            loadCategorizedProducts(['personalizado'], '#product-grid');
        }
        
        const productTypeSelect = document.getElementById('productType');
        const productSelectionContainer = document.getElementById('productSelectionContainer');
        const productSelectionSelect = document.getElementById('productSelection');

        const categoryMap = {
            'Torta': 'torta',
            'Galletas': 'galleta',
            'Otro': 'reposteria'
        };

        function updateProductOptions() {
            const selectedType = productTypeSelect.value;
            const category = categoryMap[selectedType];
            
            if (!category) {
                productSelectionContainer.style.display = 'none';
                return;
            }

            const products = productsData.filter(p => p.category === category);

            if (products.length > 0) {
                productSelectionSelect.innerHTML = ''; 
                
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = 'Selecciona un producto (opcional)';
                productSelectionSelect.appendChild(defaultOption);

                products.forEach(product => {
                    const option = document.createElement('option');
                    option.value = product.name;
                    option.textContent = product.name;
                    productSelectionSelect.appendChild(option);
                });
                productSelectionContainer.style.display = 'block';
            } else {
                productSelectionContainer.style.display = 'none';
            }
        }

        productTypeSelect.addEventListener('change', updateProductOptions);
        updateProductOptions(); 

    } else if (pageName === 'detalles.html') {
        loadProductDetails();
    } else if (pageName === 'faq.html') {
        initFaqAccordion();
    }
}

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializePage);
