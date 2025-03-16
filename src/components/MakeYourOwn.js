// src/components/MakeYourOwn.js
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 20px;
  color: #00ff00;
  background: #222;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background: #333;
  color: #00ff00;
  border: 1px solid #00ff00;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  background: #333;
  color: #00ff00;
  border: 1px solid #00ff00;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background: #000;
  color: #00ff00;
  border: 2px solid #00ff00;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #111;
  }
`;

function MakeYourOwn({ onSubmit }) {
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [resume, setResume] = useState(null);

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass form data to parent via onSubmit callback.
        onSubmit({ name, about, skills, resume });
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>About:</Label>
                    <TextArea
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Write something about yourself"
                        rows="4"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Skills:</Label>
                    <Input
                        type="text"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="Enter your skills (comma separated)"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Upload Resume (PDF):</Label>
                    <Input type="file" accept="application/pdf" onChange={handleFileChange} />
                </FormGroup>
                <SubmitButton type="submit">Submit</SubmitButton>
            </form>
        </FormContainer>
    );
}

export default MakeYourOwn;
