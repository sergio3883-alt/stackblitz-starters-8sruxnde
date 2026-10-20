Product Backlog

Historias De Usuario:

HU1. Crear tareas — RF1
Como integrante del equipo, quiero crear una tarea con título, descripción, responsable, estado y fecha límite, para organizar las actividades del equipo.
Criterio de aceptación: al enviar POST /tareas con los campos obligatorios, la API responde con código 201 y la tarea aparece posteriormente en GET /tareas.

**Tareas:**
- [ ] Crear la función para guardar tareas en el arreglo en memoria.
- [ ] Recibir título, descripción, responsable, estado y fecha límite.
- [ ] Validar los campos obligatorios y sus tipos básicos.
- [ ] Conectar POST /tareas con el controlador de creación.
- [ ] Comprobar que una creación válida devuelve 201.
- [ ] Comprobar que la tarea creada aparece en el listado.

HU2. Listar tareas — RF2
Como integrante del equipo, quiero consultar el listado de todas las tareas registradas, para conocer las actividades del equipo.
Criterio de aceptación: al enviar GET /tareas, la API responde con código 200 y devuelve un arreglo con las tareas registradas.

**Tareas:**
- [ ] Crear la función que obtiene todas las tareas del arreglo.
- [ ] Crear el controlador que devuelve las tareas en JSON.
- [ ] Conectar GET /tareas con el controlador.
- [ ] Comprobar que devuelve un arreglo vacío cuando no hay tareas.
- [ ] Comprobar que devuelve las tareas registradas.

HU3. Consultar una tarea — RF3
Como integrante del equipo, quiero consultar una tarea mediante su identificador, para conocer su información completa.
Criterio de aceptación: al enviar GET /tareas/:id con un identificador existente, la API responde con código 200 y devuelve la tarea; si no existe, responde con código 404.

**Tareas:**
- [ ] Crear la función que busca una tarea por su identificador.
- [ ] Recibir y convertir a número el identificador de la ruta.
- [ ] Conectar GET /tareas/:id con el controlador.
- [ ] Devolver la tarea en JSON cuando existe.
- [ ] Devolver 404 cuando la tarea no existe.
- [ ] Comprobar los dos resultados.

HU4. Editar tareas — RF4
Como integrante del equipo, quiero modificar los datos de una tarea existente, para mantener actualizada su información.
Criterio de aceptación: al enviar PUT /tareas/:id con datos válidos, la API actualiza la tarea y los cambios aparecen al consultarla nuevamente.

**Tareas:**
- [ ] Crear la función para actualizar una tarea existente.
- [ ] Recibir y validar los datos que se van a modificar.
- [ ] Conectar PUT /tareas/:id con el controlador.
- [ ] Mantener el identificador original de la tarea.
- [ ] Devolver 404 si la tarea no existe.
- [ ] Comprobar que los cambios aparecen al consultar la tarea.


HU5. Eliminar tareas — RF5
Como integrante del equipo, quiero eliminar una tarea existente, para retirar actividades que ya no deben permanecer registradas.
Criterio de aceptación: al enviar DELETE /tareas/:id, la tarea se elimina y deja de aparecer en el listado.

**Tareas:**
- [ ] Crear la función para eliminar una tarea del arreglo.
- [ ] Conectar DELETE /tareas/:id con el controlador.
- [ ] Devolver 404 si la tarea no existe.
- [ ] Devolver 204 cuando la eliminación se complete.
- [ ] Comprobar que la tarea eliminada deja de aparecer en el listado.

HU6. Disponer de integrantes registrados — RF6
Como integrante del equipo, quiero disponer de integrantes registrados con identificador, nombre y correo electrónico, para reconocer a las personas que pueden recibir tareas.
Criterio de aceptación: los integrantes registrados contienen los tres campos y pueden consultarse mediante GET /integrantes.

**Tareas:**
- [ ] Crear el arreglo en memoria para los integrantes.
- [ ] Crear las funciones para registrar, listar y consultar integrantes.
- [ ] Validar que nombre y correo sean textos no vacíos.
- [ ] Conectar POST /integrantes.
- [ ] Conectar GET /integrantes y GET /integrantes/:id.
- [ ] Comprobar el registro y las consultas de un integrante.


HU7. Asignar responsables registrados — RF7
Como integrante del equipo, quiero asignar las tareas únicamente a integrantes registrados, para distribuir las actividades entre personas existentes.
Criterio de aceptación: la API permite asignar una tarea a un integrante registrado y rechaza la asignación cuando el integrante no existe.

**Tareas:**
- [ ] Utilizar el identificador del integrante para asignar al responsable.
- [ ] Aplicar la validación de existencia definida en HU14.
- [ ] Permitir la asignación al crear y al editar una tarea.
- [ ] Comprobar una asignación válida y otra con un integrante inexistente.

HU8. Cambiar el estado — RF8
Como responsable de una tarea, quiero modificar su estado, para informar el avance de mi trabajo.
Criterio de aceptación: al modificar el estado mediante PUT /tareas/:id, el nuevo estado aparece al consultar la tarea.

