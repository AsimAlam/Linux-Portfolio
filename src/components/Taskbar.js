
import React from "react";
import styled from "styled-components";
import StartMenu from "./StartMenu";

import resumeIcon from "../assets/resume.png";
import aboutIcon from "../assets/about.png";
import fileManagerIcon from "../assets/filemanager.png";
import terminalIcon from "../assets/terminal.png";

const TaskbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #00ff00;
  display: flex;
  align-items: center;
  padding: 0 10px;
  z-index: 100;
`;

const StartButton = styled.button`
  background: #000;
  color: #00ff00;
  border: 2px solid #00ff00;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #111;
  }
`;

const MinimizedButton = styled.button`
  margin-left: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  img {
    width: 24px;
    height: 24px;
    filter: black;
  }
`;

const MakeYourOwnButton = styled.button`
  margin-left: auto;
  background: #000;
  color: #00ff00;
  border: 2px solid #00ff00;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #111;
  }
`;

function Taskbar({ windows, onOpenWindow }) {
    const [showStartMenu, setShowStartMenu] = React.useState(false);

    const windowIcons = {
        Resume: resumeIcon,
        About: aboutIcon,
        FileManager: fileManagerIcon,
        Terminal: terminalIcon,
    };

    return (
        <TaskbarContainer>
            <StartButton onClick={() => setShowStartMenu(!showStartMenu)}>
                Start
            </StartButton>
            {showStartMenu && (
                <StartMenu
                    onSelect={(name) => {
                        onOpenWindow(name);
                        setShowStartMenu(false);
                    }}
                />
            )}
            {Object.keys(windows).map((win) => {
                if (win === "Terminal" || win === "FileManager" || windows[win].opened) {
                    return (
                        <MinimizedButton key={win} onClick={() => onOpenWindow(win)}>
                            <img src={windowIcons[win]} alt={win} />
                        </MinimizedButton>
                    );
                }
                return null;
            })}
            <MakeYourOwnButton>MAKE YOUR OWN</MakeYourOwnButton>
        </TaskbarContainer>
    );
}

export default Taskbar;
