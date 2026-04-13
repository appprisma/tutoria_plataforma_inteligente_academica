// ============================================================
//  🔥 CONFIGURACIÓN FIREBASE — EDITA ESTE ARCHIVO
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCkSgBxKaZBEDrF_RhFGCK6tZjlzdTQt10",
  authDomain: "er-reporte---3er-periodo-44119.firebaseapp.com",
  databaseURL: "https://er-reporte---3er-periodo-44119-default-rtdb.firebaseio.com",
  projectId: "er-reporte---3er-periodo-44119",
  storageBucket: "er-reporte---3er-periodo-44119.firebasestorage.app",
  messagingSenderId: "215491922286",
  appId: "1:215491922286:web:640b1a035e9ccd6432597f"
};

// ============================================================
//  🗂️  ESTRUCTURA DE DATOS EN FIREBASE
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
  grupoIng:  "grupoIng"
};

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
