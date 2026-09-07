export default function Search() {
    return (
        <form action="#" method="get">
            <label htmlFor="search"></label>
            { /* leere Elemente müssen wie bei XML mit einem /> geschlossen werden */ }
            <input className="form-control" type="search" name="search" id="search" />
            <button type="submit">Finde!!!</button>
        </form>
    );
}