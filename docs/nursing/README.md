# API

API para el manejo de medicamentos y expendientes del área de Enfemeria del ITM

## Medicamento y suministtros

### Diccionario de datos

| Campo               | Tipo de dato | Descripción            |
| ------------------- | :----------: | ---------------------- |
| **id**              |    `uuid`    | Identificador único    |
| **description**     |   `string`   | Descripción            |
| **substance**       |   `string`   | Sustancia activa       |
| **common_name**     |   `string`   | Nombre convencional    |
| **expiration_date** |    `date`    | Fecha caducidad        |
| **unit_price**      |   `float`    | Costo unitario         |
| **package_price**   |   `float`    | Costo total            |
| **lote**            |  `integer`   | Código de Lote         |
| **stock**           |  `integer`   | Stock                  |
| **items_per_paq**   |  `integer`   | Cantidad por paquete   |
| **presentation**    |   `string`   | Presentación           |
| **dosis**           |   `string`   | Dosis por presentación |
| **created_at**      |  `datetime`  | Fecha de creación      |
| **updated_at**      |  `datetime`  | Fecha de actualización |

### Endpoints

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

## Expedientes médicos

### Diccionario de datos

#### Usuario

Este modulo utiliza el modelo de Usuario y Alumno definidos globales pero se hace referencia a los campos relevantes que se utlizand en este modulo

| Campo              | Tipo de dato | Descripción             |
| ------------------ | :----------: | :---------------------- |
| **id**             |    `uuid`    | Identificador único     |
| **email**          |   `string`   | Correo institucional    |
| **first_name**     |   `string`   | Nombre                  |
| **last_name**      |   `string`   | Apellidos               |
| **gender**         |   `string`   | Sexo: ['M', 'F', 'NE' ] |
| **CURP**           |   `string`   | CURP                    |
| **NSS**            |   `string`   | Número seguro social    |
| **address**        |   `string`   | Dirección               |
| **marital_status** |   `string`   | Estado civil ['C', 'S'] |
| **age**            |  `integer`   | Edad en meses           |
| **phone**          |  `integer`   | Telefono de contacto    |
| **birthday**       |  `datetime`  | Fecha de nacimiento     |

### Estudiante

| Campo          | Tipo de dato | Descripción            |
| -------------- | :----------: | :--------------------- |
| **id**         |    `uuid`    | Identificador único    |
| **user**       |    `uuid`    | Usuario del estudiante |
| **enrollment** |   `string`   | Matrícula              |
| **career**     |   `string`   | Carrera                |
| **admission**  |  `integer`   | Ingreso                |

#### Ficha Médica

| Campo                   | Tipo de dato | Descripción                                        |
| ----------------------- | :----------: | :------------------------------------------------- |
| **id**                  |    `uuid`    | Identificador único                                |
| **user**                |    `uuid`    | Usuario (VD) asociado al registro                  |
| **weight**              |   `float`    | Peso en Kg                                         |
| **height**              |   `float`    | Altura o tall en mts o cm                          |
| **abdominal_perimeter** |   `float`    | Perímetro abdominal                                |
| **BMI**                 |   `float`    | Indice de Masa Corporal ([IMC](https://es.wikipedia.org/wiki/C3%8Dndice_de_masa_corporal))                     |
| **blood_pressure**      |   `float`    | Presion arterial                                   |
| **heart_rate**          |   `float`    | Frecuencia cardiaca (FC)                           |
| **breath_freq**         |   `float`    | Frecuencia respiratoria (FR)                       |
| **personal_history**    |    `JSON`    | ANTECEDENTES PERSONALES                            |
| **family_history**      |    `JSON`    | ANTECEDENTES FAMILIARES                            |
| **ocupation**           |   `string`   | Actividad preponderante                            |
| **affiliation**         |   `string`   | AFILIACIÓN AL SISTEMA DE SALUD (IMSS, ISSSTE, ETC) |
| **cedula**              |   `string`   | CEDULA DE AFILIACIÓN                               |
| **blood_type**          |   `string`   | TIPO SANGUÍNEO                                     |
| **observations**        |   `string`   | Observaciones adicionales                          |
| **created_at**          |  `datetime`  | Fecha de creación                                  |
| **updated_at**          |  `datetime`  | Fecha de actualización                             |
