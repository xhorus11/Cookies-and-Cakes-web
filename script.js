// --- BASE DE DATOS DE PRODUCTOS ---
// Esta es tu base de datos central. Edita, añade o quita productos aquí.
const productsData = [
    // --- TORTAS ---
    { id: 'torta-chocolate', category: 'torta', name: 'Torta de Chocolate', price: '$25.000', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Chocolate', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Chocolate', description: 'Delicioso bizcocho de chocolate húmedo, relleno con manjar y frambuesas frescas, cubierto con un suave ganache de chocolate.', materials: [ 'Harina de trigo', 'Cacao en polvo', 'Huevos de campo', 'Frambuesas frescas', 'Manjar casero', 'Chocolate' ] },
    { id: 'torta-red-velvet', category: 'torta', name: 'Torta Red Velvet', price: '$28.000', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Red+Velvet', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Red+Velvet', description: 'Un clásico inolvidable. Bizcocho de terciopelo rojo, suave y ligeramente achocolatado, con un irresistible frosting de queso crema.', materials: [ 'Harina', 'Azúcar', 'Buttermilk', 'Aceite', 'Huevos', 'Cacao', 'Queso crema' ] },
    { id: 'torta-zanahoria', category: 'torta', name: 'Torta de Zanahoria', price: '$26.000', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Zanahoria', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Zanahoria', description: 'Bizcocho especiado y húmedo con zanahoria rallada y nueces trozadas, cubierto con un delicioso frosting de queso crema.', materials: [ 'Zanahoria', 'Harina integral', 'Nueces', 'Canela', 'Huevos', 'Queso crema' ] },
    { id: 'cheesecake-frutos-rojos', category: 'torta', name: 'Cheesecake Frutos Rojos', price: '$24.000', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Cheesecake', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Cheesecake', description: 'Cremoso cheesecake horneado sobre una base de galleta, coronado con una generosa salsa casera de frutos rojos.', materials: [ 'Queso crema', 'Crema de leche', 'Galletas', 'Mantequilla', 'Frutos rojos', 'Azúcar' ] },
    { id: 'torta-tres-leches', category: 'torta', name: 'Torta Tres Leches', price: '$22.000', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Tres+Leches', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Tres+Leches', description: 'Bizcocho esponjoso bañado en una mezcla de tres leches, cubierto con merengue italiano y un toque de canela.', materials: [ 'Leche condensada', 'Leche evaporada', 'Crema de leche', 'Huevos', 'Harina', 'Canela' ] },
    { id: 'torta-limon-amapolas', category: 'torta', name: 'Torta Limón y Amapolas', price: '$23.000', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Torta+Limon', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Torta+Limon', description: 'Fresco y aromático bizcocho de limón con semillas de amapola, relleno con curd de limón y cubierto con un glaseado suave.', materials: [ 'Limón', 'Semillas de amapola', 'Harina', 'Azúcar', 'Yogurt', 'Mantequilla' ] },
    { id: 'torta-panqueque-naranja', category: 'torta', name: 'Torta Panqueque Naranja', price: '$27.000', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Panqueque+Naranja', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Panqueque+Naranja', description: 'Finas capas de panqueques intercaladas con una delicada crema de naranja y manjar, cubierta con chocolate.', materials: [ 'Naranja', 'Manjar', 'Harina', 'Huevos', 'Chocolate', 'Leche' ] },
    // --- GALLETAS Y OTROS ---
    { id: 'galletas-vainilla', category: 'galleta', name: 'Galletas de Vainilla', price: '$1.500 c/u', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Galletas+Vainilla', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Galletas+Vainilla', description: 'Tiernas galletas de mantequilla con un toque de vainilla, decoradas a mano con glaseado real. Perfectas para regalos y eventos.', materials: [ 'Harina', 'Mantequilla', 'Azúcar', 'Huevo', 'Vainilla', 'Azúcar glas' ] },
    { id: 'galletas-craqueladas', category: 'galleta', name: 'Galletas Craqueladas', price: '$1.800 c/u', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Galletas+Craqueladas', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Galletas+Craqueladas', description: 'Intensas galletas de chocolate con una textura similar a un brownie, cubiertas de azúcar glas que se craquela al hornear.', materials: [ 'Chocolate amargo', 'Cacao', 'Azúcar glas', 'Huevo', 'Harina' ] },
    { id: 'alfajores-maicena', category: 'galleta', name: 'Alfajores de Maicena', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Alfajores', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Alfajores', description: 'Suaves y delicados alfajores que se deshacen en la boca, rellenos de manjar y con los bordes pasados por coco rallado.', materials: [ 'Maicena', 'Manjar', 'Coco rallado', 'Harina', 'Mantequilla', 'Yemas de huevo' ] },
    { id: 'cookies-chocolate-chip', category: 'galleta', name: 'Cookies Chocolate Chip', price: '$1.700 c/u', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Cookies', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Cookies', description: 'La clásica galleta americana: crujiente por fuera, blanda por dentro y repleta de chips de chocolate semi-amargo.', materials: [ 'Chips de chocolate', 'Harina', 'Mantequilla', 'Azúcar rubia', 'Huevo', 'Bicarbonato' ] },
    { id: 'macarons-surtidos', category: 'galleta', name: 'Macarons Surtidos', price: '$2.000 c/u', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Macarons', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Macarons', description: 'Finos merengues de almendra con un relleno cremoso. Disponibles en una variedad de sabores como chocolate, frambuesa, pistacho y maracuyá.', materials: [ 'Harina de almendras', 'Claras de huevo', 'Azúcar', 'Rellenos variados' ] },
    { id: 'galletas-avena-pasas', category: 'galleta', name: 'Galletas de Avena y Pasas', price: '$1.600 c/u', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Galletas+Avena', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Galletas+Avena', description: 'Una galleta contundente y sabrosa, con la textura de la avena y el dulzor de las pasas. Ligeramente especiada con canela.', materials: [ 'Avena', 'Pasas', 'Harina', 'Canela', 'Mantequilla', 'Azúcar rubia' ] },
    // --- PERSONALIZADOS ---
    { id: 'cupcakes-personalizados', category: 'personalizado', name: 'Cupcakes Personalizados', price: 'Desde $2.000 c/u', image_card: 'https://placehold.co/400x400/f8c8dc/4a4a4a?text=Cupcakes', image_detail: 'https://placehold.co/600x600/f8c8dc/4a4a4a?text=Cupcakes', description: 'Nuestros cupcakes son la porción perfecta de felicidad. Elige el sabor del bizcocho y el frosting a tu gusto. Ideales para mesas dulces.', materials: [ 'Ingredientes varían según la elección del cliente', 'Base de harina, azúcar, huevos, mantequilla' ] }
];

