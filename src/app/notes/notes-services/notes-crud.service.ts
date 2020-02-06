import { Injectable } from '@angular/core';
import { INote } from '../interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class NotesCrudService {

  private notes: INote[] = [];

  public getAllNotes(): INote[] {
    return this.notes
  }

  public addNote(note: INote) {
    this.notes.push(note);
  }

  public deleteNote(id: number): void {
    console.log(this.notes, id, this.notes[this.notes.length - 1])
    // this.notes.splice(id, 1);
    this.notes = this.notes.filter(item => item.id !== id);
  }

}
