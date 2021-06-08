import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import Manager from './components/Manager/Manager.jsx';
import Editor from './components/Editor/Editor.jsx';

function App() {
	// styled components
	const GlobalStyles = createGlobalStyle`
		@import url('https://fonts.googleapis.com/css2?family=Open+Sans@wgh: 700, 600, 100, 300');
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}
	`;
	const AppContainer = styled.div`
		display: flex;
		width: 100vw;
		height: 100vh;
		padding: 2rem;
	`;

	// initialize
	const  [listNote, setListNote] = useState([]);

	const createNote = () => {
        let newNote = {
            id: uuid(),
            title: 'New note',
            content: '',
			lastModified: new Date()
        }
        setListNote([newNote, ...listNote]);
    };
    const removeNote = (idToDelete) => {
        setListNote(listNote.filter((note) => note.id !== idToDelete));
    };
	// render 
	return (
		<AppContainer>
			<GlobalStyles />
			<Manager />
			<Editor 
				listNote={listNote} 
				createNote={createNote} 
				removeNote={removeNote}
			/>
		</AppContainer>
	);
}

export default App;
