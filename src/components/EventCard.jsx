export default function EventCard(props) {
    return(
        <article className={`event-card
                ${props.online ? "online" : "onsite" }
                ${props.seats === 0 ? "sold-out" : ""}
                ${props.featured ? "featured" : "" }`}

        >
            <h2> { props.title } </h2>
            <p>  { props.date } </p>
            <p>  { props.time } </p>
            <p>  { props.duration } </p>
            <p> { props.speaker } </p>

            <p> { props.level } </p>
            <p> { props.registr } </p>


            <p> { props.price } Euro </p>
            <p> { props.online ? "Online" : props.location } </p>

            <button disabled={ props.seats === 0} >Details</button>
        </article>
    );
}
