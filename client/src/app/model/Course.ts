import {Room} from './Room';
export class Course {
    id: number;
    name: string;
    room: Room;
    constructor(name?: string, room?: Room, startTime?: Date, endTime?: Date, id?: number){
        this.room = room;
        this.id = id;
        this.name = name;
    }
    
}
