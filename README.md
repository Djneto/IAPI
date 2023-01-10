yarn init -y
yarn add express
yarn add @types/express
yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev -D

package.json
"scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  }

tsconfig.json
//"strict"

Docker commands
docker build -t name .
docker ps
docker run -p 3333:3333 name

docker-compose up
docker-compose up -d
docker stop name

docker logs name -f

acesso
docker exec it -it container_name /bin/bash