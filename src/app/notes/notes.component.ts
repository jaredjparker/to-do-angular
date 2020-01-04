import { Component } from '@angular/core';
import { INote } from './interfaces/note-interface'

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent {
  public notes: INote[] = [{title: 'juan', body: 'lorem ipsem'}];
  // public newNote: string;

  public addNote(note: INote) {
    this.notes.push(note);
  }
}
