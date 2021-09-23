// 1) Me traigo la libreria React 
import React from 'react'; //ESQUELETO. si fuera un solo archivo seria "./react" pero como es una libreria va sin nada y React es una variable. la forma vieja es const React = require('react')
// 2) Me traigo la libreria ReactDOM
import ReactDOM from 'react-dom'; //inyecta el ESQUELETO en el DOM
// 3) Genero un componente (para esto necesitas react) Cada componente va en un archivo distinto que luego se importa. Para que se pueda importar, hay que exportarlo.
// Entonces no genero en este archivo, importo.
import App from './App';

// 4) Renderizo el componente (para esto necesitas reactDom)
ReactDOM.render(
    <App />,
    document.getElementById("root")
    ) // se le pasan dos parametros a y b. el parametro b tiene que se un nodo del DOM, el lugar donde vos querés que se muestre tu aplicación. nunca tiene que ser el body, aunque sea tiene que haber un div metido. y el primer parametro va a ser nuestro componente.

//todo esto se ejecuta solo una vez al ppio y luego react se va actualizando (?) aparece solo de index.js