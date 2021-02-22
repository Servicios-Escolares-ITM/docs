### USUARIOS

### Usuario

| Campo           | Tipo de dato | Descripción          |
| --------------- | :----------: | :------------------- |
| **id**          |    `uuid`    | Identificador único  |
| **email**       |   `string`   | Correo institucional |
| **first_name**  |   `string`   | Nombre               |
| **last_name**   |   `string`   | Apellidos            |
| **date_joined** |    `date`    | Fecha registro       |
| **is_staff**    |  `boolean`   | Roll                 |
| **is_active**   |  `boolean`   | Validación vigencia  |

### Notificación

| Campo       | Tipo de dato | Descripción            |
| ----------- | :----------: | :--------------------- |
| **id**      |    `uuid`    | Identificador único    |
| **user**    |   `string`   | Usuario                |
| **message** |   `string`   | Mensaje aviso          |
| **date**    |    `date`    | Fecha                  |
| **read**    |  `boolean`   | Verificar notificación |
| **subject** |   `string`   | Roll                   |

### ESTUDIANTES

### Estudiante

| Campo          | Tipo de dato | Descripción             |
| -------------- | :----------: | :---------------------- |
| **id**         |    `uuid`    | Identificador único     |
| **enrollment** |   `string`   | Matrícula               |
| **admission**  |  `integer`   | Ingreso                 |
| **CURP**       |   `string`   | CURP                    |
| **NSS**        |   `string`   | Número seguro social    |
| **career**     |   `string`   | Carrera                 |
| **speciality** |   `string`   | Especialidad de carrera |
| **user**       |     `id`     | Usuario del estudiante  |

### Trámite

| Campo           | Tipo de dato | Descripción                     |
| --------------- | :----------: | :------------------------------ |
| **id**          |    `uuid`    | Identificador único             |
| **type**        |   `string`   | Tipo de solicitud               |
| **description** |   `string`   | Descripción solicitud           |
| **date**        |    `date`    | Fecha solicitud                 |
| **status**      |   `string`   | Estado del trámite              |
| **photo**       |    `file`    | Foto alumno                     |
| **INE**         |    `file`    | INE alumno                      |
| **student**     |    `uuid`    | Alumno que realiza la solicitud |
| **document**    |    `file`    | Documento de trámite            |

### Semestre

| Campo      | Tipo de dato | Descripción         |
| ---------- | :----------: | :------------------ |
| **id**     |    `uuid`    | Identificador único |
| **start**  |    `date`    | Fecha semestre      |
| **finish** |    `date`    | Ingreso             |

### Departamento

| Campo       | Tipo de dato | Descripción                 |
| ----------- | :----------: | :-------------------------- |
| **id**      |    `uuid`    | Identificador único         |
| **name**    |   `string`   | Nombre del departamento     |
| **head**    |  `integer`   | Responsable de departamento |
| **contact** |   `email`    | Correo de contacto          |
