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
    console.log(this.notes)
  }

  public deleteNote(index) {
    this.notes = this.notes.slice(0, index).concat(this.notes.slice(index + 1, this.notes.length))
  }

}
