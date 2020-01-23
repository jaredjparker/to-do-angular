import { Component } from '@angular/core';
import { INote } from './interfaces/note-interface'
import { NotesCrudService } from './notes-services/notes-crud.service';

@Component({
  selector: 'notes',
  // templateUrl: './notes.component.html',
  template: `
  <new-note (saved)=noteAdd($event)></new-note>
  
  <div *ngFor="let note of notes;">
      <h1>{{note.title}}</h1>
      <p>{{note.body}}</p>
      <p>{{note.id}}</p>
      <button [(id)]='note.id' (click)='deleteNote(note.id)'>Delete</button>
  </div>
  `,
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent {

  // public notes: INote[] = [];

  // public addNote(note: INote) {
  //   this.notes.push(note);
  // }

  public deleteNote(id: number): void {
    this.notes.splice(id, 1);
  }

  constructor(public notesService: NotesCrudService) {  }

  public noteAdd(note: INote) {
    this.notesService.addNote(note);
  }

  public notes = this.notesService.getAllNotes();;

}
