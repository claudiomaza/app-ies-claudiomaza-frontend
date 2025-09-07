Claro, aquí tienes el contenido que proporcionaste, formateado en **Markdown**:

---

# Proyecto de Reservas - IES Claudio Maza (Versión Local)

Este README describe cómo configurar y ejecutar el proyecto de forma local, **sin utilizar contenedores de Docker**.

---

## Tecnologías Clave

- **Node.js**: El entorno de ejecución para el backend y la herramienta de construcción del frontend.
- **Vite**: Herramienta de construcción utilizada para el frontend.
- **JSON Server**: Una herramienta para simular la API REST del backend.

---

## Clonar el Repositorio

Para obtener la versión del proyecto que se ejecuta de forma local (sin Docker), el primer paso es clonar el repositorio y asegurarte de que estás en la rama o tag correcto.

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Si esta versión está en una rama o tag específico, usa este comando
git checkout <nombre_de_la_rama_o_tag>
```

Una vez clonado, navega al directorio del proyecto en tu terminal:

```bash
cd nombre_del_repositorio
```

---

## Pasos de Configuración y Ejecución

Para que el proyecto funcione correctamente, necesitas instalar las dependencias de Node.js y asegurarte de tener `json-server` disponible.

### 1. Instala las dependencias del frontend

Abre tu terminal, navega a la carpeta del proyecto y ejecuta el siguiente comando:

```bash
npm install
```

### 2. Instala `json-server`

Puedes instalarlo de forma global si planeas usarlo en otros proyectos, o como una dependencia de desarrollo específica para este proyecto.

#### Opción A: Instalación global

```bash
npm install -g json-server
```

#### Opción B: Como dependencia de desarrollo

```bash
npm install --save-dev json-server
```

### 3. Corre el mock del backend

Asegúrate de que el archivo `db.json` existe en el directorio del backend y luego ejecuta:

```bash
json-server --watch db.json --port 3001
```

### 4. Corre el frontend (Vite)

Abre una nueva ventana de terminal y, desde la carpeta del proyecto, ejecuta:

```bash
npm run dev
```

---

## Notas Importantes

### Script `npm run dev`

Si el comando `npm run dev` no funciona, es probable que este script no esté definido en tu archivo `package.json`. Puedes agregarlo manualmente a la sección `"scripts"` para resolverlo:

```json
"scripts": {
  "dev": "vite"
}
```

### Versiones de Node.js

Para asegurar la compatibilidad con las dependencias y herramientas modernas (como Vite), se recomienda verificar y usar una versión de Node.js **igual o superior a 20.19.0**. Puedes verificar la tuya con estos comandos:

```bash
node -v
npm -v
```
