import React from 'react';
import styled, { css } from 'styled-components';

const Editor = styled.div`
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
    background-color: white;
    border: none;
    font-family: "Open sans", sans-serif;
    font-weight: 700;
    color: #59B3F7;
    padding: 0.5rem 1rem;
    width: 100px;
    height: 40px; 
    cursor: pointer;
    right: 0;
    bottom: 0;
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
const Manager = (props) => {
    const onEditField = (key, value) => {
        props.updateNote({
			...props.note,
			[key]: value,
			lastModified: new Date()
		});
    }
    if (!props.note) return <div>Nothing to do</div>;
    return (
        <Editor className="manager" >
            <Title>Edit your note:</Title>
            <InputForm>
                <InputTitle 
                    type="text" 
                    value={props.note.title} 
                    onChange={(e) => onEditField('title', e.target.value)}
                    placeholder="Title" />
                <InputMessage 
                    value={props.note.content} 
                    onChange={(e) => onEditField('content', e.target.value)}
                    placeholder="Write your note here..."   />  
                <small>{props.note.lastModified.toLocaleString()}</small>
            </InputForm>
        </Editor>
    );
}

export default Manager;