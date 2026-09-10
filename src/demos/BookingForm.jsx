import { useState } from "react";


export default function BookingForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [participants, setParticipants] = useState(1);

    const [course, setCourse] = useState("");

    const [company, setCompany] = useState("");

    const [notes, setNotes] = useState("");

    const [newsletter, setNewsletter] = useState(false);

    const [error, setError] = useState("");
    // const [successMessage, setSuccessMessage] = useState("");

    const [successBooking, setSuccessBooking] = useState(null);



    function handleSubmit(event) {
        event.preventDefault();

        // setSuccessMessage("");
        setSuccessBooking(null);


        if (name.trim().length < 3) {
            setError("Bitte einen Namen mit mindestens 3 Zeichen eingeben!")
            return;
        }

        if (email.trim().length === "") {
            setError("Bitte eine Email Adresse eingeben !")
            return;
        }

        if (participants < 1) {
            setError("Die Teilnmehmerzahl muss mindestens 1 betragen !")
            return;
        }

        if (course === "") {
            setError("Bitte einen Kurs auswählen !")
            return;
        }

        setError("");

        const booking = {
            name,
            email,
            participants,
            course,
            company,
            notes,
            newsletter
        };

        console.log(booking);

        const courseLabels = {

            html: "HTML & CSS",
            javascript: "JavaScript",
            react: "React"

        }

        setSuccessBooking({
            name,
            course: courseLabels[course]
        });

        // setSuccessMessage(`Die Buchung für <b>${name}</b im Kurs <b>${courseLabels}</b> wurde erfasst.`);

        setName("");
        setEmail("");
        setParticipants(1);
        setCourse("");
        setCompany("");
        setNotes("");
        setNewsletter("");

    }

    return (
        <section>
            <h2>Kursbuchung</h2>

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            {
                successBooking &&
                <p className="success-message>">
                    Die Buchung für <strong>{successBooking.name}</strong> im Kurs <strong>{successBooking.course}</strong>
                    wurde erfasst.
                </p>
            }


            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name</label>

                    <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="email">Email-Adresse</label>

                    <input type="text" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="participants">Teilnehmer</label>

                    <input type="text" id="participants" value={participants} onChange={event => Number(setParticipants(event.target.value))} />
                </div>



                <div>
                    <label htmlFor="course">Course Bez</label>

                    <input type="text" id="course" value={course} onChange={event => setCourse(event.target.value)} />
                </div>


                <div>
                    <label htmlFor="company">Company</label>

                    <input type="text" id="company" value={company} onChange={event => setCompany(event.target.value)} />
                </div>


                <div>
                    <label htmlFor="notes">Notes</label>

                    <input type="text" id="notes" value={notes} onChange={event => setNotes(event.target.value)} />
                </div>


                <div>
                    <label>
                        <input type="checkbox" checked={newsletter} onChange={event => setNewsletter(event.target.checked)} />
                        Newsletter abonnieren
                    </label>
                </div>

                <div>
                    <button type="submit">Buchung senden</button>
                </div>


            </form>

        </section>



    )

}