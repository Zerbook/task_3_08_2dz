## docker build -t notes_app .     // создание образа в docker

## docker run notes_app     // запускаем контейнер notes_app

## docker run -p 3002:3000 -d notes_app

## docker run -p 80:3000 notes_app




docker build -t backend_app .

docker run -p 3001:3001 -d backend_app