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
