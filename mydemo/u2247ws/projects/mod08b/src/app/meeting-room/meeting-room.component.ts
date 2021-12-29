import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from '../meeting-room';
import { MeetingRoomService } from '../meeting-room.service';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styles: [
  ]
})
export class MeetingRoomComponent implements OnInit {
  meetingRooms: MeetingRoom[] = [];
  constructor(private mrService: MeetingRoomService) { }

  ngOnInit(): void {
    this.mrService.getMeetingRooms().then(
      resp => this.meetingRooms = resp as MeetingRoom[]
    );
  }

}
