export default function EventCard(props) {
    return(
        <article className="event-card">
            <h2> { props.title } </h2>
            <p>  { props.date } </p>
            <p> { props.location } </p>
            <p> { props.speaker } </p>
            <p> { props.price } Euro </p>
            <p> { props.online } </p>

            <button>Details</button>
        </article>
    );
}
