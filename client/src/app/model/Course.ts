import {Room} from './Room';
import {User} from './User';
export class Course {
    id: number;
    name: string;
    teacher: User;
    studentNumber: number;
    room: Room;
    date: string;

    constructor(date?: string, teacher?: User, name?: string, room?: Room, startTime?: Date, endTime?: Date, id?: number,studentNumber?: number){
        this.room = room;
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.date = date;
        this.studentNumber = studentNumber;
    }
    
}
