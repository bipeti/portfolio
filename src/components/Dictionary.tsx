import background from "../images/dictionary.png";

export default function Dictionary() {
    return (
        <div className="inner">
            <div
                className="front"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p>Angol egynyelvű szótár alkalmazás</p>
            </div>
            <div className="back">
                Részletek:
                <br /> - Hangfájl lejátszása azoknál a szavaknál, ahol elérhető.
                <br /> - Kinézet: betűtípus és sötét-világos háttér váltásának
                lehetősége.
            </div>
        </div>
    );
}
