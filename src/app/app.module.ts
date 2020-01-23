import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteItemComponent } from './notes/note-item/note-item.component';
import { NewNoteComponent } from './notes/new-note/new-note.component';
import { NotesCrudService } from './notes/notes-services/notes-crud.service'

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteItemComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotesCrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
