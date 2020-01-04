import { Component, Output, EventEmitter, Input } from '@angular/core';
import { INote } from '../interfaces';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {
  // @Input() public notesInputValue: string;
  @Output() public saved = new EventEmitter<INote>();

  public note: INote = {
    title: 'works',
    body: 'this is the note'
  };

  public save() {
    this.saved.emit(this.note)
  }


}
