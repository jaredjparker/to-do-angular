import { Component, Output, EventEmitter } from '@angular/core';
import { INote } from '../interfaces';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {

  @Output() public saved = new EventEmitter<any>();

  private noteTitle: string;
  private noteId: number

  // public note: INote = {
  //   id: -1,
  //   title: this.noteTitle,
  //   body: 'this is the note'
  // };

  public save() {
    this.saved.emit({ id: this.noteId, title: this.noteTitle})
  }


}
