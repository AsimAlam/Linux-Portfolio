
import React from "react";
import styled from "styled-components";
import resumeIcon from "../assets/resume.png";
import aboutIcon from "../assets/about.png";
import fileManagerIcon from "../assets/filemanager.png";
import terminalIcon from "../assets/terminal.png";

const MenuContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  background: #222;
  border: 2px solid #00ff00;
  padding: 10px;
  z-index: 101;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  cursor: pointer;
  margin: 5px 0;
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    filter: brightness(0) saturate(100%) invert(48%) sepia(100%) saturate(500%) hue-rotate(80deg) brightness(100%) contrast(90%);
  }
`;

function StartMenu({ onSelect }) {
    const windowIcons = {
        Resume: resumeIcon,
        About: aboutIcon,
        FileManager: fileManagerIcon,
        Terminal: terminalIcon,
    };

    return (
        <MenuContainer>
            <MenuList>
                {Object.keys(windowIcons).map((win) => (
                    <MenuItem key={win} onClick={() => onSelect(win)}>
                        <img src={windowIcons[win]} alt={win} />
                        <span>{win}</span>
                    </MenuItem>
                ))}
            </MenuList>
        </MenuContainer>
    );
}

export default StartMenu;
