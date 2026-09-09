import {createRoot} from "react-dom/client";

import "./style.css";

import Header from "./components/Header";
import Search from "./components/Search";
import EventList from "./components/EventList";
import Footer from "./components/Footer";   
import InfoBox from "./components/InfoBox";
import InteractionCard from "./components/InteractionCard";


const root = createRoot(document.querySelector("#root"));


//Haupt Komponente für das UI
function App() {
    return (
        // Platzhalter für ein Root Element
        // Fragment: gruppiert mehrere JSX Elemente, ohne selbst ein HTML Element im DOM zu erzeugen 

        <>
        <Header />

        <main>
            <div className="container">

                <InteractionCard title={"Ereignisbehandlung"} />

                <Search />

                <InfoBox title="Hinweis">
                    <p> Die Anmeldung ist ab sofort möglich.</p>                    
                   
                </InfoBox>


                <EventList />

                <InfoBox title="Achtung  2 !">
                    <p>Anmeldeschluss ... </p>


                </InfoBox>


            </div>
        </main>
        <Footer />
        </>
    );
}

root.render( <App /> );

