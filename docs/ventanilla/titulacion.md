# Módulo de Titulación

API para el proceso de titulación en el area de servicios escolares del ITM

## Diccionario de datos

### Titulation

| Campo                 | Tipo de dato | Descripción            | 
| --------------------- | :----------: | :--------------------- | 
| **id**                |    `uuid`    | Identificador único    | 
| **option_titulation** |   `string`   | opcion de titulacion   | 
| **status**            |   `string`   | descripcion del plan   | 
| **created_at**        |  `datetime`  | Fecha de creación      | 
| **updated_at**        |  `datetime`  | Fecha de creación      | 

### Plan

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | 
| **plan_titulation**  |   `string`   | nombre del plan        | 
| **description**      |   `string`   | descripcion del plan   | 
| **is_active**        |   `boolean`  | si se encuentra activo | 
| **created_at**       |  `datetime`  | Fecha de creación      | 
| **updated_at**       |  `datetime`  | Fecha de creación      | 

### Document

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | foreign 
| **name**             |   `string`   | nombre del documento   | 
| **is_active**        |   `boolean`  | si se encuentra activo | 
| **created_at**       |  `datetime`  | Fecha de creación      | 
| **updated_at**       |  `datetime`  | Fecha de creación      | 

### studentDoc

| Campo                | Tipo de dato | Descripción                       | 
| -------------------- | :----------: | :---------------------            | 
| **id**               |    `uuid`    | Identificador único               | 
| **id_document**      |   `string`   | id del documento                  |  foreign |quitar|
| **id_alumn**         |   `string`   | id del alumno                     |  idAlumno foreign
| **file**             |    `file`    | archivo del alumno                | 
| **is_valid**         |   `boolean`  | si los archivos estan aceptados   | 
| **has_error**        |   `boolean`  | si el documento tiene errores     | 
| **comment**          |   `string`   | comentario para los errores       | 
| **is_active**        |   `boolean`  |  si se encuentra activo           | 
| **created_at**       |  `datetime`  | Fecha de creación                 | 
| **updated_at**       |  `datetime`  | Fecha de creación                 | 

### planPackage

| Campo                | Tipo de dato | Descripción                       | 
| -------------------- | :----------: | :---------------------            | 
| **id**               |    `uuid`    | Identificador único               | foreign
| **id_plan**          |   `string`   | id del plan                       | idPlan foreign
| **grade**            |   `enum`     | lista de datos                    | es de posgrado o de licenciatura (solo deja elegir un valor de la lista)
| **is_active**        |   `boolean`  |  si se encuentra activo           | 
| **created_at**       |  `datetime`  | Fecha de creación                 | 
| **updated_at**       |  `datetime`  | Fecha de creación                 | 

### adminDoc

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | 
| **id_alumn**         |    `uuid`    | id alumno que recibe   | idAlumno foreign
| **id_document**      |   `string`   | id del doc             | idCampo foreign
| **file**             |    `file`    | Identificador único    | 
| **comment**          |   `string`   | Identificador único    | 
| **is_read**          |   `boolean`  | si ya vio el archivo   | 
| **is_active**        |   `boolean`  | si se encuentra activo |
| **created_at**       |  `datetime`  | Fecha de creación      | 
| **updated_at**       |  `datetime`  | Fecha de creación      | 


### Endpoints EXAMPLES

- **GET** /api/medicines/ Listado medicamentos registrados en la base de datos.
  - Retornar todos los campos de Medicine.
  - Busqueda por descripcion y sustancia activa.
  - Todos los campos deben poder filtrarse.
  - Todos los campos deben poder ordenarse
  - Orden por defecto por fecha de creación (`created_at`)

- **GET** /api/medicines/{id}/ Obtener información de un medicamento
  - Debe incluir todos los campos

- **POST** /api/medicines/ Crear un medicamento
  - Solo si el usuario pertenece al grupo `Nursing`
- **PATCH** /api/medicines/{id} Actualizar información un medicamento
  - Solo si el usuario pertenece al grupo `Nursing`
- **DELETE** /api/medicines/{id} Eliminar usuario
  - Solo si el usuario pertenece al grupo `Nursing`
# En construccion

ya existe

tabla de alumno

id
nombre
matricula
admision
speciality
carrera
