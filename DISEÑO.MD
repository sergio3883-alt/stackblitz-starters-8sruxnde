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
