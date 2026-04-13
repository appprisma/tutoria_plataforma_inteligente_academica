# 🎓 Monitor de Desempeño Académico

Aplicación web estática para consultar calificaciones y productividad de alumnos, conectada a **Firebase Realtime Database**. Funciona directamente en **GitHub Pages** sin necesidad de servidor.

---

## 📁 Estructura de archivos

```
monitor-academico/
├── index.html          ← Página principal (no modificar)
├── styles.css          ← Estilos (no modificar)
├── app.js              ← Lógica de la app (no modificar)
└── firebase-config.js  ← ⚙️  TÚ EDITAS ESTE ARCHIVO
```

---

## ⚙️ Configuración (solo una vez)

### 1. Edita `firebase-config.js`

Abre ese archivo y reemplaza los valores con los de **tu proyecto Firebase**:

```js
const firebaseConfig = {
  apiKey:            "TU_API_KEY",
  authDomain:        "TU_PROJECT.firebaseapp.com",
  databaseURL:       "https://TU_PROJECT-default-rtdb.firebaseio.com",
  projectId:         "TU_PROJECT",
  ...
};
```

Puedes encontrar estos valores en:  
`Consola Firebase → ⚙️ Configuración del proyecto → General → Tus apps → SDK`

### 2. Activa Autenticación Anónima en Firebase

La app usa inicio de sesión anónimo para leer la base de datos.

1. Ve a `Firebase Console → Authentication → Sign-in method`
2. Activa **Anónimo**

### 3. Verifica las reglas de tu Realtime Database

Para que la app pueda leer, tus reglas deben permitirlo. La opción más sencilla durante desarrollo:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": false
  }
}
```

Esto permite leer solo a usuarios autenticados (incluyendo anónimos).

---

## 🗂️ Estructura de datos esperada en Firebase

```
/alumnos
  /{id_unico}
    matricula:  "12345"
    nombre:     "Juan Pérez"
    correo:     "juan@ejemplo.com"
    grupoEsp:   "1A"
    grupoIng:   "GROUP-A"    ← puede omitirse si no aplica

/calificaciones
  /{id_unico}
    correo:     "juan@ejemplo.com"
    profesor:   "Prof. García"
    grupo:      "1A"
    alumno:     "Juan Pérez"
    fecha:      "2024-03-15"   ← string ISO, o número serial de Excel
    actividad:  "Examen Parcial 1"
    calif:      8.5
    asignatura: "Matemáticas"
```

> 📌 Si tus nodos o campos se llaman diferente, cámbialos en el bloque `DB_NODES` y `CAMPOS_ALUMNO` / `CAMPOS_CALIF` dentro de `firebase-config.js`.

---

## 🚀 Publicar en GitHub Pages

1. Sube los 4 archivos a un repositorio de GitHub
2. Ve a `Settings → Pages`
3. En **Source**, selecciona la rama `main` y carpeta `/ (root)`
4. Espera ~1 minuto y visita la URL que te da GitHub Pages

---

## 🔑 Diferencias respecto a la versión Google Apps Script

| GAS (anterior) | GitHub Pages (nuevo) |
|---|---|
| Backend en Google Sheets | Sin backend, todo en el browser |
| Alumnos en hoja "BASE ALUMNOS" | Alumnos en nodo `/alumnos` de Firebase |
| Calificaciones en Maestro/Firebase | Calificaciones en nodo `/calificaciones` |
| `getImageUrl()` desde Drive | Pon tu imagen de fondo en el repo o como URL |
| Autenticación JWT con clave privada | Firebase SDK con autenticación anónima |

---

## 🖼️ Imagen de fondo (opcional)

Para poner una imagen de fondo, agrega en `index.html` antes del cierre `</body>`:

```html
<script>
  document.documentElement.style.backgroundImage = "url('tu-imagen.jpg')";
</script>
```

O coloca el archivo `fondo.jpg` en el repositorio y usa esa URL.
