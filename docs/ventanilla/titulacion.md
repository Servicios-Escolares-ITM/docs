# Módulo de Titulación

API para el proceso de titulación en el area de servicios escolares del ITM

## Diccionario de datos

### PlanName

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | 
| **planTitulation**   |   `string`   | nombre del plan        | 
| **description**      |   `string`   | descripcion del plan   | 
| **isActive**         |   `boolean`  | si existe el archivo   | 
| **created_at**       |  `datetime`  | Fecha de creación      | 
| **updated_at**       |  `datetime`  | Fecha de creación      | 

### Documents

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | foreign 
| **idPlan**           |    `uuid`    | Identificador único    | Lista de planes [2004, titulacion, ...] 
| **name**             |   `string`   | nombre del plan        | [curp] 
| **isActive**         |   `boolean`  | si existe el archivo   | 
| **created_at**       |  `datetime`  | Fecha de creación      | 
| **updated_at**       |  `datetime`  | Fecha de creación      | 


### alumDocs

| Campo                | Tipo de dato | Descripción                       | 
| -------------------- | :----------: | :---------------------            | 
| **id**               |    `uuid`    | Identificador único               | 
| **idPackage**        |   `string`   | nombre del paquete                |  foreign
| **idDocument**       |   `string`   | id del documento                  |  foreign
| **file**             |    `uuid`    | Identificador único               | 
| **isAcepted**        |   `boolean`  | si los archivos estan aceptados   | 
| **isActive**         |   `boolean`  | si existe el archivo              | 
| **created_at**       |  `datetime`  | Fecha de creación                 | 
| **updated_at**       |  `datetime`  | Fecha de creación                 | 

### docPackage

| Campo                | Tipo de dato | Descripción                       | 
| -------------------- | :----------: | :---------------------            | 
| **id**               |    `uuid`    | Identificador único               | foreign
| **idAlumn**          |   `string`   | id del alumno                     | idAlumno foreign
| **idPlan**           |   `string`   | nombre del plan                   | idPlan foreign
| **grade**            |   `enum`     | lista de datos                    | es de posgrado o de licenciatura (solo deja elegir un valor de la lista)
| **isActive**         |   `boolean`  | si existe el paquete              | 
| **created_at**       |  `datetime`  | Fecha de creación                 | 
| **updated_at**       |  `datetime`  | Fecha de creación                 | 

### adminResponse

| Campo                | Tipo de dato | Descripción            | 
| -------------------- | :----------: | :--------------------- | 
| **id**               |    `uuid`    | Identificador único    | 
| **toAlumn**          |   `string`   | nombre del plan        | idAlumno foreign
| **idDocument**       |   `string`   | nombre del plan        | idCampo foreign
| **file**             |    `uuid`    | Identificador único    | 
| **comment**          |   `string`   | Identificador único    | 
| **isRead**           |   `boolean`  | si ya vio el archivo   | 
| **isActive**         |   `boolean`  | si existe el archivo   | 
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

