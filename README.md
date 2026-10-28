# Gestor de tareas en equipo

## Caso de uso

Caso 1: Gestor de tareas en equipo.

## Integrantes del equipo

- [Sergio Andrés Muñoz Gallego]
- [Jhon ALex Morales]
- [Tatiana wualteros]
- [Jhon Ferney Gallego]

## Descripción

Aplicación que permite registrar integrantes y gestionar las tareas de un
equipo. Cada tarea contiene título, descripción, responsable, estado y fecha
límite.

Permite crear, listar, consultar, editar y eliminar tareas, cambiar su estado
y filtrarlas por estado o responsable.

Los responsables deben estar registrados. Los estados permitidos son
pendiente, en progreso y hecha.

## Enlaces

- Aplicación en Render:
  https://gestor-tareas-equipo.onrender.com/
- Repositorio de GitHub:
  https://github.com/sergio3883-alt/stackblitz-starters-8sruxnde

## Tecnologías utilizadas

- Node.js y Express para la API.
- HTML, CSS y JavaScript para los formularios.
- Arreglos en memoria para almacenar los datos.
- StackBlitz para el desarrollo.
- GitHub para el control de versiones.
- Render para el despliegue.

## Cómo utilizar la aplicación

1. Abrir el enlace de Render.
2. Registrar un integrante indicando nombre y correo electrónico.
3. Completar los campos de Nueva tarea y seleccionar un responsable registrado.
4. Pulsar Crear tarea.
5. Utilizar Ver detalle para consultar toda la información.
6. Utilizar Editar y Guardar cambios para modificar una tarea o su estado.
7. Seleccionar los filtros y pulsar Filtrar.
8. Pulsar Limpiar filtros para recuperar el listado completo.
9. Utilizar Eliminar y confirmar para borrar una tarea.
10. Pulsar Actualizar para consultar nuevamente los datos del equipo.

## Ejecución en StackBlitz

Desde la raíz del proyecto:

```bash
npm install
```

```bash
node index.js
```

Abrir la vista previa del puerto 3000 y mantener el servidor activo.

## Endpoints disponibles

| Método | Ruta | Función | Respuesta exitosa |
|---|---|---|---|
| POST | /integrantes | Registrar un integrante | 201 |
| GET | /integrantes | Listar integrantes | 200 |
| GET | /integrantes/:id | Consultar un integrante | 200 |
| POST | /tareas | Crear una tarea | 201 |
| GET | /tareas | Listar tareas | 200 |
| GET | /tareas/:id | Consultar una tarea | 200 |
| PUT | /tareas/:id | Editar una tarea y su estado | 200 |
| DELETE | /tareas/:id | Eliminar una tarea | 204 |
| GET | /tareas?estado=pendiente | Filtrar por estado | 200 |
| GET | /tareas?responsable=1 | Filtrar por responsable | 200 |

Las respuestas de la API utilizan JSON, excepto la eliminación exitosa,
que devuelve 204 sin contenido.

Los datos inválidos generan una respuesta 400. La consulta de un integrante
inexistente y la consulta, edición o eliminación de una tarea inexistente
generan una respuesta 404.

## Ejemplos para probar los endpoints

Estos ejemplos se ejecutan desde una terminal compatible con curl.

Los identificadores 1 son ejemplos. Deben reemplazarse por los identificadores
reales devueltos al registrar el integrante y crear la tarea. La eliminación
debe ejecutarse al final.

### Registrar un integrante

```bash
curl -i -X POST https://gestor-tareas-equipo.onrender.com/integrantes \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ana López","correo":"ana@example.com"}'
```

### Listar integrantes

```bash
curl -i https://gestor-tareas-equipo.onrender.com/integrantes
```

### Consultar un integrante

```bash
curl -i https://gestor-tareas-equipo.onrender.com/integrantes/1
```

### Crear una tarea

```bash
curl -i -X POST https://gestor-tareas-equipo.onrender.com/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Preparar informe","descripcion":"Revisar los resultados del equipo.","responsable":1,"estado":"pendiente","fechaLimite":"2026-11-06"}'
```

