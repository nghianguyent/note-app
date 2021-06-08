import React, { useEffect, useState } from 'react';
import './Editor.css';
import styled from "styled-components";


// component 
const Editor = (props) => {
    // style components
    const Sidebar = styled.div`
        background-color: rgba(255, 255, 255, 0.8); 
        position: fixed;
        height: 90%;
        width: 30%;
        padding: 1rem 1.5rem;
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
        color: black;
    `;    
    const Button = styled.button`
        background-color: transparent;
        border: none;
        font-family: "Open sans", sans-serif;
        padding: 0.5rem 1rem;
        width: 120px;
    `;
    
    const 
    const ListItem = styled.li`
        list-style-type: none;
        padding: 0.5rem;
        margin-bottom: 1rem; 

        h2 {
            font-size: 1.5rem;
        } 
    `;

    return (
        <Sidebar className="editor">
            <Navbar>
                <Title>Note List</Title>
                <Button className="control-button" onClick={props.createNote}>Create</Button>
            </Navbar>
            <NoteList className="note-container">
                {props.listNote.map((note) => 
                <ListItem key={note.id.toString()}>
                    <Title>{note.title}</Title>
                    <p>{note.content}</p>
                    <small>
                        Last modified: {note.lastModified.toLocaleString('en-GB')}
                    </small>
                    <Button className="control-button" onClick={() => props.removeNote(note.id)}>Remove</Button>
                </ListItem>
                )}
            </NoteList>
        </Sidebar>
    );
}

export default Editor;