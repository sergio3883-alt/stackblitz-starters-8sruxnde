Product Backlog

Historias De Usuario:

HU1. Crear tareas — RF1
Como integrante del equipo, quiero crear una tarea con título, descripción, responsable, estado y fecha límite, para organizar las actividades del equipo.
Criterio de aceptación: al enviar POST /tareas con los campos obligatorios, la API responde con código 201 y la tarea aparece posteriormente en GET /tareas.

HU2. Listar tareas — RF2
Como integrante del equipo, quiero consultar el listado de todas las tareas registradas, para conocer las actividades del equipo.
Criterio de aceptación: al enviar GET /tareas, la API responde con código 200 y devuelve un arreglo con las tareas registradas.

HU3. Consultar una tarea — RF3
Como integrante del equipo, quiero consultar una tarea mediante su identificador, para conocer su información completa.
Criterio de aceptación: al enviar GET /tareas/:id con un identificador existente, la API responde con código 200 y devuelve la tarea; si no existe, responde con código 404.

HU4. Editar tareas — RF4
Como integrante del equipo, quiero modificar los datos de una tarea existente, para mantener actualizada su información.
Criterio de aceptación: al enviar PUT /tareas/:id con datos válidos, la API actualiza la tarea y los cambios aparecen al consultarla nuevamente.

HU5. Eliminar tareas — RF5
Como integrante del equipo, quiero eliminar una tarea existente, para retirar actividades que ya no deben permanecer registradas.
Criterio de aceptación: al enviar DELETE /tareas/:id, la tarea se elimina y deja de aparecer en el listado.

HU6. Disponer de integrantes registrados — RF6
Como integrante del equipo, quiero disponer de integrantes registrados con identificador, nombre y correo electrónico, para reconocer a las personas que pueden recibir tareas.
Criterio de aceptación: los integrantes registrados contienen los tres campos y pueden consultarse mediante GET /integrantes.

HU7. Asignar responsables registrados — RF7
Como integrante del equipo, quiero asignar las tareas únicamente a integrantes registrados, para distribuir las actividades entre personas existentes.
Criterio de aceptación: la API permite asignar una tarea a un integrante registrado y rechaza la asignación cuando el integrante no existe.

HU8. Cambiar el estado — RF8
Como responsable de una tarea, quiero modificar su estado, para informar el avance de mi trabajo.
Criterio de aceptación: al modificar el estado mediante PUT /tareas/:id, el nuevo estado aparece al consultar la tarea.

HU9. Utilizar los estados permitidos — RF9
Como integrante del equipo, quiero utilizar únicamente los estados pendiente, en progreso y hecha, para registrar el avance de las tareas de manera uniforme.
Criterio de aceptación: la API acepta los tres estados definidos y rechaza cualquier otro al crear o modificar una tarea.

HU10. Filtrar por estado — RF10
Como integrante del equipo, quiero consultar las tareas de un estado específico, para identificar las actividades según su avance.
Criterio de aceptación: al enviar GET /tareas?estado=pendiente, la API devuelve únicamente las tareas que tienen ese estado.

HU11. Filtrar por responsable — RF11
Como integrante del equipo, quiero consultar las tareas asignadas a una persona específica, para conocer sus actividades.
Criterio de aceptación: al enviar GET /tareas?responsable=1, la API devuelve únicamente las tareas asignadas al integrante con identificador 1.

HU12. Identificar las tareas — RF12
Como integrante del equipo, quiero que cada tarea tenga un identificador único, para distinguirla de las demás.
Criterio de aceptación: al crear dos tareas, el sistema genera un identificador diferente para cada una.

HU13. Identificar los integrantes — RF13
Como integrante del equipo, quiero que cada integrante tenga un identificador único, para diferenciar a las personas registradas.
Criterio de aceptación: cada integrante registrado tiene un identificador diferente al de los demás.

HU14. Verificar al responsable — RF14
Como integrante del equipo, quiero que el sistema compruebe la existencia del responsable antes de asignarlo, para evitar tareas asociadas a personas inexistentes.

Criterio de aceptación: antes de crear o modificar una tarea, la API verifica el identificador del responsable y rechaza la operación cuando no existe.

HU7 y HU14 están relacionadas y se resolverán con la misma validación. Se conservan como historias separadas para mantener la correspondencia con tus requisitos.



                                            | Por hacer |                             | En progreso | Hecho |

| HU1 · Crear tareas                            | - |                                       | — |     | x |
| HU2 · Listar tareas                           | - |                                       | — |     | x |
| HU3 · Consultar una tarea                     | — |                                       | — |     | x |
| HU4 · Editar tareas                           | — |                                       | — |     | — |
| HU5 · Eliminar tareas                         | — |                                       | — |     | — |
| HU6 · Disponer de integrantes registrados     | — |                                       | — |     | x |
| HU7 · Asignar responsables registrados        | — |                                       | — |     | — |
| HU8 · Cambiar el estado                       | — |                                       | — |     | — |
| HU9 · Utilizar los estados permitidos         | — |                                       | — |     | — |
| HU10 · Filtrar por estado                     | — |                                       | — |     | — |
| HU11 · Filtrar por responsable                | — |                                       | — |     | — |
| HU12 · Identificar las tareas                 | — |                                       | — |     | x |                                 
| HU13 · Identificar los integrantes            | — |                                       | — |     | x |
| HU14 · Verificar al responsable               | — |                                       | — |     | — |
