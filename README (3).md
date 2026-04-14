# 🎓 Monitor de Desempeño Académico — GitHub Pages

Aplicación 100% estática para GitHub Pages. Lee directamente de tu **Firebase Realtime Database**.

---

## 📁 Archivos

```
├── index.html          ← No modificar
├── styles.css          ← No modificar
├── app.js              ← No modificar
└── firebase-config.js  ← ✏️  SOLO EDITAS ESTE
```

---

## ⚙️ Configuración (5 minutos)

### 1. Pega tu configuración de Firebase en `firebase-config.js`

Ve a: **Consola Firebase → ⚙️ → General → Tus apps → SDK**

Reemplaza solo estos 3 valores (el resto ya está precargado):
```js
apiKey:            "AIzaSy...",
messagingSenderId: "123456789",
appId:             "1:123...:web:abc..."
```

### 2. Activa Autenticación Anónima

**Firebase Console → Authentication → Sign-in method → Anónimo → Activar**

### 3. Configura las Reglas de la Database

**Firebase Console → Realtime Database → Reglas:**
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": false
  }
}
```

### 4. Sube a GitHub Pages

1. Crea un repositorio en GitHub
2. Sube los 4 archivos
3. **Settings → Pages → Source: rama `main`, carpeta `/root`**
4. Espera ~1 min y visita la URL

---

## 🗂️ Estructura de tu Firebase (ya mapeada)

```
/alumnos/{matricula}
  correo, grupoEsp, grupoIng, matricula, nombre, tutor

/calificaciones/{correo_con_guiones}   ← ARRAY
  [ { actividad, alumno, calificacion,
      correo, fecha, grupo, materia, profesor } ]
```

> Ej: correo `a.luis@ibime.edu.mx` → clave `a_luis@ibime_edu_mx`

---

## 🖼️ Imagen de fondo (opcional)

Pon tu imagen en el repo (ej. `fondo.jpg`) y agrega en `index.html` antes de `</body>`:
```html
<script>
  document.documentElement.style.backgroundImage = "url('fondo.jpg')";
</script>
```
