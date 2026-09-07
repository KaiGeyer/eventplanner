import EventCard from "./EventCard";

export default function EventList() {
    return(
        <section>
            <EventCard
            title="React Grundlagen"
            date="12.September 2026"
            location="Raum 1"
            speaker="Anna Müller"
            price= { 129 }
            online= { false }
            />

            <EventCard
            title="JavaScript Workshop"
            date="19. September 2026"
            location="Raum 2"
            speaker="Robert Rabe"
            price= { 149 }
            online= { true }
            />

            <EventCard
            title="CSS Styling"
            date="26. September 2026"
            location="Raum 3"
            speaker="Klausbern Kummer"
            price= { 177 }
            online= { true }            
            />

        </section>

    )


}
