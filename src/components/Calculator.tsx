export default function Calculator() {
    return (
        <div className="inner">
            <div className="title">Számológép</div>
            <div className="description">
                Néhány plusz a szokásos első számológép appokhoz képest:
                <br /> - ezres tagolás,
                <br /> - betűméret csökkentése 9 számjegy fölött a kilógás
                megelőzése érdekében,
                <br /> - begépelt szám javításának lehetősége,
                <br /> - használható billentyűzettel és egérrel is, illetve
                <br /> - a JS aritmetikai hibák helyett a helyes eredményt
                jeleníti meg. Pl.: 0.1+0.2= 0.3, nem pedig 0.30000000000000004.
            </div>
            <div className="modules">
                <ul>
                    <li className="javascript">javascript</li>
                    <li className="react">react</li>
                    <li className="css">css modules</li>
                </ul>
            </div>
            <div className="links">
                <a
                    href="https://coolculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Élő verzió
                </a>
                <a
                    href="https://github.com/bipeti/calculator"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
