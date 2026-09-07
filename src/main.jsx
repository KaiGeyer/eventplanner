import {createRoot} from "react-dom/client";

import Header from "./components/Header";
import Search from "./components/Search";
import EventList from "./components/EventList";
import Footer from "./components/Footer";   

const root = createRoot(document.querySelector("#root"));


//Haupt Komponente für das UI
function App() {
    return (
        // Platzhalter für ein Root Element
        // Fragment: gruppiert mehrere JSX Elemente, ohne selbst ein HTML Element im DOM zu erzeugen 

        <>
        <Header />

        <main>
            <Search />
            <EventList />
        </main>
        <Footer />
        </>
    );
}

root.render( <App /> );

