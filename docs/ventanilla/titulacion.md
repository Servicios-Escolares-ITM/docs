# Módulo de Titulación

API para el proceso de titulación en el area de servicios escolares del ITM

## Diccionario de datos

### Titulos

| Campo                | Tipo de dato | Descripción            |
| -------------------- | :----------: | :--------------------- |
| **id**               |    `uuid`    | Identificador único    |
| **description**      |   `string`   | Descripción            |
| **substance**        |   `string`   | Sustancia activa       |
| **common_name**      |   `string`   | Nombre convencional    |
| **expiriation_date** |    `date`    | Fecha caducidad        |
| **unit_price**       |   `float`    | Costo unitario         |
| **package_price**    |   `float`    | Costo total            |
| **lote**             |  `integer`   | Lote                   |
| **stock**            |  `integer`   | Stock                  |
| **items_per_paq**    |  `integer`   | Cantidad por paquete   |
| **presentation**     |   `string`   | Presentación           |
| **dosis**            |   `string`   | Dosis por presentación |
| **created_at**       |  `datetime`  | Fecha de creación      |

## Endpoints

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
