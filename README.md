# Autenticación con NestJS 🔐

> Sistema de autenticación completo con roles, guards y rutas protegidas — backend NestJS + frontend Angular.

![Proyecto Personal](https://img.shields.io/badge/Estado-Proyecto%20Personal-blue?style=flat-square)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

---

## 🚀 Sobre el proyecto

Proyecto de práctica para dominar la implementación de autenticación y autorización en un stack moderno y tipado. Cubre el flujo completo desde el registro de usuario hasta la protección de rutas por roles, usando las herramientas más demandadas en el ecosistema enterprise: NestJS en backend y Angular en frontend, ambos en TypeScript.

---

## ✨ Características

- 📝 **Registro de usuarios** — creación de cuenta con validación de datos
- 🔑 **Login con JWT** — generación y verificación de tokens de acceso
- 🛡️ **Guards de autenticación** — protección de endpoints en el backend
- 👮 **Roles y permisos** — control de acceso por nivel de usuario (ej: admin, user)
- 🔒 **Rutas protegidas** — navegación restringida en el frontend según el rol
- 🔀 **Enrutamiento Angular** — redirección automática según estado de autenticación
- 🎨 **UI con TailwindCSS** — interfaz limpia y responsive

---

## 🛠 Tech Stack

| Capa | Tecnología |
|---|---|
| Frontend | Angular · TypeScript · TailwindCSS |
| Backend | NestJS · TypeScript |
| Base de datos | PostgreSQL |
| Autenticación | JWT |
| ORM | TypeORM |

---

## 🏗 Arquitectura

```
┌──────────────────────┐         ┌──────────────────────┐         ┌─────────────────┐
│                      │  HTTP   │                      │ TypeORM │                 │
│  Angular Frontend    │◄───────►│   NestJS Backend     │◄────────►│   PostgreSQL    │
│  (Guards + Router)   │   JWT   │  (Guards + Roles)    │         │                 │
└──────────────────────┘         └──────────────────────┘         └─────────────────┘
```

### Flujo de autenticación

```
Usuario → Login → NestJS valida credenciales → genera JWT
       → Angular guarda token → AuthGuard verifica en cada ruta
       → RoleGuard verifica permisos → acceso concedido o denegado
```

---

## 🚀 Instalación local

### Prerequisitos
- Node.js >= 18
- PostgreSQL
- Angular CLI (`npm install -g @angular/cli`)

### Backend (NestJS)

```bash
# 1. Clonar el repositorio
git clone https://github.com/jantons25/autenticacion-nestjs.git
cd autenticacion-nestjs

# 2. Instalar dependencias del backend
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita el archivo .env con tus credenciales
```

### Variables de entorno

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=auth_db
JWT_SECRET=tu_clave_secreta
PORT=3000
```

### Frontend (Angular)

```bash
# Desde la carpeta del frontend
cd client
npm install
ng serve
```

### Ejecutar backend

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

La app estará disponible en:
- Frontend: `http://localhost:4200`
- Backend: `http://localhost:3000`

---

## 📁 Estructura del proyecto

```
autenticacion-nestjs/
├── client/                  # Frontend Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── guards/      # AuthGuard, RoleGuard
│   │   │   ├── pages/       # Login, Register, Dashboard
│   │   │   └── services/    # AuthService
│   └── ...
├── src/                     # Backend NestJS
│   ├── auth/                # Módulo de autenticación
│   │   ├── guards/          # JwtAuthGuard, RolesGuard
│   │   ├── decorators/      # @Roles()
│   │   └── strategies/      # JWT Strategy
│   ├── users/               # Módulo de usuarios
│   └── ...
└── package.json
```

---

## 🔮 Próximas mejoras

- [ ] Refresh tokens
- [ ] Verificación de email al registrarse
- [ ] OAuth2 (Google / GitHub)
- [ ] Deploy en Vercel + Render

---

## 👤 Autor

**Juan José Antón Silva**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/juanantonsilva)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/jantons25)

---

## 📄 Licencia

Este proyecto es de uso personal y educativo.
