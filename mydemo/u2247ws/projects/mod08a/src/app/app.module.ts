import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeetingRoomListComponent } from './meeting-room-list/meeting-room-list.component';
import { MeetingRoomService } from './meeting-room.service';

@NgModule({
  declarations: [
    AppComponent,
    MeetingRoomListComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [MeetingRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
