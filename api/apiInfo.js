// apiInfo.js
const apiInfoHTML = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          background-color: #f4f4f9;
          color: #333;
        }
        h1 {
          color: #4CAF50;
        }
        p {
          font-size: 18px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
        strong {
          color: #555;
        }
        .section {
          margin-bottom: 20px;
        }
        a {
          color: #007BFF;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <h1>API REST Products/Categories</h1>
      <div class="section">
        <p>Desarrollo de una API REST utilizando Express y Node.js, que simula la gestión de productos y categorías, permitiendo realizar operaciones como GET, POST, PATCH y DELETE.</p>
        <ul>
          <li><strong>GET</strong>: Obtener información de productos y categorías.</li>
          <li><strong>POST</strong>: Añadir nuevos productos o categorías.</li>
          <li><strong>PATCH</strong>: Actualizar productos o categorías existentes.</li>
          <li><strong>DELETE</strong>: Eliminar productos o categorías.</li>
        </ul>
      </div>
      <hr>
      <div class="section">
        <h2>Endpoints Disponibles</h2>
        <ul>
          <li>
            <strong>/api/v1/products</strong>
            : Manejo de productos (GET, POST, PATCH, DELETE) -- 
            <a href="https://api-express-node.vercel.app/api/v1/products" target="_blank">Products</a>
        </li>
          <li>
            <strong>/api/v1/categories</strong>
            : Manejo de categorías (GET, POST, PATCH, DELETE) --
            <a href="https://api-express-node.vercel.app/api/v1/categories" target="_blank">Categories</a>
        </li>
        </ul>
      </div>
      <hr>
      <div class="section">
        <h2>Repositorio GitHub</h2>
        <p>Puedes encontrar el código fuente de esta API y más información en el siguiente enlace:</p>
        <a href="https://github.com/TatanLion/API-Express-Node" target="_blank">GitHub - Mi API REST</a>
      </div>
      <hr>
      <div class="section">
        <h2>Información Adicional</h2>
        <p>API desplegada en <strong>Vercel</strong>, optimizada para escalabilidad y alto rendimiento.</p>
      </div>
    </body>
  </html>
`;

module.exports = apiInfoHTML;
