import {Room} from './Room';
export class Course {
    id: number;
    room: Room;
    constructor(room?: Room, startTime?: Date, endTime?: Date, id?: number){
        this.room = room;
        this.id = id;
    }
}
