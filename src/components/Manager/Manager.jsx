import React from 'react';
import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';
// styled components
const Editor = styled.div`
    position: relative;
    background-color: #454545; 
    width: 70%;
    height: 90%;
    padding: 2rem;
`;
const Title  = styled.h2`
    font-family: "Open sans", sans-serif;
    font-size: 2.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
`;    
const InputForm = styled.div`
    position: relative;
    width: 100%;
    height: 90%;
`;
const Button = styled.button`
    position: absolute;
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
    bottom: 2rem;
    right: 2rem;
    &:hover {
        transform: translate(-5px);
    }
`;
const InputStyle = css`
    font-family: "Open sans", sans-serif;
    font-size: 1.3rem;
    width: 100%;
    height: 40px;
    padding: 0.5rem 1rem;
    border: none;
    margin-bottom: 1rem;
    outline: none;

    &:focus,
    &:hover,
    &:active {
        border: 2px solid cyan;
    }
`;
const InputTitle = styled.input`
    ${InputStyle}

    font-weight: bold;
`;
const InputMessage = styled.textarea`
    ${InputStyle}
    font-size: 1rem;
    height: 70%;
    resize: none;

`;
const Reviews = styled.div`
    
`;
const EditMode = (props) => {
    return (
        <InputForm>
            <InputTitle 
                type="text" 
                value={props.note.title} 
                onChange={(e) => props.onEditField('title', e.target.value,props.note)}
                placeholder="Title" />
            <InputMessage 
                value={props.note.content} 
                onChange={(e) => props.onEditField('content', e.target.value, props.note)}
                placeholder="Write your note here..."   />  
            <small>{props.note.lastModified.toLocaleString()}</small>
        </InputForm>
    );
};
const ReviewMode = (props) => {
    return (
        <Reviews>
            <Title>{props.note.title}</Title>
            <ReactMarkdown>{props.note.content}</ReactMarkdown>
        </Reviews>      
    );
};
// render components
const Manager = (props) => {
    
    if (!props.note) return <div>Nothing to do</div>;
    return (
        <Editor className="manager" >
            <Title>Edit your note:</Title>
            {!props.viewMode ? 
            <EditMode 
                note={props.note}
                onEditField={props.updateNote}
            /> 
            : <ReviewMode 
                note={props.note}
            />}
            <Button onClick={props.setViewMode}>
                {!props.viewMode ? "Review" : "Edit"} Mode
            </Button>
        </Editor>
    );
}

export default Manager;