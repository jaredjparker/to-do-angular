import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteItemComponent } from './notes/note-item/note-item.component';
import { NewNoteComponent } from './notes/new-note/new-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteItemComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
