# GifExpert App

Esta aplicación fue hecha con React, consta en buscar imágenes de algún tema en particular.
Para esto se usó la API de 
[GIPHY Developers](https://developers.giphy.com/).

## ¿Cómo empezar?

Una vez se haya descargado el proyecto se deben instalar todas las dependencias utilizadas.

### ¿Cómo instalar las dependencias?

Ejecutando npm

```
npm install // npm i
```

Ejecutando yarn

```
yarn
```

### Ejecutar el proyecto

El proyecto correrá por defecto en el http://localhost:3000. Para eso se debe ejecutar alguno de los siguientes comandos:

Ejecutando npm

```
npm run start
```

Ejecutando yarn

```
yarn start
```

## Testing App

En el directorio *test*, el cual se encuentra dentro de la carpeta *src*, encontrará los test realizados. Para esta App se realizaron los siguientes test:

* Todos los compenentes de la App
* El helper creado para hacer el llamada a la API [GIPHY Developers](https://developers.giphy.com/).
* Custom hook
* Aplicación completa

Para correr los tests debe ejecutar el siguiente comando:

Ejecutando npm

```
npm run test
```

Ejecutando yarn

```
yarn test
```

**Importante:**
Notese que encontrara un direcotorio con el nombre de *_snapshots_*, el cual incluye un fotografía del HTML creado con el componente. Si modifíca el componente, debe actualizar el snapshot del mismo para que puede pasar la prueba.

## Demo

[Demo](https://alejor64.github.io/gifExpertApp/)

## Autor

* **Alejandro Ruiz Sánchez** - *Initial Works* - [alejor64](github.com/alejor64)

## Licencia

This project is licensed under the MIT License