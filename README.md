# Prototipo
¡Hola! Esta guía está diseñada para que puedas actualizar fácilmente los productos de tu página web (tortas, galletas, etc.) sin necesidad de tocar el código complejo.

Toda la magia de tu catálogo de productos se encuentra en un solo lugar: el archivo script.js.

1. ¿Dónde están los productos?
Todos los productos que se muestran en tu sitio web están guardados en el archivo script.js, dentro de una lista llamada productsData.

Para empezar, abre el archivo script.js con cualquier editor de texto (como el Bloc de notas, o editores más avanzados como VS Code o Sublime Text). Al principio del archivo, verás algo como esto:

// --- BASE DE DATOS DE PRODUCTOS ---
const productsData = [
    // ... aquí dentro están todos tus productos ...
];

2. Entendiendo la Estructura de un Producto
Cada producto es un objeto encerrado entre llaves {} y tiene la siguiente estructura. Tomemos una torta como ejemplo:

{ 
    id: 'torta-chocolate', 
    category: 'torta', 
    name: 'Torta de Chocolate', 
    price: '$25.000', 
    image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Chocolate', 
    description: 'Delicioso bizcocho de chocolate húmedo...', 
    materials: [ 'Harina de trigo', 'Cacao en polvo', 'Huevos de campo' ] 
}

Explicación de cada campo:

id: Un identificador único para cada producto. No debe repetirse. Usa un formato como 'torta-nombre-del-producto'.

category: La categoría a la que pertenece. Las opciones son: 'torta', 'galleta', 'reposteria' o 'personalizado'.

name: El nombre del producto que verán los clientes.

price: El precio del producto. Escríbelo tal como quieres que se vea.

image_card: La URL de la imagen del producto. Es muy importante que sea un enlace web.

description: El texto descriptivo que aparece en la página de detalles del producto.

materials: Una lista de los ingredientes principales. Cada ingrediente debe ir entre comillas simples '' y separado por una coma.

3. ¿Cómo Añadir un Nuevo Producto?
Sigue estos pasos:

Busca la categoría donde quieres añadir el producto dentro de productsData (por ejemplo, la sección de // --- TORTAS ---).

Copia un producto existente completo, desde la llave de apertura { hasta la llave de cierre } (incluyendo la coma , del final).

Pega el producto copiado justo debajo, antes de que empiece la siguiente sección de categoría.

Modifica los datos del nuevo producto que acabas de pegar:

Cambia el id a algo nuevo y único.

Actualiza el name, price, image_card, description y la lista de materials.

Ejemplo: Añadir una nueva torta

// --- TORTAS (8 ejemplos) ---
{ 
    id: 'torta-selva-negra', 
    category: 'torta', 
    // ... datos de la torta selva negra ...
}, // <-- No olvides la coma del producto anterior

// AÑADIMOS LA NUEVA TORTA AQUÍ
{ 
    id: 'torta-manjar-lucuma', // <-- ID nuevo y único
    category: 'torta', 
    name: 'Torta Manjar Lúcuma', // <-- Nombre nuevo
    price: '$26.000', // <-- Precio nuevo
    image_card: 'https://url-de-tu-nueva-imagen.com/torta.jpg', // <-- URL de la nueva imagen
    description: 'Suave bizcocho de vainilla relleno de manjar y crema de lúcuma casera.', // <-- Descripción nueva
    materials: [ 'Lúcuma natural', 'Manjar', 'Bizcocho de vainilla' ] // <-- Ingredientes nuevos
} // <-- El último producto de la lista NO lleva coma al final

4. ¿Cómo Editar un Producto Existente?
Busca el producto que quieres modificar dentro de la lista productsData.

Simplemente cambia el texto que está entre comillas para los campos name, price, image_card, description o materials.

¡Guarda el archivo y listo! Los cambios se reflejarán automáticamente en la página web.

5. ¿Cómo Cambiar las Imágenes?
Este es un paso crucial. El campo image_card necesita una URL pública.

Sube tu imagen: Sube la foto de tu producto a un servicio de alojamiento de imágenes. Algunas opciones gratuitas son:

Imgur

Postimages

Obtén el enlace directo: Una vez subida la imagen, el servicio te dará varios enlaces. Debes copiar el que se llama "Enlace Directo" o "Direct Link" (generalmente termina en .jpg o .png).

Pega el enlace: Reemplaza la URL que está en el campo image_card por tu nuevo enlace.

Ejemplo de cambio de imagen:

// ANTES
image_card: 'https://placehold.co/400x400/E18AAA/FFFFFF?text=Torta+Chocolate',

// DESPUÉS (con tu nueva URL)
image_card: 'https://i.imgur.com/tu-nueva-imagen.jpg',
