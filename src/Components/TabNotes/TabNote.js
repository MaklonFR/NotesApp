import React from 'react';
import './TabNote.css';
import ShowNotesList from './ShowNotesList';
import ShowArchiveList from './ShowArchiveList';
import ShowNoteForm from './ShowNoteForm';
import notesData from '../../data';
import SearchBar from '../SearchBars/SearchBar';

const buttonListNotes =`Notes`;
const buttonListArchive  =`Archive`; 
const buttonAddNote = `Add`;
const titleCard=`Add a new note!`;
const subtitleCard =`Please add a book by clicking the`;
const buttonCradName=`Add Note`;

class TabNote extends React.Component {
  constructor (props) {
    super(props);
     this.state = { 
            cek : false, showingOne:false, showingTwo:false, showingThree:false,
            notes : notesData(),
            searchValue: '',
            filteredNotes: []
        };
    }

    componentDidMount() {
        const localNotes = [...this.state.notes]
        this.setState({
          notes: localNotes,
          filteredNotes:localNotes,
          showingOne:true,
          showingTwo:false,
          showingThree:false
        });
      }

      handleSearch = (text) => {
        console.log(text);
        this.setState({searchValue: text});
        if (this.state.searchValue !== ''){
          this.setState({
            filteredNotes: this.state.notes.filter( note => note.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1 )
          })
        } else {
          this.setState({
            filteredNotes: this.state.notes
          })
        }
      };

      onSubmit = ({cek, noteDate, title, body, archived}) => {
        this.setState({
          cek:cek,
          showingOne:true, showingTwo:false, showingThree:false, searchValue:'',
          notes: [
            ...this.state.notes,
            {
              id: + new Date(),
              noteDate: noteDate,
              title: title,
              body: body,
              archived:archived
            }
          ],
          
        }, () => (this.state.notes));
        console.log(cek);
      }

      deleteNote = id => {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({
          notes
        }, () =>(this.state.notes))
        alert("Success!");
      }

      archiveNote = (id, title, body) => {  
         const currentNote = this.state.notes.filter(note => note.id === id);
         this.setState({
          showingOne:false, showingTwo:true, showingThree:false,
          notes: [
            ...this.state.notes,
            {
            id : + new Date(),
            noteDate:new Date().toDateString(),
            title:title,
            body:body,
            archived:true
            }
          ],
          },  () => this.deleteNote(currentNote[0].id));
      }

      changeNote = (id, title, body) => {  
        const currentNote = this.state.notes.filter(note => note.id === id);
        this.setState({
         showingOne:true, showingTwo:false, showingThree:false,
         notes: [
           ...this.state.notes,
           {
           id : + new Date(),
           noteDate:new Date().toDateString(),
           title:title,
           body:body,
           archived:false
           }
         ],
         },  () => this.deleteNote(currentNote[0].id));
     }

    render () {
      return (
        <>
        <SearchBar onSearch={(text) => this.handleSearch(text)}/>  
        <div className='main-container'>
                <div className="search-type">
		            <div className="alert">
			            <h3 className="alert-title">{titleCard}</h3>
			            <p className="alert-subtitle"> {subtitleCard} <strong>Add Book button!</strong></p>
			            <button onClick={() => this.setState({ showingThree: true, showingOne:false, showingTwo:false })}className="search-buttons" >{buttonCradName}</button>
		            </div>
                </div>

            <div className="searched-jobs">
             <div className="tab">
              <button onClick={() => this.setState({ showingOne: true, showingTwo:false, showingThree:false })} 
                        className="tablinks" >{buttonListNotes}
                </button>
                <button onClick={() => this.setState({ showingTwo: true, showingOne:false, showingThree:false })}
                        className="tablinks" >{buttonListArchive}
                </button> 
                <button onClick={() => this.setState({ showingThree: true, showingOne:false, showingTwo:false })}
                        className="tablinks" >{buttonAddNote}
                </button>  
            </div> 
                  { ((this.state.showingOne) && (this.state.searchValue!==''))
                    ?            
                     <ShowNotesList 
                              notes={this.state.filteredNotes.filter(note => note.archived===false)} 
                              deleteNote={this.deleteNote}
                              archiveNote={this.archiveNote}
                         />
                    : null
                  }
                  { ((this.state.showingOne) && (this.state.searchValue===''))
                    ?            
                     <ShowNotesList 
                              notes={this.state.notes.filter(note => note.archived===false)} 
                              deleteNote={this.deleteNote}
                              archiveNote={this.archiveNote}
                         />
                    : null
                  }
                  { this.state.showingTwo 
                    ? <ShowArchiveList
                    notes={this.state.notes.filter(note => note.archived===true)} 
                    deleteNote={this.deleteNote}
                    changeNote={this.changeNote}
                    />
                    : null
                  }
                  { this.state.showingThree 
                    ? <ShowNoteForm
                      addNote={this.onSubmit}
                      value={this.state.title}
                     />
                   : null               
                  }
        </div>
       </div>
       </>
      );    
    }
}

export default TabNote;