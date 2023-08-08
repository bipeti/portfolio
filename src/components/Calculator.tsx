import background from "../images/calculator.png";

export default function Calculator() {
    return (
        <div className="inner">
            <div
                className="front"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p>Számológép</p>
            </div>
            <div className="back">
                Néhány "plusz" a szokásos első számológép appokhoz képest:
                <br /> - betűméret csökkentése 9 számjegy fölött a kilógás
                megelőzése érdekében,
                <br /> - begépelt szám javításának lehetősége,
                <br /> - használható billentyűzettel és egérrel is, illetve
                <br /> - a JS aritmetikai hibák helyett a helyes eredményt
                jeleníti meg. Pl.: 0.1+0.2= 0.3, nem pedig 0.30000000000000004.
            </div>
        </div>
    );
}
