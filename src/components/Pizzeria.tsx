export default function Pizzeria() {
    return (
        <div className="inner">
            <div className="title">Pizzéria</div>
            <div className="description">
                Részletek: <br /> - Csoportosítható ételek, ételenként
                beállítható extrák, csomagolási díj és gyerekadag.
                <br />- Kinézet: reszponzív. Mobil méretben "kis" kosár, nagyobb
                méretben részletesebb kosár megjelenítése.
            </div>
            <div className="modules">
                <ul>
                    <li className="typescript">typescript</li>
                    <li className="react">react</li>
                    <li className="react">react redux</li>
                    <li className="react">react router</li>
                    <li className="firebase">firebase database</li>
                    <li className="css">css modules</li>
                </ul>
            </div>

            <div className="links">
                <a
                    href="https://ludas-pizzeria.netlify.app"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Élő verzió
                </a>
                <a
                    href="https://github.com/bipeti/pizzeria"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
