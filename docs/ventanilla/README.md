# Módulo de Autenticación y Autorización

API para el manejo de usuarios, roles y permisos

## Diccionario de datos

### Grupo

| Campo    | Tipo de dato | Descripción                                                  |
| -------- | :----------: | :----------------------------------------------------------- |
| **id**   |  `integer`   | `Alumno | Enfermeria | Ventanilla | Psicologia | Titulacion` |
| **name** |   `string`   | Descripción                                                  |

## Endpoints

- **GET** /api/groups/ Listar grupos de autenticación

  - Retornar los campos:
    - id
    - name
    - permissions