// --- CÓDIGO DEL SITIO WEB ---
document.addEventListener('DOMContentLoaded', () => {
    handleMobileMenu();
    updateCopyrightYear();
    loadPageContent();
});

function handleMobileMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

function updateCopyrightYear() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// Función principal que determina qué contenido cargar
function loadPageContent() {
    const page = window.location.pathname.split("/").pop();

    switch(page) {
        case 'tortas.html':
            loadCategorizedProducts('torta');
            break;
        case 'galletas.html':
            loadCategorizedProducts('galleta');
            break;
        case 'personalizados.html':
            loadCategorizedProducts('personalizado');
            break;
        case 'detalles.html':
            loadProductDetails();
            break;
        // No hacer nada en index.html, ya que es estático
    }
}

// Carga productos en las páginas de categoría
function loadCategorizedProducts(category) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    const productsToDisplay = productsData.filter(p => p.category === category);

    productGrid.innerHTML = ''; // Limpiar la cuadrícula

    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p>Próximamente más delicias en esta categoría.</p>';
        return;
    }
    
    productsToDisplay.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image_card}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <a href="detalles.html?id=${product.id}" class="btn btn-secondary">Ver Detalles</a>
            </div>
        `;
        productGrid.appendChild(card);
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
        document.title = `${product.name} - Cookies and Cakes`;
        const materialsList = product.materials.map(material => `<li><i class="fas fa-cookie-bite"></i> ${material}</li>`).join('');
        container.innerHTML = `
            <div class="product-detail-layout">
                <div class="product-detail-image"><img src="${product.image_detail}" alt="${product.name}"></div>
                <div class="product-detail-info">
                    <h1 class="product-detail-title">${product.name}</h1>
                    <p class="product-detail-price">${product.price}</p>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-extra"><h3>Ingredientes Principales</h3><ul>${materialsList}</ul></div>
                    <a href="personalizados.html" class="btn btn-primary">Encargar o Personalizar</a>
                </div>
            </div>`;
    } else {
        container.innerHTML = '<p>Producto no encontrado. Por favor, vuelve al <a href="index.html">inicio</a>.</p>';
    }
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
    let message = `¡Hola Cookies and Cakes! 👋 Quisiera solicitar un pedido personalizado:\n\n👤 *Nombre:* ${name}\n📱 *WhatsApp:* ${phone}\n✨ *Detalles:* ${details}\n\n¡Muchas gracias!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank').focus();
}
