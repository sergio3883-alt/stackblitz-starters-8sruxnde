# Pruebas de la API

| # | Endpoint | Caso | Entrada usada | Resultado esperado | Resultado obtenido | ¿Pasó? |
|---|----------|------|---------------|--------------------|--------------------|--------|
| 1 | POST /tareas | Camino feliz | `{"titulo":"Prueba","responsable":"Ana"}` | 201 Created | | |
| 2 | GET /tareas | Listar todos | Ninguna (URL directa) | 200 OK con lista | | |
| 3 | GET /tareas/1 | Consultar uno existente | ID: 1 en la URL | 200 OK con el objeto | | |
| 4 | GET /tareas/9999 | No existe | ID: 9999 en la URL | 404 Not Found | | |
| 5 | POST /tareas | Datos incompletos | `{"responsable":"Ana"}` (sin título) | 400 Bad Request | | |
