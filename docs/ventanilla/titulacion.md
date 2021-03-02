# Módulo de Titulación

API para el proceso de titulación en el area de servicios escolares del ITM

## Diccionario de datos

### PlanName

| Campo                | Tipo de dato | Descripción            |
| -------------------- | :----------: | :--------------------- |
| **id**               |    `uuid`    | Identificador único    | 
| **planTitulation**   |   `string`   | nombre del plan        | 



### PlanData

| Campo                | Tipo de dato | Descripción                  |
| -------------------- | :----------: | :--------------------------- |
| **id**               |    `uuid`    | Identificador único          |
| **actaNacimiento**   |    `docs`    | Acta de nacimiento           |
| **certBachiller**    |    `docs`    | Certificado de Bachillerato  |
| **certProfesional**  |    `docs`    | Certificado profesional      |
| **constSS**          |    `docs`    | Constancia ServicioSocial    |
| **constIngles**      |    `docs`    | Constancia de ingles         |
| **opciones**         |    `string`  | Opcion de titulacion  ????   | 
| **curp**             |    `docs`    | curp                         |
| **fotografia**       |    `img`     | Foto tam. cred. ovalada      |
| **hojaNoAdeu**       |    `docs`    | Hoja de no adeudo            |
| **actoDeRec**        |    `docs`    | Acto de recepcion prof.      |
| **efirmaSat**        |    `docs`    | tramite de la e-firma        |
| **created_at**       |  `datetime`  | Fecha de creación            |
| **updated_at**       |  `datetime`  | Fecha de creación            |

### PlanReturn

| Campo                | Tipo de dato | Descripción                     |
| -------------------- | :----------: | :------------------------------ |
| **id**               |    `uuid`    | Identificador único             | 
| **noInc**            |    `docs`    | const. no inconveniencia        | 
| **compExamen**       |    `docs`    | comprobante de examen           | 
| **jurEtica**         |    `docs`    | juramento de etica              | 

### PlanPayments

| Campo                | Tipo de dato | Descripción                     |
| -------------------- | :----------: | :------------------------------ |
| **id**               |    `uuid`    | Identificador único             | 
| **reciboPago**       |    `docs`    | recibo de pago                  | 



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
