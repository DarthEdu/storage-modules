// Función asincrónica para obtener información de productos de Amazon
async function fetchProductInfo() {
  // Simulación de datos de productos
  const productData = {
    productName: "Echo Dot (4th Gen)",
    price: "$49.99",
    rating: "4.7/5",
  };

  // Simula una espera de 2 segundos para obtener los datos
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Muestra la información del producto en la consola
  console.log(`Nombre del Producto: ${productData.productName}`);
  console.log(`Precio: ${productData.price}`);
  console.log(`Calificación: ${productData.rating}`);
}

// Exporta la función para que pueda ser utilizada en otros módulos
export { fetchProductInfo };

// Llama a la función para obtener la información del producto
fetchProductInfo();

// Función para mostrar recomendaciones de productos en la consola
function showProductRecommendations() {
  // Lista de recomendaciones de productos
  const recommendations = [
    "Kindle Paperwhite",
    "Fire TV Stick",
    "Amazon Echo Show",
  ];

  // Itera sobre cada recomendación y la muestra en la consola
  recommendations.forEach((product) => {
    console.log(`Recomendación: ${product}`);
  });
}

// Exporta la función para que pueda ser utilizada en otros módulos
export { showProductRecommendations };

// Llama a la función para mostrar las recomendaciones de productos
showProductRecommendations();
