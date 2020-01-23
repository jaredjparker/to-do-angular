import { Injectable } from '@angular/core';
import { INote } from '../interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class NotesCrudService {

  private notes: INote[] = [];

  public getAllNotes() {
    return this.notes
  }

  public addNote(note: INote) {
    this.notes.push(note);
  }


}
