# Diseño — Gestor de tareas en equipo

## 1. Modelo de datos

### Entidad: Integrante

Representa a una persona registrada en el equipo que puede recibir tareas.

| Campo | Tipo de dato | Obligatorio | Descripción |
|---|---|---|---|
| id | Número entero autogenerado | Sí | Identificador único del integrante. |
| nombre | Texto | Sí | Nombre del integrante. |
| correo | Texto | Sí | Correo electrónico del integrante. |

### Entidad: Tarea

Representa una actividad que debe realizar un integrante del equipo.

| Campo | Tipo de dato | Obligatorio | Descripción |
|---|---|---|---|
| id | Número entero autogenerado | Sí | Identificador único de la tarea. |
| titulo | Texto | Sí | Nombre de la tarea. |
| descripcion | Texto | Sí | Explicación de la actividad que debe realizarse. |
| responsable | Número entero | Sí | Identificador del integrante encargado de la tarea. |
| estado | Texto | Sí | Estado de la tarea: pendiente, en progreso o hecha. |
| fechaLimite | Texto con formato AAAA-MM-DD | Sí | Fecha máxima para realizar la tarea. |

### Relación entre las entidades

Un integrante puede tener varias tareas asignadas y cada tarea tiene un
solo responsable.

El campo responsable de una tarea contiene el id del integrante encargado.
Por ejemplo, responsable: 1 corresponde al integrante cuyo id es 1.

### Almacenamiento

Durante el sprint 1, los integrantes y las tareas se almacenarán en
arreglos en memoria. Los registros se perderán al reiniciar el servidor.

Los identificadores serán generados por el sistema.

## 2. Rutas de la API

### Rutas de integrantes

| Método | Ruta | Qué hace | Implementación prevista |
|---|---|---|---|
| GET | /integrantes | Lista todos los integrantes registrados. | Semana 2 |
| GET | /integrantes/:id | Consulta un integrante por su identificador. | Semana 2 |
| POST | /integrantes | Registra un integrante con nombre y correo electrónico. | Semana 2 |

### Rutas de tareas

| Método | Ruta | Qué hace | Implementación prevista |
|---|---|---|---|
| GET | /tareas | Lista todas las tareas registradas. | Semana 2 |
| GET | /tareas/:id | Consulta la información completa de una tarea por su identificador. | Semana 2 |
| POST | /tareas | Crea una tarea con título, descripción, responsable, estado y fecha límite. | Semana 2 |
| PUT | /tareas/:id | Modifica los datos de una tarea, incluido su responsable o estado. | Semana 3 |
| DELETE | /tareas/:id | Elimina una tarea existente. | Semana 3 |

### Filtros de tareas

| Método | Ruta de ejemplo | Qué hace | Implementación prevista |
|---|---|---|---|
| GET | /tareas?estado=pendiente | Consulta las tareas que tienen el estado indicado. | Semana 3 |
| GET | /tareas?responsable=1 | Consulta las tareas asignadas al integrante indicado. | Semana 3 |

Los filtros utilizarán parámetros de consulta de la ruta GET /tareas.

El cambio de estado y de responsable se realizará mediante PUT /tareas/:id.
