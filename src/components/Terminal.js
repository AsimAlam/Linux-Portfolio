
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const TerminalContainer = styled.div`
  background: #000;
  color: #00FF00;
  height: 90%;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
  white-space: pre-wrap; /* Wrap long lines */
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
`;

const Prompt = styled.span`
  margin-right: 5px;
`;

const InputField = styled.input`
  flex: 1;
  background: transparent;
  color: #00ff00;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
`;

function Terminal() {
    const [lines, setLines] = useState([
        "Welcome to Terminal! Type 'help' for available commands.",
    ]);
    const [inputValue, setInputValue] = useState("");
    const terminalRef = useRef(null);

    const handleCommand = (command) => {
        let newLines = [...lines, `root@kali:~# ${command}`];
        const lowerCmd = command.trim().toLowerCase();
        switch (lowerCmd) {
            case "help":
                newLines.push("Available commands:");
                newLines.push("- about: Display information about me");
                newLines.push("- projects: List my projects");
                newLines.push("- skills: Show my technical skills");
                newLines.push("- contact: Display contact information");
                newLines.push("- clear: Clear terminal history");
                break;
            case "about":
                newLines.push("I am co-founder of codegrills, a content creator, and a bug hunter.");
                break;
            case "projects":
                newLines.push("1) Project Alpha");
                newLines.push("2) Project Beta");
                newLines.push("3) Project Gamma");
                break;
            case "skills":
                newLines.push("JavaScript, React, Node.js, Ethical Hacking, etc.");
                break;
            case "contact":
                newLines.push("Email: example@example.com | Twitter: @example");
                break;
            case "clear":
                newLines = [];
                break;
            case "":
                break;
            default:
                newLines.push(`Command not found: ${command}`);
                break;
        }
        setLines(newLines);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleCommand(inputValue);
            setInputValue("");
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <TerminalContainer ref={terminalRef}>
            {lines.map((line, idx) => (
                <div key={idx}>{line}</div>
            ))}
            <CommandLine>
                <Prompt>root@kali:~#</Prompt>
                <InputField
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            </CommandLine>
        </TerminalContainer>
    );
}

export default Terminal;
