export default function Dictionary() {
    return (
        <div className="inner">
            <div className="title">Angol egynyelvű szótár</div>
            <div className="description">
                Részletek:
                <br /> - Hangfájl lejátszása azoknál a szavaknál, ahol elérhető.
                <br /> - Kinézet: betűtípus és sötét-világos háttér váltásának
                lehetősége.
            </div>{" "}
            <div className="modules">
                <ul>
                    <li className="typescript">typescript</li>
                    <li className="react">react</li>
                    <li className="react">react-context</li>
                    <li className="fetch">fetch api</li>
                </ul>
            </div>
            <div className="links">
                <a
                    href="https://react-wordbook.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Élő verzió
                </a>
                <a
                    href="https://github.com/bipeti/dictionary"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
