import React from 'react';

class ShowNoteForm extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {
            cek: true,
            noteDate:'',
            title: '',
            body: '',
            archived:false
        }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChangeTitle = (e) => {
        this.setState (() => {
            return {
                noteDate: new Date().toDateString(),
                title: e.target.value,
                archived:false
            }
        })
      }

     handleChangeDesc = (e) => {
        this.setState (() => {
            return {
                body: e.target.value,
            }
        })
      }

     handleSubmit = (e) => {
        e.preventDefault();
        if ((this.state.title!=='') && (this.state.body!=='')) {
            this.props.addNote(this.state);
        } else {console.log('Ada data yang kosong!!');}

      }
    
    render() {
    return (
        <div id="an" className="tabcontent">
            <div className="form-style-6">
                <h1>Note form</h1>
                    Remaining Characters of Title: <span className="alert-remain">{50 - this.state.title.length}</span>
                    <form id="addBookForm" onSubmit={this.handleSubmit}>
                        <input type="text"  value={this.state.title} onChange={this.handleChangeTitle} className="title"  placeholder="Note title . . ." />
                        <textarea type="text" value={this.state.body}  onChange={this.handleChangeDesc} className="desc"  placeholder="Note describe . . ." />
                        <button type="submit" className="search-buttons-finish card-buttons"> Save </button>
                    </form>
            </div>
        </div>
    )
  }
}

export default ShowNoteForm;