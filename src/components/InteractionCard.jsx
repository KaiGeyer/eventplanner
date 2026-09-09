export default function InteractionCard({ title }) {

    function handleChange(event) {
        console.log("Eingabe: ", event.target.value);
    }

    function handleClick() {
        console.log("Button geklickt");

    }

    function handleMouseEnter() {
        console.log("Mouse Enter");
    }

    function handleMouseLeave() {
        console.log("Mouse leave");
    }


    return (
        <article
            className="interaction-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2>{ title } </h2>

            <input 
            type="text"
            onChange={handleChange}
            />

            <button onClick= {handleClick}>
                Aktion
            </button>

            <button onClick= {handleClick}>
                Aktion_2
            </button>



        </article>



    );



}