import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Add2CalenderComponent } from './booking/add2-calender/add2-calender.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { BookingComponent } from './booking/booking.component';
import { RentalDeviceComponent } from './booking/rental-device/rental-device.component';
import { MeetingRoomsAppComponent } from './meeting-rooms-app/meeting-rooms-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'booking', pathMatch:'full'},
  {path:'booking/:id', component: BookingDetailComponent,children:[
    {path:'calender', component: Add2CalenderComponent},
    {path:'device', component: RentalDeviceComponent},
  ]},
  {path:'booking', component: BookingComponent},
  {path:'meetingroomapp', component: MeetingRoomsAppComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
