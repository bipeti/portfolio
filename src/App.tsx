import React, { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import Calculator from "./components/Calculator";
import Dictionary from "./components/Dictionary";
import Pizzeria from "./components/Pizzeria";
import Welcome from "./components/Welcome";
import { TRANSITION_TIME } from "./tools/myConsts";
import Portfolio from "./components/Portfolio";

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
        portfolio: <Portfolio />,
    };
    const handleWelcomeButtonClick = () => {
        setShowProject(false);
        setTimeout(() => {
            setSelectedProject(null);
            setShowWelcome(true);
        }, TRANSITION_TIME);
    };

    const handleProjectButtonClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        projectName: string
    ) => {
        event.preventDefault();
        if (selectedProject === projectName) {
            setShowProject(false);
            setTimeout(() => {
                setSelectedProject(null);
                setShowWelcome(true);
            }, TRANSITION_TIME);
        } else {
            setShowWelcome(false);
            setShowProject(false);
            setSelectedProject(projectName);
            setTimeout(() => {
                setSelectedProjectContent(
                    projectContent[projectName as keyof typeof projectContent]
                );
                setShowProject(true);
            }, TRANSITION_TIME);
        }
    };

    return (
        <div className="main">
            <div className="header">
                <img
                    src="bp.png"
                    alt="logo"
                    onClick={handleWelcomeButtonClick}
                />
            </div>
            <div className="content-outer">
                <div className="content">
                    <span className="line-left"></span>
                    <span className="line-top"></span>

                    <CSSTransition
                        in={showWelcome}
                        timeout={300}
                        classNames="welcome"
                        key="welcome"
                        unmountOnExit
                    >
                        <Welcome />
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
                <div className="project-main">
                    <div className="title">Projektek</div>
                    <div className="projects">
                        <a
                            href="https://coolculator.netlify.app/"
                            target="_blank"
                            rel="noreferrer noopener"
                            onClick={(event) =>
                                handleProjectButtonClick(event, "calculator")
                            }
                        >
                            Számológép
                        </a>
                        <a
                            href="https://react-wordbook.netlify.app/"
                            target="_blank"
                            rel="noreferrer noopener"
                            onClick={(event) =>
                                handleProjectButtonClick(event, "dictionary")
                            }
                        >
                            Angol egynyelvű szótár
                        </a>
                        <a
                            href="https://ludas-pizzeria.netlify.app"
                            target="_blank"
                            rel="noreferrer noopener"
                            onClick={(event) =>
                                handleProjectButtonClick(event, "pizzeria")
                            }
                        >
                            Pizzéria
                        </a>
                        <a
                            href="https://bipeter.netlify.app/"
                            target="_blank"
                            rel="noreferrer noopener"
                            onClick={(event) =>
                                handleProjectButtonClick(event, "portfolio")
                            }
                        >
                            Portfólió
                        </a>
                    </div>
                    <span className="line-bottom"></span>
                    <span className="line-right"></span>
                </div>
            </div>
            <div className="footer">
                <a
                    href="mailto:peter.bihari@gmail.com?subject=Mail from bipeter's site"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        src="gmail.png"
                        alt="gmail"
                        // onClick={handleWelcomeButtonClick}
                    />
                </a>

                <a
                    href="https://github.com/bipeti"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        src="github.png"
                        alt="github"
                        // onClick={handleWelcomeButtonClick}
                    />
                </a>
            </div>
        </div>
    );
};

export default App;
