# Módulo de Autenticación y Autorización

API para el manejo de usuarios, roles y permisos

## Grupo

### Diccionario de datos

| Campo          | Tipo de dato | Descripción                                                                      |
| -------------- | :----------: | :------------------------------------------------------------------------------- |
| **id**         |  `integer`   | Identificador numerico del grupo                                                 |
| **name**       |   `string`   | `student` , `nursing` , `digital-window` ...                                     |
| **permission** |   `array`    | Lista de acciones que tiene acceso el grupo i.e. `view_student`,`change_student` |

- `student`:
- `nursing`:
- `digital-window`:
- `psychology`:
- `titulation`:
- `merge-csv`:

## Endpoints

- **GET** /api/groups/ Listar grupos de autenticación

  - Retornar los campos:
    - id
    - name
    - permissions
