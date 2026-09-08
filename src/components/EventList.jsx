import EventCard from "./EventCard";

import events from "../data/events.js";


export default function EventList() {
    return(
        <section className="event-list">
            { events.map( event => (
                <EventCard
                    key={event.id}
                    {...event}
                /> 

            ))}

        </section>
    );

}
