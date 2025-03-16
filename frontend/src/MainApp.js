import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Provider, useSelector, useDispatch } from "react-redux";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import FileManager from "./components/FileManager";
import Terminal from "./components/Terminal";
import MakeYourOwn from "./components/MakeYourOwn";
import { store } from "./store";
import { setUserDetails } from "./userSlice";
import Watermark from "./components/Watermark";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #000;
    color: #00FF00;
    font-family: 'Courier New', Courier, monospace;
    user-select: none;
    overflow: hidden;
  }
`;

function AppContent() {
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [windows, setWindows] = useState({
    Resume: { visible: false, zIndex: 10, opened: false },
    About: { visible: false, zIndex: 10, opened: false },
    FileManager: { visible: false, zIndex: 10, opened: true },
    Terminal: { visible: false, zIndex: 10, opened: true },
    MakeYourOwn: { visible: false, zIndex: 10, opened: false },
  });

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);

  const openWindow = (name) => {
    setZIndexCounter((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        visible: true,
        opened: true,
        zIndex: zIndexCounter + 1,
      },
    }));
  };

  const minimizeWindow = (name) => {
    setWindows((prev) => ({
      ...prev,
      [name]: { ...prev[name], visible: false },
    }));
  };

  const closeWindow = (name) => {
    setWindows((prev) => ({
      ...prev,
      [name]: { ...prev[name], visible: false, opened: false },
    }));
  };

  const bringWindowToFront = (name) => {
    setZIndexCounter((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [name]: { ...prev[name], zIndex: zIndexCounter + 1 },
    }));
  };

  const handleMakeYourOwnSubmit = (data) => {
    dispatch(setUserDetails(data));
    closeWindow("MakeYourOwn");
  };

  return (
    <>
      <GlobalStyle />
      <Desktop onOpenWindow={openWindow} />

      <Window
        title="Resume"
        visible={windows.Resume.visible}
        zIndex={windows.Resume.zIndex}
        onMinimize={() => minimizeWindow("Resume")}
        onClose={() => closeWindow("Resume")}
        onBringToFront={() => bringWindowToFront("Resume")}
        defaultPosition={{ x: 100, y: 100 }}
        defaultSize={{ width: 400, height: 300 }}
      >
        {userDetails.resume ? (
          <iframe
            src={userDetails.resume}
            style={{ width: "100%", height: "100%" }}
            title="Resume PDF"
          />
        ) : (
          <p>No resume uploaded.</p>
        )}
      </Window>

      <Window
        title="About"
        visible={windows.About.visible}
        zIndex={windows.About.zIndex}
        onMinimize={() => minimizeWindow("About")}
        onClose={() => closeWindow("About")}
        onBringToFront={() => bringWindowToFront("About")}
        defaultPosition={{ x: 150, y: 150 }}
        defaultSize={{ width: 400, height: 300 }}
      >
        <p>
          <strong>Name:</strong> {userDetails.name || "N/A"}
        </p>
        <p>
          <strong>About:</strong> {userDetails.about || "No details provided."}
        </p>
        <p>
          <strong>Skills:</strong> {userDetails.skills || "N/A"}
        </p>
      </Window>

      <Window
        title="File Manager"
        visible={windows.FileManager.visible}
        zIndex={windows.FileManager.zIndex}
        onMinimize={() => minimizeWindow("FileManager")}
        onClose={() => closeWindow("FileManager")}
        onBringToFront={() => bringWindowToFront("FileManager")}
        defaultPosition={{ x: 200, y: 200 }}
        defaultSize={{ width: 500, height: 400 }}
      >
        <FileManager
          onOpenFile={(fileName) => {
            if (fileName === "Resume.txt") {
              openWindow("Resume");
            } else if (fileName === "About.txt") {
              openWindow("About");
            } else if (fileName === "Terminal.lnk") {
              openWindow("Terminal");
            }
          }}
        />
      </Window>

      <Window
        title="Terminal"
        visible={windows.Terminal.visible}
        zIndex={windows.Terminal.zIndex}
        onMinimize={() => minimizeWindow("Terminal")}
        onClose={() => closeWindow("Terminal")}
        onBringToFront={() => bringWindowToFront("Terminal")}
        defaultPosition={{ x: 250, y: 250 }}
        defaultSize={{ width: 500, height: 400 }}
      >
        <Terminal userDetails={userDetails} />
      </Window>

      <Window
        title="Customize Details"
        visible={windows.MakeYourOwn.visible}
        zIndex={windows.MakeYourOwn.zIndex}
        onMinimize={() => minimizeWindow("MakeYourOwn")}
        onClose={() => closeWindow("MakeYourOwn")}
        onBringToFront={() => bringWindowToFront("MakeYourOwn")}
        defaultPosition={{ x: 300, y: 300 }}
        defaultSize={{ width: 500, height: 400 }}
      >
        <MakeYourOwn onSubmit={handleMakeYourOwnSubmit} />
      </Window>

      <Taskbar windows={windows} onOpenWindow={openWindow} />
      <Watermark />

    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