### Listar tareas

```bash
curl -i https://gestor-tareas-equipo.onrender.com/tareas
```

### Consultar una tarea

```bash
curl -i https://gestor-tareas-equipo.onrender.com/tareas/1
```

### Editar una tarea y cambiar su estado

La edición requiere enviar todos los campos modificables.

```bash
curl -i -X PUT https://gestor-tareas-equipo.onrender.com/tareas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Revisar informe","descripcion":"Verificar la entrega final.","responsable":1,"estado":"en progreso","fechaLimite":"2026-11-07"}'
```

### Filtrar por estado

```bash
curl -i "https://gestor-tareas-equipo.onrender.com/tareas?estado=pendiente"
```

### Filtrar por responsable

```bash
curl -i "https://gestor-tareas-equipo.onrender.com/tareas?responsable=1"
```

### Eliminar una tarea

```bash
curl -i -X DELETE https://gestor-tareas-equipo.onrender.com/tareas/1
```

## Pruebas

Los casos de prueba, las entradas utilizadas y los resultados obtenidos
están registrados en pruebas.md.

## Almacenamiento de los datos

Los integrantes y las tareas se almacenan en arreglos en memoria.
Los registros se borran al reiniciar el servidor o realizar un nuevo
despliegue. Los datos de StackBlitz y Render son independientes.

Product Backlog

Historias De Usuario:

HU1. Crear tareas — RF1
Como integrante del equipo, quiero crear una tarea con título, descripción, responsable, estado y fecha límite, para organizar las actividades del equipo.
Criterio de aceptación: al enviar POST /tareas con los campos obligatorios, la API responde con código 201 y la tarea aparece posteriormente en GET /tareas.

**Tareas:**
- [x] Crear la función para guardar tareas en el arreglo en memoria.
- [x] Recibir título, descripción, responsable, estado y fecha límite.
- [x] Validar los campos obligatorios y sus tipos básicos.
- [x] Conectar POST /tareas con el controlador de creación.
- [x] Comprobar que una creación válida devuelve 201.
- [x] Comprobar que la tarea creada aparece en el listado.

HU2. Listar tareas — RF2
Como integrante del equipo, quiero consultar el listado de todas las tareas registradas, para conocer las actividades del equipo.
Criterio de aceptación: al enviar GET /tareas, la API responde con código 200 y devuelve un arreglo con las tareas registradas.

**Tareas:**
- [x] Crear la función que obtiene todas las tareas del arreglo.
- [x] Crear el controlador que devuelve las tareas en JSON.
- [x] Conectar GET /tareas con el controlador.
- [x] Comprobar que devuelve un arreglo vacío cuando no hay tareas.
- [x] Comprobar que devuelve las tareas registradas.

HU3. Consultar una tarea — RF3
Como integrante del equipo, quiero consultar una tarea mediante su identificador, para conocer su información completa.
Criterio de aceptación: al enviar GET /tareas/:id con un identificador existente, la API responde con código 200 y devuelve la tarea; si no existe, responde con código 404.

**Tareas:**
- [x] Crear la función que busca una tarea por su identificador.
- [x] Recibir y convertir a número el identificador de la ruta.
- [x] Conectar GET /tareas/:id con el controlador.
- [x] Devolver la tarea en JSON cuando existe.
- [x] Devolver 404 cuando la tarea no existe.
- [x] Comprobar los dos resultados.

HU4. Editar tareas — RF4
Como integrante del equipo, quiero modificar los datos de una tarea existente, para mantener actualizada su información.
Criterio de aceptación: al enviar PUT /tareas/:id con datos válidos, la API actualiza la tarea y los cambios aparecen al consultarla nuevamente.

**Tareas:**
- [x] Crear la función para actualizar una tarea existente.
- [x] Recibir y validar los datos que se van a modificar.
- [x] Conectar PUT /tareas/:id con el controlador.
- [x] Mantener el identificador original de la tarea.
- [x] Devolver 404 si la tarea no existe.
- [x] Comprobar que los cambios aparecen al consultar la tarea.


