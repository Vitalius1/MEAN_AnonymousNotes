import { Injectable } from '@angular/core';
import { Note } from './note';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http'
import "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NoteService {
  notes;
  noteObserver = new BehaviorSubject(this.notes)

  constructor(private _http: Http) { }
  createNote(note) {
    this._http.post(`/notes`, note)
      .subscribe(data => {
        this.notes = data.json();
        this.noteObserver.next(this.notes);
      }, (err) => {
        console.log(err);
      }
    )
  }

  getAll() {
    this._http.get(`/notes`)
      .subscribe(data => {
        this.notes = data.json();
        this.noteObserver.next(this.notes);
      }, (err) => {
        console.log(err);
      })
  }
}
