import React from "react";
import styled from "styled-components";

const Toolbar = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #00FF00;
`;

const TH = styled.th`
  text-align: left;
  border-bottom: 1px solid #00FF00;
  padding: 5px;
`;

const TD = styled.td`
  padding: 5px;
  border-bottom: 1px solid #444;
`;

function FileManager({ onOpenFile }) {
    const files = [
        { name: "Resume.txt", date: "2025-03-16", size: "15KB" },
        { name: "About.txt", date: "2025-03-15", size: "10KB" },
        { name: "Terminal.lnk", date: "2025-03-16", size: "1KB" },
    ];

    return (
        <div>
            <Toolbar>
                <button style={{ background: "#444", color: "#00FF00", border: "none", padding: "5px", cursor: "pointer" }}>Back</button>
                <button style={{ background: "#444", color: "#00FF00", border: "none", padding: "5px", cursor: "pointer" }}>Forward</button>
                <button style={{ background: "#444", color: "#00FF00", border: "none", padding: "5px", cursor: "pointer" }}>Up</button>
            </Toolbar>
            <Table>
                <thead>
                    <tr>
                        <TH>Name</TH>
                        <TH>Date</TH>
                        <TH>Size</TH>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, idx) => (
                        <tr key={idx} style={{ cursor: "pointer" }} onDoubleClick={() => onOpenFile(file.name)}>
                            <TD>{file.name}</TD>
                            <TD>{file.date}</TD>
                            <TD>{file.size}</TD>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default FileManager;
