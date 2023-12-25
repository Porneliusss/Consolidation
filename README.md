# Consolidation
---

Склонировать репозиторий 

```
https://github.com/Porneliusss/Consolidation
```

Установить зависимости для сервера

```
cd server

npm i
```

Установить зависимости для клиента

```
cd ..\client

npm i
```

***Нужно заранее создать БД в postgres (создать новую пустую базу)*** 

Дальше в папке сервера изменить файл .env:

```
PORT = 5000
DB_NAME = "Название БД в postgres" 
DB_USER = postgres
DB_PASSWORD = "Пароль от postgres" 
DB_HOST = localhost
DB_PORT = 5432
SECRET_KEY = random_key_123 
```

Запусить сервер

```
cd ..\server

npm run dev
```

Перейти в папку клиент и запустить клиент

```
cd ..\client

npm start
```

