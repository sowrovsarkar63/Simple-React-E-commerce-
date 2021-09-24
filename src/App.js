import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";

function App() {
    return (
        <>
            <header className="app-header">
                <Header></Header>
                <Shop></Shop>
            </header>
        </>
    );
}

export default App;
