import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetingRoom } from './meeting-room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app2';

  public capacity = ['5人', '10人', '20人', '30人', '40人']
  public meetingRoomForm: FormGroup; 
  meetingRoom: MeetingRoom;
  constructor(public builder: FormBuilder) {
    this.meetingRoom = new MeetingRoom(
      101, '哥多華', this.capacity[2], false, true);
    this.meetingRoomForm = this.builder.group({
      'id': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      "size": [''], 'projector': [''], 'TV': ['']
    });
  }
  ngOnInit() {
    this.meetingRoomForm.setValue(this.meetingRoom);
  }

}
