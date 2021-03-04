# Módulo de Titulación

API para el proceso de titulación en el area de servicios escolares del ITM

## Diccionario de datos

### PlanName

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | 
| **plan_titulation**  |   `string`   | nombre del plan        | 
| **description**      |   `string`   | descripcion del plan   | 
| **is_active**        |   `boolean`  | si se encuentra activo | 
| **created_at**       |  `datetime`  | Fecha de creación      | 
| **updated_at**       |  `datetime`  | Fecha de creación      | 

### Documents

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | foreign 
| **id_plan**          |    `uuid`    | Identificador del plan | Lista de planes [2004, titulacion, ...] 
| **name**             |   `string`   | nombre del documento   | 
| **is_active**        |   `boolean`  | si se encuentra activo | 
| **created_at**       |  `datetime`  | Fecha de creación      | 
| **updated_at**       |  `datetime`  | Fecha de creación      | 


### alumDocs

| Campo                | Tipo de dato | Descripción                       | 
| -------------------- | :----------: | :---------------------            | 
| **id**               |    `uuid`    | Identificador único               | 
| **id_package**       |   `string`   | nombre del paquete                |  foreign
| **id_document**      |   `string`   | id del documento                  |  foreign
| **file**             |    `file`    | archivo del alumno                | 
| **is_acepted**       |   `boolean`  | si los archivos estan aceptados   | 
| **is_active**        |   `boolean`  |  si se encuentra activo           | 
| **created_at**       |  `datetime`  | Fecha de creación                 | 
| **updated_at**       |  `datetime`  | Fecha de creación                 | 

### docPackage

| Campo                | Tipo de dato | Descripción                       | 
| -------------------- | :----------: | :---------------------            | 
| **id**               |    `uuid`    | Identificador único               | foreign
| **id_alumn**         |   `string`   | id del alumno                     | idAlumno foreign
| **id_plan**          |   `string`   | id del plan                       | idPlan foreign
| **grade**            |   `enum`     | lista de datos                    | es de posgrado o de licenciatura (solo deja elegir un valor de la lista)
| **is_active**        |   `boolean`  |  si se encuentra activo           | 
| **created_at**       |  `datetime`  | Fecha de creación                 | 
| **updated_at**       |  `datetime`  | Fecha de creación                 | 

### adminResponse

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

