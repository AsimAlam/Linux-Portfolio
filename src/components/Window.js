
import React from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

const WindowHeader = styled.div`
  background: #333;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  cursor: move; /* This area is draggable */
`;

const WindowTitle = styled.span`
  font-weight: bold;
`;

const WindowControls = styled.div`
  button {
    background: #444;
    color: #00FF00;
    border: none;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      background: #555;
    }
  }
`;

const WindowContent = styled.div`
  padding: 10px;
  height: calc(100% - 30px);
  overflow: auto;
`;

const WindowContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #222;
  border: 2px solid #00FF00;
`;

function Window({
  title,
  visible,
  zIndex,
  onMinimize,
  onClose,
  onBringToFront,
  children,
  defaultPosition,
  defaultSize,
}) {
  if (!visible) return null;

  return (
    <Rnd
      default={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        width: defaultSize.width,
        height: defaultSize.height,
      }}
      minWidth={300}
      minHeight={200}
      bounds="parent"
      style={{ zIndex: zIndex, position: "absolute" }}
      dragHandleClassName="window-header"
      onDragStart={onBringToFront}
      onMouseDown={onBringToFront}
    >
      <WindowContainer>
        <WindowHeader className="window-header">
          <WindowTitle>{title}</WindowTitle>
          <WindowControls>
            <button onClick={onMinimize}>_</button>
            <button onClick={onClose}>X</button>
          </WindowControls>
        </WindowHeader>
        <WindowContent>{children}</WindowContent>
      </WindowContainer>
    </Rnd>
  );
}

export default Window;
