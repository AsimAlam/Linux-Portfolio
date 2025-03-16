import React from "react";
import styled from "styled-components";

const WatermarkContainer = styled.div`
  position: fixed;
  bottom: 50px;  /* 50px from bottom to avoid overlapping taskbar */
  right: 10px;
  font-size: 12px;
  color: rgba(0, 255, 0, 0.3); /* semi-transparent green */
  user-select: none;
  z-index: 1000;
  pointer-events: none; /* disable pointer events for container */
`;

const WatermarkLink = styled.a`
  color: inherit;
  text-decoration: none;
  pointer-events: auto; /* allow clicking on the link */
  &:hover {
    text-decoration: underline;
  }
`;

function Watermark() {
    return (
        <WatermarkContainer>
            Created by{" "}
            <WatermarkLink
                href="https://www.linkedin.com/in/asim-alam-b820b7205/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Asim Alam
            </WatermarkLink>{" "}
            © 2025
        </WatermarkContainer>
    );
}

export default Watermark;
