import { createRoot } from "react-dom/client";
import PreviousName from "./PreviousName.jsx";


function DemoApp() {
    return (
        <>
            <PreviousName />
        </>
    );
}

const root = createRoot(
    document.querySelector("#root")
);

root.render(<DemoApp />);

