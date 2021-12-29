import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from 'projects/mod06/src/app/meeting-room';
import { MeetingRooms } from '../meeting-room';
import { MeetingRoomService } from '../meeting-room.service';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  providers:[MeetingRoomService],
  styles: [
  ]
})
export class MeetingRoomListComponent implements OnInit {

  meetingRooms : MeetingRoom[];
  constructor(meetingRoomService: MeetingRoomService) {
    this.meetingRooms = meetingRoomService.getMeetingRooms();
  }

  ngOnInit(): void {
  }

}
