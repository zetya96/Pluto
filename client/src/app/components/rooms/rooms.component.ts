import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoomService} from "../../services/room.service";


@Component({
  selector: 'app-grid-list',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit, OnDestroy {

  rooms = [];



  constructor(private roomService: RoomService){
  }

  getRooms(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  ngOnInit(){
    this.getRooms();
    console.log(this.rooms);
    
    }
  ngOnDestroy() {  }
}
