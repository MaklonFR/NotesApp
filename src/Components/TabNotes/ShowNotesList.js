import React from 'react';

const tabNoteList=`Notes List`;
const ShowNotesList = ({notes, archiveNote, deleteNote}) => {
    return  (      
            <div id="sa" className="tabcontent" >         
            <h3 className="headingTab">{tabNoteList}</h3>
            <div className="job-cards">
            { notes.length ? 
                notes.map(note => 
                <div className="job-card" key={note.id} >            
                    <div className="job-card-title title" >
                        <div className="cardnote-tipe">
                            <div className="alert">     
                                <button className="alert-date"> {note.noteDate} </button>
			                    <h3 className="alert-title"> {note.title}</h3>
			                    <p className="alert-subtitle"> {note.body}</p>
			                    <button className="alert-add" onClick={() => deleteNote(note.id)}>DELETE</button>
                                <button className="alert-archive" onClick={() => archiveNote(note.id, note.title,note.body )}>ARCHIVE</button>
		                    </div>                        
                        </div>                
                     </div> 
                </div>
               ) : null }
               
            </div>    
        </div>
   )
}

export default ShowNotesList;