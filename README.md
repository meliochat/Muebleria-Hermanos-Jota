# Mueblería Hermanos Jota | E-commerce Full Stack

> Una plataforma web moderna para la gestión y venta de muebles de diseño, construida con el stack MERN (MongoDB, Express, React, Node.js).

![Preview del Proyecto](https://via.placeholder.com/800x400?text=Captura+de+Pantalla+del+Home)
*(¡Aquí subiremos una captura real de tu Home después!)*

## Descripción

Este proyecto es una solución completa de comercio electrónico desarrollada para "Hermanos Jota", una mueblería de diseño minimalista. La aplicación permite a los usuarios explorar un catálogo dinámico, gestionar un carrito de compras persistente, registrarse/autenticarse de forma segura y generar órdenes de compra que se registran en tiempo real en la base de datos.

El objetivo principal fue crear una experiencia de usuario fluida (UX) y un sistema robusto de gestión de datos.

## Tecnologías Utilizadas

**Frontend:**
* React.js (Vite)
* Context API (Manejo de estado global para Carrito y Usuario)
* CSS3 (Diseño responsivo y custom properties)
* Axios (Consumo de API)

**Backend:**
* Node.js & Express
* MongoDB & Mongoose (Base de datos NoSQL)
* JWT (JSON Web Tokens) para autenticación
* Bcryptjs (Encriptación de contraseñas)

## Funcionalidades Clave

* **Catálogo Dinámico:** Renderizado de productos desde base de datos MongoDB.
* **Carrito Inteligente:** Agregar, eliminar y modificar cantidades con cálculos de total en tiempo real.
* **Autenticación Segura:** Registro y Login de usuarios con validación de credenciales y tokens.
* **Gestión de Órdenes:** Proceso de Checkout que vincula usuarios, productos y genera tickets de venta.
* **Panel de Usuario:** Visualización personalizada al iniciar sesión ("Hola, Melina").
* **Diseño Responsive:** Adaptable a móviles y escritorio.

## Instalación y Despliegue Local

Si deseas correr este proyecto en tu máquina local:

1.  **Clonar el repositorio**
    ```bash
    git clone [https://github.com/TU_USUARIO/muebleria-hermanos-jota.git](https://github.com/TU_USUARIO/muebleria-hermanos-jota.git)
    ```

2.  **Configurar Backend**
    ```bash
    cd backend
    npm install
    # Crear archivo .env con:
    # MONGO_URI=tu_string_de_conexion
    # PORT=5000
    npm run dev
    ```

3.  **Configurar Frontend**
    ```bash
    cd client
    npm install
    npm run dev
    ```

**Desarrollado con 🤎 por Melina.**
