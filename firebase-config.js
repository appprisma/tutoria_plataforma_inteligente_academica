// ============================================================
//  🔥 firebase-config.js — EDITA ESTE ARCHIVO CON TUS DATOS
// ============================================================
//  Consola Firebase → ⚙️ Configuración del proyecto
//  → General → Tus apps → SDK de la app y configuración
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDywa2TRCcsPbogmMpvO-awQM3GyD_tpSY",
  authDomain: "calif-sec-montes-07-05-2026.firebaseapp.com",
  databaseURL: "https://calif-sec-montes-07-05-2026-default-rtdb.firebaseio.com",
  projectId: "calif-sec-montes-07-05-2026",
  storageBucket: "calif-sec-montes-07-05-2026.firebasestorage.app",
  messagingSenderId: "742610869102",
  appId: "1:742610869102:web:ba61e56c3e3feb641a7f7f"
};

// ============================================================
//  🗂️  NODOS Y CAMPOS — ya configurados con tu estructura real
// ============================================================
//
//  Tu DB tiene:
//
//  /alumnos/{matricula}
//    correo, grupoEsp, grupoIng, matricula, nombre, tutor
//
//  /calificaciones/{correo_con_puntos_a_guiones}   ← es un ARRAY
//    [ { actividad, alumno, calificacion, correo,
//        fecha, grupo, materia, profesor }, ... ]
//
// ============================================================

const DB_NODES = {
  alumnos:        "alumnos",
  calificaciones: "calificaciones"
};

const CAMPOS_ALUMNO = {
  matricula: "matricula",
  nombre:    "nombre",
  correo:    "correo",
  grupoEsp:  "grupoEsp",
  grupoIng:  "grupoIng",
  tutor:     "tutor"
};

const CAMPOS_CALIF = {
  actividad:    "actividad",
  alumno:       "alumno",
  calificacion: "calificacion",  // número directo, no string
  correo:       "correo",
  fecha:        "fecha",         // string "dd/MM/yyyy" o "---"
  grupo:        "grupo",
  materia:      "materia",
  profesor:     "profesor"
};

// Convierte correo → clave Firebase (puntos a guiones bajos)
// Ej: "a.luis@ibime.edu.mx" → "a_luis@ibime_edu_mx"
function correoAKey(correo) {
  return correo.replace(/\./g, "_");
}
// ✅ HACER VARIABLES GLOBALES ACCESIBLES A app.j
window.firebaseConfig = FIREBASE_CONFIG;
window.DB_NODES = DB_NODES;
window.CAMPOS_ALUMNO = CAMPOS_ALUMNO;
window.CAMPOS_CALIF = CAMPOS_CALIF;
