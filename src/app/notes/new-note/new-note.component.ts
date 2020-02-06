import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

import { INote } from '../interfaces';
import { NewNoteState } from '../enumerations';

@Component({
  selector: 'new-note',
  // templateUrl: './new-note.component.html',
  template: `
  <div>
    <div [hidden]='state !== "Active"'>
        <input class='form-control' [(ngModel)]='noteTitle' placeholder='Title' />
    </div>
    <input class='form-control' (click)='newNoteStateSwitch()' [(ngModel)]='noteBody' placeholder='Take a note...' />
    <div [hidden]='state !== "Active"'>
        <button class='btn btn-primary' (click)='save()'>Close</button>
    </div>
</div>
  `,
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {

  @Output() public saved = new EventEmitter<INote>();

  public state: NewNoteState = NewNoteState.NotActive;
  public noteTitle: string;
  public noteId: number;
  public noteBody: string;

  constructor() {
    this.noteId = 0;
  }

  public newNoteStateSwitch() {
    this.state === 'NotActive' ? this.state = NewNoteState.Active : this.state = NewNoteState.NotActive;
  }

  public save() {
    const note: INote = {
      id: this.noteId,
      title: this.noteTitle,
      body: this.noteBody
    };
    this.saved.emit(note);
    this.newNoteStateSwitch();
    this.noteId === undefined ? this.noteId = 0 : this.noteId++;
    this.noteTitle = '';
    this.noteBody = '';

  }


}
