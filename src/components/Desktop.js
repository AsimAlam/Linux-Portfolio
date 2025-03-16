
import React from "react";
import styled from "styled-components";
import Xarrow, { Xwrapper } from "react-xarrows";

import terminalIcon from "../assets/terminal.png";
import fileManagerIcon from "../assets/filemanager.png";

import profileImage from "../assets/profilePic.png";

const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #000;
  overflow: hidden;
`;

const DesktopIconsContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DesktopIcon = styled.div`
  width: 60px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const IconImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(48%) sepia(100%)
    saturate(500%) hue-rotate(80deg) brightness(100%) contrast(90%);
`;

const ProfileContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #00ff00;
  }
`;

const InfoBox = styled.div`
  position: absolute;
  width: 220px;
  padding: 10px;
  border: 2px solid #00ff00;
  background: transparent;
  font-size: 14px;
  text-align: left;
  z-index: 1;
  h3 {
    margin-top: 0;
  }
  p {
    margin: 6px 0;
  }
`;

const ResponsiveWrapper = styled.div`
  @media (max-width: 768px) {
    .desktop-line {
      display: none;
    }
    #aboutBox,
    #detailsBox {
      top: auto !important;
      left: 50% !important;
      transform: translateX(-50%);
      width: 80% !important;
      margin-top: 10px;
    }
  }
`;

function Desktop({ onOpenWindow }) {
    return (
        <DesktopContainer>
            <DesktopIconsContainer>
                <DesktopIcon onDoubleClick={() => onOpenWindow("FileManager")}>
                    <IconImage src={fileManagerIcon} alt="File Manager" />
                    <div style={{ fontSize: "12px", marginTop: "5px" }}>
                        File Manager
                    </div>
                </DesktopIcon>
                <DesktopIcon onDoubleClick={() => onOpenWindow("Terminal")}>
                    <IconImage src={terminalIcon} alt="Terminal" />
                    <div style={{ fontSize: "12px", marginTop: "5px" }}>Terminal</div>
                </DesktopIcon>
            </DesktopIconsContainer>

            <Xwrapper>
                <ResponsiveWrapper>
                    <ProfileContainer id="profile">
                        <img src={profileImage} alt="Profile" />
                    </ProfileContainer>

                    <InfoBox
                        id="aboutBox"
                        style={{
                            top: "calc(50% - 200px)",
                            left: "calc(50% - 310px)",
                        }}
                    >
                        <h3>About :</h3>
                        <p>
                            I am co-founder of codegrills, a content creator, and a bug hunter.
                        </p>
                    </InfoBox>

                    <InfoBox
                        id="detailsBox"
                        style={{
                            top: "calc(50% - 200px)",
                            left: "calc(50% + 110px)",
                        }}
                    >
                        <h3>Full Name: Anonymous Hacker</h3>
                        <p>Profession: Bug Hunter</p>
                        <p>Location: 127.0.0.1</p>
                        <p>Socials: IG / Twitter / LinkedIn / Web</p>
                    </InfoBox>

                    <Xarrow
                        start="profile"
                        end="aboutBox"
                        color="#00ff00"
                        strokeWidth={2}
                        headSize={0}
                        className="desktop-line"
                    />
                    <Xarrow
                        start="profile"
                        end="detailsBox"
                        color="#00ff00"
                        strokeWidth={2}
                        headSize={0}
                        className="desktop-line"
                    />
                </ResponsiveWrapper>
            </Xwrapper>
        </DesktopContainer>
    );
}

export default Desktop;
