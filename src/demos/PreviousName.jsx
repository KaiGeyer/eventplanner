import { useState, useEffect, useRef } from "react";

export default function PreviousName() {
    const [count, setCount] =
        useState(0);

    const previousNameRef =
        useRef(count);

    useEffect(() => {
        previousNameRef.current = count;
    }, [count]);

    return (
        <section>
            <h2>Vorheriger Wert</h2>

            <h2>vorgeriger Name </h2>

            <p>
                Aktuell: {count}
            </p>

            <p>
                Vorher: {previousNameRef.current}
            </p>

            <button
                type="button"
                onClick={() =>
                    setCount(count + 1)
                }
            >
                +1
            </button>
        </section>
    );
}