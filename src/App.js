import NavBar from "./components/NavBar";
import Main from "./Main";
import Footer from "./Footer";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import { BrowserRouter,Route,Switch } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            {/* <Main /> */}
            < >
                <Switch>
                    <Route path="/" component={Main}/>
                    <Route path="/products" component={ItemListContainer}/>
                    <Route path="/products/:id" component={ItemDetailContainer}/>
                </Switch>
            </>
            <Footer />            
        </BrowserRouter>
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