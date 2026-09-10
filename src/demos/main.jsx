import { createRoot } from "react-dom/client";

function DemoApp() {
    return (
        <>

        </>
    );
}

const root = createRoot(
    document.querySelector("#root")
);

root.render(<DemoApp />);