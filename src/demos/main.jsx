import { createRoot } from "react-dom/client";
import NameEffect from "./NameEffect";


function DemoApp() {
    return (
        <>
            <NameEffect />


        </>
    );
}

const root = createRoot(
    document.querySelector("#root")
);

root.render(<DemoApp />);