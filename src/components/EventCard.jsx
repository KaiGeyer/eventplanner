export default function EventCard ({
    title,
    date,
    time,
    duration,
    location,
    speaker,
    level,
    registr,
    price,
    online,
    seats,
    featured
}) {

    return(
        <article className={`event-card
                ${online ? "online" : "onsite" }
                ${seats === 0 ? "sold-out" : ""}
                ${featured ? "featured" : "" }`}

        >
            <h2> { title } </h2>
            <p>  { date } </p>
            <p>  { time } </p>
            <p>  { duration } </p>
            <p> { speaker } </p>

            <p> { level } </p>
            <p> { registr } </p>


            <p> { price } Euro </p>
            <p> { online ? "Online" : location } </p>

            <button disabled={ seats === 0} >Details</button>

        </article>
    );
}
