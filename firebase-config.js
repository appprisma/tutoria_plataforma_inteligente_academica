// ============================================================
//  🔥 CONFIGURACIÓN FIREBASE — EDITA ESTE ARCHIVO
// ============================================================
//  Entra a tu consola de Firebase → Configuración del proyecto
//  → Tus apps → SDK de la app y configuración, y pega los valores.
//
//  ⚠️  Si tu Realtime Database tiene reglas de lectura pública,
//      no necesitas autenticación adicional.
//      Si no, activa "Acceso anónimo" en Authentication.
// ============================================================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCkSgBxKaZBEDrF_RhFGCK6tZjlzdTQt10",
  authDomain: "er-reporte---3er-periodo-44119.firebaseapp.com",
  databaseURL: "https://er-reporte---3er-periodo-44119-default-rtdb.firebaseio.com",
  projectId: "er-reporte---3er-periodo-44119",
  storageBucket: "er-reporte---3er-periodo-44119.firebasestorage.app",
  messagingSenderId: "215491922286",
  appId: "1:215491922286:web:640b1a035e9ccd6432597f"
};
export { FIREBASE_CONFIG };

// ============================================================
//  🗂️  ESTRUCTURA DE DATOS EN FIREBASE
//  Ajusta estos nombres de nodo según tu base de datos real.
//
//  Estructura esperada:
//
//  /alumnos/{key}
//    matricula: "12345"
//    nombre:    "Juan Pérez"
//    correo:    "juan@ejemplo.com"
//    grupoEsp:  "1A"
//    grupoIng:  "GROUP-A"
//
//  /calificaciones/{key}
//    correo:     "juan@ejemplo.com"
//    profesor:   "Prof. García"
//    grupo:      "1A"
//    alumno:     "Juan Pérez"
//    fecha:      "2024-03-15"   (string ISO o número Excel)
//    actividad:  "Examen Parcial 1"
//    calif:      8.5
//    asignatura: "Matemáticas"
//
//  Si tus nodos se llaman diferente, cámbialos aquí:
// ============================================================

const DB_NODES = {
  alumnos:        "alumnos",        // nodo raíz de alumnos
  calificaciones: "calificaciones"  // nodo raíz de calificaciones
};

// Campos dentro de cada alumno
const CAMPOS_ALUMNO = {
  matricula: "matricula",
  nombre:    "nombre",
  correo:    "correo",
  grupoEsp:  "grupoEsp",   // grupo español
  grupoIng:  "grupoIng"    // grupo inglés (puede ser el mismo campo)
};

// Campos dentro de cada calificación
const CAMPOS_CALIF = {
  correo:     "correo",
  profesor:   "profesor",
  grupo:      "grupo",
  alumno:     "alumno",
  fecha:      "fecha",
  actividad:  "actividad",
  calif:      "calif",
  asignatura: "asignatura"
};
