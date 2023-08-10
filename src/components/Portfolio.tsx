export default function Portfolio() {
    return (
        <div className="inner">
            <div className="title">Portfólió oldal</div>
            <div className="description">
                Az éppen megtekintett weboldal.
                <br />
                Részletek:
                <br /> - Kinézet: reszponzív megjelenítés, minimalista
                webdesign.
            </div>
            <div className="modules">
                <ul>
                    <li className="typescript">typescript</li>
                    <li className="react">react</li>
                    <li className="react">react-transition-group</li>
                    <li className="css">css modules</li>
                </ul>
            </div>
            <div className="links">
                <a
                    href="https://github.com/bipeti/portfolio"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
