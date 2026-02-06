# Proyecto de Gestión de Productos - Full Stack & Desktop
**Desarrollado por: Emilio Garcia | 2K DAM**

Este proyecto consiste en una aplicación completa para la gestión y visualización de productos, desarrollada con un frontend en **React (Vite)**, un backend **Node.js** con **API REST** y base de datos **MongoDB Atlas**. La aplicación ha sido desplegada tanto en la web como en formato de escritorio.

---

## 🚀 Despliegue e Infraestructura

La arquitectura del proyecto se divide en tres servicios independientes para garantizar su escalabilidad y correcto funcionamiento en producción:

* **Backend (API):** Desplegado en **Render**. Gestiona la lógica de negocio y la conexión con la base de datos **MongoDB Atlas**.
* **Frontend (Web):** Alojado en **Vercel**. Se comunica con la API mediante variables de entorno (`VITE_API_URL`) configuradas en el pipeline de despliegue.
* **Escritorio (Desktop):** Empaquetado con **Electron**. Permite ejecutar la aplicación como un software nativo en el sistema operativo, cargando la versión de producción.

---

## ♿ Accesibilidad y Usabilidad

Cuento con las siguientes características de accesibilidad y usabilidad implementadas:

* **Navegación por Teclado:** La página ha sido configurada para que se pueda navegar con teclado, haciéndola así más accesible y fácil de navegar.
* **Lectores de Pantalla:** La página es completamente accesible para usuarios que utilicen lectores de pantalla, gracias a una estructura semántica correcta.
* **Gestión de Errores:** He incluido una página de error que avisa si has puesto mal la URL, para que el usuario no se pierda al equivocarse.
* **Diseño Visual:** Se ha definido una colorimetría y tipografía específicas para garantizar la legibilidad y una identidad visual clara.

### Evidencias de Diseño y Accesibilidad
| Navegación por Teclado | Lector de Pantalla |
| :---: | :---: |
| ![Teclado](https://github.com/user-attachments/assets/ab058080-e5a2-4ff2-8cb4-533e150c2a84) | ![Lector](https://github.com/user-attachments/assets/b853ab48-047b-4fec-ae0f-f649c612dd8d) |

| Página de Error 404 | Estilo (Color y Tipografía) |
| :---: | :---: |
| ![Error404](https://github.com/user-attachments/assets/46e8d940-a46a-4b68-8c4c-a5f623f097a8) | ![Color](https://github.com/user-attachments/assets/54915e8f-d52a-44d8-943c-19ef80439ea4) ![Tipo](https://github.com/user-attachments/assets/2e47badf-2389-481b-8d5d-08749136a294) |

---

## 🛠️ Reflexión Técnica

### Desafíos encontrados durante el despliegue
* **CORS:** Al separar el frontend y la API en distintos servicios cloud, configuré los permisos de acceso en el backend para permitir peticiones desde el dominio de Vercel.
* **Variables de Entorno:** Utilicé el prefijo `VITE_` para asegurar que el cliente React pudiera consumir la URL de la API de Render en producción.
* **Electron (main.cjs):** Ajusté el punto de entrada de la aplicación de escritorio para que fuera compatible con el empaquetado, eliminando el `"type": "module"` en el `package.json`.

### Diferencias entre Web y Escritorio
* **Ventajas del despliegue Web:** Mayor facilidad de acceso sin instalación y actualizaciones instantáneas.
* **¿Por qué Electron no sustituye a una Web?:** Electron se utiliza cuando buscamos una experiencia nativa, como tener un icono en el escritorio o acceso a recursos del sistema que el navegador limita por seguridad. La web es para alcance masivo; la app de escritorio es para una herramienta de trabajo dedicada.

---

## ⚙️ Scripts Principales

* `npm run dev`: Levanta el entorno de desarrollo web.
* `npm run electron-dev`: Ejecuta Electron cargando el servidor local de Vite.
* `npm run build`: Genera la versión de producción en la carpeta `dist`.
* `npm run electron-pack`: Genera el instalador ejecutable (`.exe`).

---