HU5. Eliminar tareas — RF5
Como integrante del equipo, quiero eliminar una tarea existente, para retirar actividades que ya no deben permanecer registradas.
Criterio de aceptación: al enviar DELETE /tareas/:id, la tarea se elimina y deja de aparecer en el listado.

**Tareas:**
- [x] Crear la función para eliminar una tarea del arreglo.
- [x] Conectar DELETE /tareas/:id con el controlador.
- [x] Devolver 404 si la tarea no existe.
- [x] Devolver 204 cuando la eliminación se complete.
- [x] Comprobar que la tarea eliminada deja de aparecer en el listado.

HU6. Disponer de integrantes registrados — RF6
Como integrante del equipo, quiero disponer de integrantes registrados con identificador, nombre y correo electrónico, para reconocer a las personas que pueden recibir tareas.
Criterio de aceptación: los integrantes registrados contienen los tres campos y pueden consultarse mediante GET /integrantes.

**Tareas:**
- [x] Crear el arreglo en memoria para los integrantes.
- [x] Crear las funciones para registrar, listar y consultar integrantes.
- [x] Validar que nombre y correo sean textos no vacíos.
- [x] Conectar POST /integrantes.
- [x] Conectar GET /integrantes y GET /integrantes/:id.
- [x] Comprobar el registro y las consultas de un integrante.


HU7. Asignar responsables registrados — RF7
Como integrante del equipo, quiero asignar las tareas únicamente a integrantes registrados, para distribuir las actividades entre personas existentes.
Criterio de aceptación: la API permite asignar una tarea a un integrante registrado y rechaza la asignación cuando el integrante no existe.

**Tareas:**
- [x] Utilizar el identificador del integrante para asignar al responsable.
- [x] Aplicar la validación de existencia definida en HU14.
- [x] Permitir la asignación al crear y al editar una tarea.
- [x] Comprobar una asignación válida y otra con un integrante inexistente.

HU8. Cambiar el estado — RF8
Como responsable de una tarea, quiero modificar su estado, para informar el avance de mi trabajo.
Criterio de aceptación: al modificar el estado mediante PUT /tareas/:id, el nuevo estado aparece al consultar la tarea.

**Tareas:**
- [x] Permitir modificar el campo estado mediante PUT /tareas/:id.
- [x] Aplicar la validación de estados definida en HU9.
- [x] Guardar el nuevo estado de la tarea.
- [x] Comprobar que el nuevo estado aparece al consultar la tarea.

HU9. Utilizar los estados permitidos — RF9
Como integrante del equipo, quiero utilizar únicamente los estados pendiente, en progreso y hecha, para registrar el avance de las tareas de manera uniforme.
Criterio de aceptación: la API acepta los tres estados definidos y rechaza cualquier otro al crear o modificar una tarea.

**Tareas:**
- [x] Definir los tres estados permitidos.
- [x] Validar el estado al crear una tarea.
- [x] Validar el estado al editar una tarea.
- [x] Rechazar con código 400 los estados no permitidos.
- [x] Comprobar la aceptación de los tres estados y el rechazo de otro valor.

HU10. Filtrar por estado — RF10
Como integrante del equipo, quiero consultar las tareas de un estado específico, para identificar las actividades según su avance.
Criterio de aceptación: al enviar GET /tareas?estado=pendiente, la API devuelve únicamente las tareas que tienen ese estado.

**Tareas:**
- [x] Leer el parámetro estado recibido en GET /tareas.
- [x] Filtrar las tareas que coincidan con el estado solicitado.
- [x] Devolver el resultado en JSON.
- [x] Mantener el listado completo cuando no se envíe el filtro.
- [x] Comprobar un filtro con resultados y otro sin coincidencias.

