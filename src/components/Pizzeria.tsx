import background from "../images/pizzeria.png";

export default function Pizzeria() {
    return (
        <div className="inner">
            <div
                className="front"
                style={{ backgroundImage: `url(${background})` }}
            >
                <p>Pizzéria weboldal</p>
            </div>
            <div className="back">
                Részletek: <br /> - Csoportosítható ételek, ételenként
                beállítható extrák, csomagolási díj és gyerekadag.
                <br />- Kinézet: reszponzív. Mobil méretben "kis" kosár, nagyobb
                méretben részletesebb kosár megjelenítése.
            </div>
        </div>
    );
}
