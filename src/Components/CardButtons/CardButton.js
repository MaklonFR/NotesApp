import React from 'react';
import './CardButton.css';

const titleCard=`Add a new note!`;
const subtitleCard =`Please add a book by clicking the`;
const buttonCradName=`Add Note`;

const CardButton = ({onAdd}) => {
	const showingThree=true; const showingOne=false; const showingTwo=false;
    return (
        <div className="search-type">
		   <div className="alert">
			    <h3 className="alert-title">{titleCard}</h3>
			    <p className="alert-subtitle"> {subtitleCard} <strong>Add Book button!</strong></p>
			    <button onClick={() => onAdd(showingThree, showingOne, showingTwo)}className="search-buttons" >{buttonCradName}</button>
		   </div>
        </div>
    )
}

export default CardButton;