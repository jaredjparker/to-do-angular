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
      <button [(id)]='note.id' (click)='noteRemove(note.id)'>Delete</button>
  </div>
  `,
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent {

  constructor(private notesService: NotesCrudService) {  }

  public notes = this.notesService.getAllNotes();

  public noteAdd(note: INote) {
    if (note.title === undefined && note.body === undefined) {
      return;
    } else {
      this.notesService.addNote(note);
    }
  }

  public noteRemove(id: number) {
    this.notesService.deleteNote(id);
  }

  // public async getAllNotes(): Promise<void> { 
  //   await this.notes = this.notesService.getAllNotes(); 
  // }

}
