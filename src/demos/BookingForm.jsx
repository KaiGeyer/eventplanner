import { useState } from "react";


export default function BookingForm() {

    const [formData, setFormData] = useState({
        name: "",
        telephone: "",
        email: "",
        participants: 1,
        course: "",
        company: "",
        notes: "",
        newsletter: false
    });

    const [error, setError] = useState("");

    const [successBooking, setSuccessBooking] = useState(null);


    function handleChange(event) {
        const {
            name,
            value,
            type,
            checked
        } = event.target;

        let newValue = value;

        if (type === "checkbox") {
            newValue = checked;
        }

        if (type === "number") {
            newValue = Number(value);
        }

        setFormData({
            ...formData,
            [name]: newValue

        });
    }


    function handleSubmit(event) {
        event.preventDefault();

        // setSuccessMessage("");
        setSuccessBooking(null);


        if (formData.name.trim().length < 3) {
            setError("Bitte einen Namen mit mindestens 3 Zeichen eingeben!")
            return;
        }

        if (formData.telephone.trim().length < 10) {
            setError("Bitte Telephone mit mindestens 10 Zeichen eingeben!")
            return;
        }

        if (formData.email.trim() === "") {
            setError("Bitte eine Email Adresse eingeben !")
            return;
        }

        if (formData.participants < 1) {
            setError("Die Teilnmehmerzahl muss mindestens 1 betragen !")
            return;
        }

        if (formData.course === "") {
            setError("Bitte einen Kurs auswählen !")
            return;
        }

        setError("");

        console.log(formData);

        const courseLabels = {

            html: "HTML & CSS",
            javascript: "JavaScript",
            react: "React"

        }

        setSuccessBooking({
            name: formData.name,
            course: courseLabels[formData.course],
        });

        // setSuccessMessage(`Die Buchung für <b>${name}</b im Kurs <b>${courseLabels}</b> wurde erfasst.`);

        setFormData({
            name: "",
            telephone: "",
            email: "",
            participants: 1,
            course: "",
            company: "",
            notes: "",
            newsletter: false
        });

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

                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="telephone">Telephone</label>

                    <input type="text" name="telephone" id="telephone" value={formData.telephone} onChange={handleChange} />
                </div>




                <div>
                    <label htmlFor="email">Email-Adresse</label>

                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="participants">Teilnehmer</label>

                    <input type="text" id="participants" name="participants" value={formData.participants} onChange={handleChange} />
                </div>



                <div>
                    <label htmlFor="course">Course Bez</label>

                    <input type="text" name="text" id="course" value={formData.course} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="company">Company</label>

                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="notes">Notes</label>

                    <input type="text" id="notes" name="notes" value={formData.notes} onChange={handleChange} />
                </div>


                <div>
                    <label>
                        <input type="checkbox" name="checkbox" checked={formData.newsletter} onChange={handleChange} />
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