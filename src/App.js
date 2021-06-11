import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import Manager from './components/Manager/Manager.jsx';
import Editor from './components/Editor/Editor.jsx';


// styled components
const GlobalStyles = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
`;
const AppContainer = styled.div`
	position: relative;
	display: flex;
	width: 100vw;
	height: 100vh;
	padding: 2rem;
`;

// render components
function App() {
	// const for creating new note
	const newNote = {
		id: uuid(),
		title: 'New note',
		content: 'hello',
		lastModified: new Date()
	}

	// initialize
	const [viewMode, setViewMode] = useState(false)
	const [listNote, setListNote] = useState(
		localStorage.listNote ? JSON.parse(localStorage.listNote) : []);
	const [activeNote, setActiveNote] = useState(false);
	// note item event
	const updateNote = (key, value, currentNote) => {
		const updatedNote = {
			...currentNote,
			[key]: value,
			lastModified: new Date()
		}
		let updatedNoteArray = listNote.map((note) => {
			if (note.id === activeNote) {
				return updatedNote;
			}
			return note;
		});
		updatedNoteArray.sort((a, b) => b.lastModified - a.lastModified);
		setListNote(updatedNoteArray);
	};
	const getActiveNote = () => {
		return listNote.find((note) => note.id === activeNote);
	}

	// note list events
	const createNote = () => {
        setListNote([newNote, ...listNote]);
    };
    const removeNote = (idToDelete) => {
        setListNote(listNote.filter((note) => note.id !== idToDelete));
    };

	// save to local storage
	useEffect(() => {
		localStorage.setItem("listNote", JSON.stringify(listNote));
	}, [listNote])
	// render
	return (
		<AppContainer>
			<GlobalStyles />
			<Editor
				listNote={listNote}
				createNote={createNote}
				removeNote={removeNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>
			<Manager
				viewMode={viewMode}
				setViewMode={() => setViewMode(!viewMode)}
				note={getActiveNote()}
				updateNote={updateNote}
			 />
		</AppContainer>
	);
}

export default App;