**Tareas:**
- [ ] Permitir modificar el campo estado mediante PUT /tareas/:id.
- [ ] Aplicar la validación de estados definida en HU9.
- [ ] Guardar el nuevo estado de la tarea.
- [ ] Comprobar que el nuevo estado aparece al consultar la tarea.

HU9. Utilizar los estados permitidos — RF9
Como integrante del equipo, quiero utilizar únicamente los estados pendiente, en progreso y hecha, para registrar el avance de las tareas de manera uniforme.
Criterio de aceptación: la API acepta los tres estados definidos y rechaza cualquier otro al crear o modificar una tarea.

**Tareas:**
- [ ] Definir los tres estados permitidos.
- [ ] Validar el estado al crear una tarea.
- [ ] Validar el estado al editar una tarea.
- [ ] Rechazar con código 400 los estados no permitidos.
- [ ] Comprobar la aceptación de los tres estados y el rechazo de otro valor.

HU10. Filtrar por estado — RF10
Como integrante del equipo, quiero consultar las tareas de un estado específico, para identificar las actividades según su avance.
Criterio de aceptación: al enviar GET /tareas?estado=pendiente, la API devuelve únicamente las tareas que tienen ese estado.

**Tareas:**
- [ ] Leer el parámetro estado recibido en GET /tareas.
- [ ] Filtrar las tareas que coincidan con el estado solicitado.
- [ ] Devolver el resultado en JSON.
- [ ] Mantener el listado completo cuando no se envíe el filtro.
- [ ] Comprobar un filtro con resultados y otro sin coincidencias.

HU11. Filtrar por responsable — RF11
Como integrante del equipo, quiero consultar las tareas asignadas a una persona específica, para conocer sus actividades.
Criterio de aceptación: al enviar GET /tareas?responsable=1, la API devuelve únicamente las tareas asignadas al integrante con identificador 1.

**Tareas:**
- [ ] Leer el parámetro responsable recibido en GET /tareas.
- [ ] Convertir el identificador recibido a número.
- [ ] Filtrar las tareas que correspondan al responsable solicitado.
- [ ] Devolver el resultado en JSON.
- [ ] Comprobar un filtro con resultados y otro sin coincidencias.

HU12. Identificar las tareas — RF12
Como integrante del equipo, quiero que cada tarea tenga un identificador único, para distinguirla de las demás.
Criterio de aceptación: al crear dos tareas, el sistema genera un identificador diferente para cada una.

**Tareas:**
- [ ] Definir el contador de identificadores de tareas.
- [ ] Asignar automáticamente un identificador al crear cada tarea.
- [ ] Evitar que un identificador enviado por el usuario sustituya al generado.
- [ ] Crear dos tareas y comprobar que sus identificadores son diferentes.


HU13. Identificar los integrantes — RF13
Como integrante del equipo, quiero que cada integrante tenga un identificador único, para diferenciar a las personas registradas.
Criterio de aceptación: cada integrante registrado tiene un identificador diferente al de los demás.

**Tareas:**
- [ ] Definir el contador de identificadores de integrantes.
- [ ] Asignar automáticamente un identificador al registrar cada integrante.
- [ ] Evitar que un identificador enviado por el usuario sustituya al generado.
- [ ] Registrar dos integrantes y comprobar que sus identificadores son diferentes.

HU14. Verificar al responsable — RF14
Como integrante del equipo, quiero que el sistema compruebe la existencia del responsable antes de asignarlo, para evitar tareas asociadas a personas inexistentes.

**Tareas:**
- [ ] Consultar el arreglo de integrantes mediante su identificador.
- [ ] Verificar la existencia del responsable antes de crear una tarea.
- [ ] Verificar la existencia del responsable antes de editar una tarea.
- [ ] Rechazar la operación cuando el integrante no exista.
- [ ] Comprobar que una asignación rechazada no modifica los datos.

Criterio de aceptación: antes de crear o modificar una tarea, la API verifica el identificador del responsable y rechaza la operación cuando no existe.

HU7 y HU14 están relacionadas y se resolverán con la misma validación. Se conservan como historias separadas para mantener la correspondencia con tus requisitos.



                                            | Por hacer |                             | En progreso | Hecho |

| HU1 · Crear tareas                            | - |                                       | — |     | — |
| HU2 · Listar tareas                           | - |                                       | — |     | — |
| HU3 · Consultar una tarea                     | — |                                       | — |     | — |
| HU4 · Editar tareas                           | — |                                       | — |     | — |
| HU5 · Eliminar tareas                         | — |                                       | — |     | — |
| HU6 · Disponer de integrantes registrados     | — |                                       | — |     | — |
| HU7 · Asignar responsables registrados        | — |                                       | — |     | — |
| HU8 · Cambiar el estado                       | — |                                       | — |     | — |
| HU9 · Utilizar los estados permitidos         | — |                                       | — |     | — |
| HU10 · Filtrar por estado                     | — |                                       | — |     | — |
| HU11 · Filtrar por responsable                | — |                                       | — |     | — |
| HU12 · Identificar las tareas                 | — |                                       | — |     | — |                                 
| HU13 · Identificar los integrantes            | — |                                       | — |     | — |
| HU14 · Verificar al responsable               | — |                                       | — |     | — |
