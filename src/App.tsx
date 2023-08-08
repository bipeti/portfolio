import React, { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import Calculator from "./components/Calculator";
import Dictionary from "./components/Dictionary";
import Pizzeria from "./components/Pizzeria";

const App: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [showProject, setShowProject] = useState(false);

    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [selectedProjectContent, setSelectedProjectContent] =
        useState<JSX.Element | null>(null);

    const projectContent = {
        calculator: <Calculator />,
        dictionary: <Dictionary />,
        pizzeria: <Pizzeria />,
    };
    const handleWelcomeButtonClick = () => {
        setShowProject(false);
        setTimeout(() => {
            setSelectedProject(null);
            setShowWelcome(true);
        }, 300);
    };

    const handleProjectButtonClick = (projectName: string) => {
        if (selectedProject === projectName) {
            setShowProject(false);
            setTimeout(() => {
                setSelectedProject(null);
                setShowWelcome(true);
            }, 300);
        } else {
            setShowWelcome(false);
            setShowProject(false);
            setSelectedProject(projectName);
            setTimeout(() => {
                setSelectedProjectContent(
                    projectContent[projectName as keyof typeof projectContent]
                );
                setShowProject(true);
            }, 300);
        }
    };

    return (
        <div className="background">
            <div className="content">
                <CSSTransition
                    in={showWelcome}
                    timeout={300}
                    classNames="welcome"
                    key="welcome"
                    unmountOnExit
                >
                    <div>
                        Bihari Péter vagyok, frontend fejlesztő. <br />
                        Gyerekkorom óta foglalkozom programozással. Korábbi
                        tapasztalataim: Delphi, Interbase, PHP, MySQL. <br />
                        Aktuálisan az alábbi nyelvekben vagyok naprakész:
                        Javascript, Typescript, React. Ezekben a nyelvekben
                        készültek az itt elérhető munkáim.
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={showProject}
                    timeout={300}
                    classNames="project"
                    key="project"
                    unmountOnExit
                >
                    <div>{selectedProjectContent}</div>
                </CSSTransition>
            </div>
            <div className="buttons">
                <button onClick={handleWelcomeButtonClick}>Welcome</button>
                <button onClick={() => handleProjectButtonClick("calculator")}>
                    Számológép
                </button>
                <button onClick={() => handleProjectButtonClick("dictionary")}>
                    Szótár
                </button>
                <button onClick={() => handleProjectButtonClick("pizzeria")}>
                    Pizzéria
                </button>
            </div>
        </div>
    );
};

export default App;
