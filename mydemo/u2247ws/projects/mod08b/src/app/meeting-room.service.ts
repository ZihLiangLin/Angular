import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetingRoom } from './meeting-room';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  url = "../assets/data/meetingRoom.json";
  constructor(private httpclient: HttpClient) { }

  getMeetingRooms(){
    return this.httpclient.get<MeetingRoom[]>(this.url).toPromise();
  };

}
