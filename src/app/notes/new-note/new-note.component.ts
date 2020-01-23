import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

import { INote } from '../interfaces';
import { NewNoteState } from '../enumerations'
import { NotesCrudService } from '../notes-services/notes-crud.service'

@Component({
  selector: 'new-note',
  // templateUrl: './new-note.component.html',
  template: `
  <input #activeTitleInput />
<div *ngIf='state === "Active"; then activeNewNote else notActiveNewNote'></div>
<ng-template #notActiveNewNote>
  <input class='form-control' (click)='newNoteStateSwitch()' placeholder='Title' />
</ng-template>
<ng-template #activeNewNote>
  <input class='form-control' [(ngModel)]='noteTitle' placeholder='Title' />
  <input class='form-control' [(ngModel)]='noteBody' placeholder='Take a note...' />
  <button class='btn btn-primary' (click)='save()'>Close</button>
</ng-template>
  `,
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent {
  @ViewChild('activeTitleInput', { static: true }) activeTitleInput: ElementRef;

  @Output() public saved = new EventEmitter<INote>();

  public state: NewNoteState = NewNoteState.NotActive
  public noteTitle: string;
  public noteId: number;
  public noteBody: string;
  public notesService = new NotesCrudService;

  public newNoteStateSwitch() {
    this.state === 'NotActive' ? this.state = NewNoteState.Active : this.state = NewNoteState.NotActive;
    this.setActiveTitleFocus();
  }

  public setActiveTitleFocus() {
    this.activeTitleInput.nativeElement.focus();
  }

  public save() {
    const note: INote = {
      id: this.noteId,
      title: this.noteTitle,
      body: this.noteBody
    };
    this.notesService.addNote(note);
    this.saved.emit(note);
    this.newNoteStateSwitch();
    this.noteId === undefined ? this.noteId = 0 : this.noteId++;
    this.noteTitle = '';
    this.noteBody = '';
  }


}
