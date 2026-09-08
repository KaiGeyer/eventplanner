import EventCard from "./EventCard";

const events = [
    {
    id: 1,
    title: "React Grundlagen",
    date: "12.September 2026",
    location: "Raum 1",
    speaker: "Anna Müller",
    price: 129,
    online: false,
    },
{
    id:2,
    title: "JavaScript Workshop",
    date: "19. September 2026",
    location: "Raum 2",
    speaker: "Robert Rabe",
    price: 149,
    online: true,
},
{
    id:3,
    title: "CSS Styling",
    date: "26. September 2026",
    location: "Raum 3",
    speaker: "Klausbern Kummer",
    price: 177,
    online: true, 
}    


]

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