HU11. Filtrar por responsable — RF11
Como integrante del equipo, quiero consultar las tareas asignadas a una persona específica, para conocer sus actividades.
Criterio de aceptación: al enviar GET /tareas?responsable=1, la API devuelve únicamente las tareas asignadas al integrante con identificador 1.

**Tareas:**
- [x] Leer el parámetro responsable recibido en GET /tareas.
- [x] Convertir el identificador recibido a número.
- [x] Filtrar las tareas que correspondan al responsable solicitado.
- [x] Devolver el resultado en JSON.
- [x] Comprobar un filtro con resultados y otro sin coincidencias.

HU12. Identificar las tareas — RF12
Como integrante del equipo, quiero que cada tarea tenga un identificador único, para distinguirla de las demás.
Criterio de aceptación: al crear dos tareas, el sistema genera un identificador diferente para cada una.

**Tareas:**
- [x] Definir el contador de identificadores de tareas.
- [x] Asignar automáticamente un identificador al crear cada tarea.
- [x] Evitar que un identificador enviado por el usuario sustituya al generado.
- [x] Crear dos tareas y comprobar que sus identificadores son diferentes.


HU13. Identificar los integrantes — RF13
Como integrante del equipo, quiero que cada integrante tenga un identificador único, para diferenciar a las personas registradas.
Criterio de aceptación: cada integrante registrado tiene un identificador diferente al de los demás.

**Tareas:**
- [x] Definir el contador de identificadores de integrantes.
- [x] Asignar automáticamente un identificador al registrar cada integrante.
- [x] Evitar que un identificador enviado por el usuario sustituya al generado.
- [x] Registrar dos integrantes y comprobar que sus identificadores son diferentes.

HU14. Verificar al responsable — RF14
Como integrante del equipo, quiero que el sistema compruebe la existencia del responsable antes de asignarlo, para evitar tareas asociadas a personas inexistentes.

**Tareas:**
- [x] Consultar el arreglo de integrantes mediante su identificador.
- [x] Verificar la existencia del responsable antes de crear una tarea.
- [x] Verificar la existencia del responsable antes de editar una tarea.
- [x] Rechazar la operación cuando el integrante no exista.
- [x] Comprobar que una asignación rechazada no modifica los datos.

Criterio de aceptación: antes de crear o modificar una tarea, la API verifica el identificador del responsable y rechaza la operación cuando no existe.

HU7 y HU14 están relacionadas y se resolverán con la misma validación. Se conservan como historias separadas para mantener la correspondencia con tus requisitos.



                                            | Por hacer |                             | En progreso | Hecho |

| HU1 · Crear tareas                            | - |                                       | — |     | x |
| HU2 · Listar tareas                           | - |                                       | — |     | x |
| HU3 · Consultar una tarea                     | — |                                       | — |     | x |
| HU4 · Editar tareas                           | — |                                       | — |     | x |
| HU5 · Eliminar tareas                         | — |                                       | — |     | x |
| HU6 · Disponer de integrantes registrados     | — |                                       | — |     | x |
| HU7 · Asignar responsables registrados        | — |                                       | — |     | x |
| HU8 · Cambiar el estado                       | — |                                       | — |     | x |
| HU9 · Utilizar los estados permitidos         | — |                                       | — |     | x |
| HU10 · Filtrar por estado                     | — |                                       | — |     | x |
| HU11 · Filtrar por responsable                | — |                                       | — |     | x |
| HU12 · Identificar las tareas                 | — |                                       | — |     | x |                                 
| HU13 · Identificar los integrantes            | — |                                       | — |     | x |
| HU14 · Verificar al responsable               | — |                                       | — |     | x |



## Revisión del sprint 2 — Semana 3

- Integrante que realizó la comprobación: [jhon alex morales]
- Fecha de revisión: [27/10/2026]
- Funcionalidades revisadas: creación, consulta, edición, eliminación,
  estados, filtros y validaciones de tareas.
- Resultado de la revisión: [Comprobación completa y funcional]
- Pendientes encontrados: [Ninguno]