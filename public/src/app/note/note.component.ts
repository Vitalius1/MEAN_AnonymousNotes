import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note = new Note();

  constructor(private _noteService: NoteService) { }

  onSubmit(form) {
    console.log("heloooo I've been clicked")
    this._noteService.createNote(this.note)    
    this.note = new Note();
    form.resetForm();
  }
  
  ngOnInit() {
  }

}
