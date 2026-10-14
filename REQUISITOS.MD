Requisitos — Gestor de tareas en equipo
Actores

Integrante del equipo: persona que utiliza el sistema para consultar y gestionar las tareas asignadas.

Responsable de una tarea: integrante encargado de realizar una tarea determinada.

Sistema: aplicación encargada de administrar las tareas, integrantes, estados y fechas límite.

Requisitos funcionales

RF1. Gestión de tareas
El sistema debe permitir crear nuevas tareas registrando como mínimo un título, una descripción, un responsable, un estado y una fecha límite.

RF2. Consulta de tareas
El sistema debe permitir visualizar un listado de todas las tareas registradas.

RF3. Consulta del detalle de una tarea
El sistema debe permitir consultar la información completa de una tarea específica mediante su identificador.

RF4. Edición de tareas
El sistema debe permitir modificar la información de una tarea existente, incluyendo su título, descripción, responsable, estado y fecha límite.

RF5. Eliminación de tareas
El sistema debe permitir eliminar una tarea existente del sistema.

RF6. Gestión de integrantes
El sistema debe permitir disponer de integrantes registrados con un identificador, nombre y correo electrónico.

RF7. Asignación de responsables
El sistema debe permitir asignar una tarea únicamente a un integrante que se encuentre registrado en el sistema.

RF8. Cambio de estado
El sistema debe permitir modificar el estado de una tarea para reflejar su avance.

RF9. Estados disponibles
El sistema debe manejar únicamente los estados pendiente, en progreso y hecha para las tareas.

RF10. Filtrado por estado
El sistema debe permitir consultar las tareas que correspondan a un estado específico.

RF11. Filtrado por responsable
El sistema debe permitir consultar las tareas asignadas a un integrante específico.

RF12. Identificación de tareas
Cada tarea debe contar con un identificador único que permita distinguirla de las demás.

RF13. Identificación de integrantes
Cada integrante debe contar con un identificador único dentro del sistema.

RF14. Validación del responsable
El sistema debe verificar que el integrante seleccionado como responsable exista antes de asignarlo a una tarea.

Requisitos no funcionales

RNF1. Formato de respuesta
La aplicación debe manejar la información mediante respuestas en formato JSON cuando se utilice una API.

RNF2. Validación de información
El sistema debe validar los campos obligatorios antes de crear o modificar una tarea, evitando almacenar información incompleta.

RNF3. Integridad de los datos
El sistema debe mantener la relación correcta entre las tareas y los integrantes registrados, evitando asignar tareas a personas inexistentes.

RNF4. Disponibilidad
La aplicación debe poder ser utilizada desde un navegador web y permitir a los integrantes consultar y gestionar las tareas disponibles.

RNF5. Usabilidad
La interfaz debe presentar de forma clara las tareas, sus responsables, estados y fechas límite para facilitar su consulta y gestión.
