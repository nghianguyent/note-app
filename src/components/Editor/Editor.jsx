import React, { } from 'react';
import './Editor.css';
import styled from "styled-components";

// style components
const Sidebar = styled.div`
    background-color: #454545; 
    color: white;
    height: 90%;
    width: 30%;
    padding: 1rem 1.5rem;
    margin-right: 1rem;
    overflow-y: auto;
`;
const Navbar = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;

    ::before {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: black;
        bottom: 0;
        left: 0;
    }
`;
const NoteList = styled.ul`

`;
const Title  = styled.h2`
    font-family: "Open sans", sans-serif;
    font-size: 2.3rem;
    font-weight: 700;
    width: 80%;
    color: white;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;    
const Button = styled.button`
    background-color: transparent;
    border: none;
    font-family: "Open sans", sans-serif;
    font-weight: 700;
    color: #59B3F7;
    padding: 0.5rem 1rem;
    width: 100px;
    height: 40px;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
        transform: translate(-5px);
    }
`;

const ListItem = styled.li`
    position: relative;
    list-style-type: none;
    padding: 0.5rem;
    margin-bottom: 1rem; 
    border: 2px solid white;
    cursor: pointer;
    width: 100%;

    &.active {
        background-color: #a19b9a;
    }
    & * {
        margin-bottom: 0.2rem;
    }
    h2 {
        font-size: 1.5rem;
    } 
    p {    
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const RemoveButton = styled(Button)`
    position: absolute;
    color: #e62525;
    top: 0;
    right: 0;
    z-index: 10;
`;

// render components 
const Editor = (props) => {

    return (
        <Sidebar className="editor">
            <Navbar>
                <Title>Note List</Title>
                <Button className="control-button" onClick={props.createNote}>Create</Button>
            </Navbar>
            <NoteList className="note-container">
                {props.listNote.map((note) => 
                <ListItem className={note.id === props.activeNote ? 'active' : ''}key={note.id.toString()} onClick={() => props.setActiveNote(note.id)}>
                    <Title>{note.title}</Title>
                    <p>{note.content}</p>
                    <small>
                        Last modified: {note.lastModified.toLocaleString('en-GB')}
                    </small>
                    <RemoveButton className="control-button" onClick={() => props.removeNote(note.id)}>Remove</RemoveButton>
                </ListItem>
                )}
            </NoteList>
        </Sidebar>
    );
}

export default Editor;