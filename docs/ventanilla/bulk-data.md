# Bulk Data API

## Diccionario de datos

### Notificación

| Campo       | Tipo de dato | Descripción            |
| ----------- | :----------: | :--------------------- |
| **id**      |    `uuid`    | Identificador único    |
| **user**    |   `string`   | Usuario                |
| **message** |   `string`   | Mensaje aviso          |
| **date**    |    `date`    | Fecha                  |
| **read**    |  `boolean`   | Verificar notificación |
| **subject** |   `string`   | Asunto                   |
| **isActive** |   `boolean`   | Validación vigencia    |

### Tag

| Campo         | Tipo de dato | Descripción         |
| ------------- | :----------: | :------------------ |
| **id**        |    `uuid`    | Identificador único |
| **name**      |   `string`   | Nombre del Tag      |
| **isActive**  |  `boolean`   | Validación vigencia |

### Connection

Conexiones al socket de la API

| Campo             | Tipo de dato  | Descripción                            |
| ----------------- | :----------:  | :------------------------------------  |
| **id**            |    `uuid`     | Identificador único                    |
| **client**        |    `uuid`     | Identificador del cliente              |
| **socket**        |  `string`     | Identificador de socket.io             |
| **isConnected**   |   `boolean`   | Validacion de la conexion al Socket    |
| **isActive**      |   `boolean`   | Validación vigencia                    |

## Endpoints

### GET

#### Obtener lista

```
GET /notifications?limit=20&offset=0
Authorization: 'Bearer {token}'
```
::: details Queries disponibles
```
?limit=20                           # 20 es el valor por defecto
?offset=0                           # 0 es el valor por defecto                      
?orderBy= user | subject | date     # [id, ASC] es el valor por defecto
?user={value}                       # Opcional
?subject={value}                    # Opcional
?read=true                          # Opcional
?date[]={value}&date[]=equal | greater | less  # Opcional
```
:::

#### Obtener uno

```
GET /notifications/{uuid}
Authorization: 'Bearer {token}'
```

### POST

```
POST /notifications
Authorization: 'Bearer {token}'
Content-Type: application/json

{
    "user": "uuid",
    "message": "Message",
    "subject": "Subject",
    "date": "date"
}
```

### PUT

```
PUT /notifications/{uuid}
Authorization: 'Bearer {token}'
Content-Type: application/json

{
    "user": "uuid",
    "message": "Message",
    "subject": "Subject",
    "date": "date"
}
```

::: warning Nota
Todos los campos son opcionales, pero es requerido al menos uno
:::

### DELETE

```
DELETE /notifications/{uuid}
Authorization: 'Bearer {token}'
```