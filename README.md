<p align="center">

  <img width="250" height="100" src="https://user-images.githubusercontent.com/42705449/225102679-39aea16d-3246-4718-a98c-cd09d6519046.png" alt="GifHub">
</p>

Buscador de gifs, desarrollado en Angular

## Demostración

Ingresar una palabra o frase de los gifs que se desean buscar.

<p align="center">
  <img width="750" height="400" src="https://user-images.githubusercontent.com/42705449/225103060-622205b9-7a2a-4a79-acfe-c95e93d26edd.png" alt="Principal">
</p>

Los resultados se mostrarán en el panel central y el historial de búsqueda irá apareciendo en el panel izquierdo.

<p align="center">
  <img width="750" height="400" src="https://user-images.githubusercontent.com/42705449/225103380-7dc52659-69bf-4f55-adeb-8e1f6222fdf1.png" alt="Resultado">
</p>

## Giphy

Crear una cuenta en Giphy y obtener un [API KEY](https://developers.giphy.com/dashboard/) para poder utilizar su API.

## Instalación

1. Clonar repositorio

```
git clone https://github.com/larh1/angular_gifs.git
```

2. Mover al directorio creado

```
cd  angular_gifs
```

3. Instalar dependencias

```
npm install
```

4. Cambiar la API KEY en los enviroments

```javascript
// src/environments/environment.ts;

export const environment = {
  production: false,
  api_key: API_KEY,
};
```

5. Compilar archivos y lanzar servidor

```
ng serve -o
```

## Tecnologías usadas

- Bootstrap: (https://getbootstrap.com/)
- Giphy: (https://developers.giphy.com/)
- Iconos: FontAwesome (https://fontawesome.com/)
- UI: Angular (https://angular.io/)
