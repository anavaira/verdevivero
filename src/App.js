import NavBar from "./components/NavBar";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
    return (
        <>
            <NavBar />
            <Main />
            <Footer />            
        </>
    )
};

// 1. instalar react-router-dom
//     npm install react-router-dom
// 2. Configurar el router
// 3. Configuerar los links en la NavBar
// 4. Agregar botones para ver el detalle de los items
// 5. En el ItemDetail usar useParams()

export default App;

//en general retorna otro componente o "etiquetas HTML"
//lo que no puedo hacer es con un solo retorno devolver elementos adyacentes, por regla podés retornar un solo elemento