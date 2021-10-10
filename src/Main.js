import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import ItemDetail from "./components/container/ItemDetail";

const Main = () => {
    return ( 
        <main>
            <h2>Home</h2>
            <ItemListContainer 
                grettings="Bienvenide a nuestra tienda on-line"
            />
            <ItemDetailContainer />
        </main>
     );
}
 
export default Main;