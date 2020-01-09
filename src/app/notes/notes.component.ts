import { Component } from '@angular/core';
import { INote } from './interfaces/note-interface'

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent {

  public notes: INote[] = [];

  public addNote(note: INote) {
    this.notes.push(note);
  }

  public deleteNote(index) {
    this.notes = this.notes.filter(item => item.id !== index)
  }

}
