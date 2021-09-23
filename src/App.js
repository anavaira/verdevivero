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

export default App;

//en general retorna otro componente o "etiquetas HTML"
//lo que no puedo hacer es con un solo retorno devolver elementos adyacentes, por regla podés retornar un solo elemento