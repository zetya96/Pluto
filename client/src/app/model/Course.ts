import {Room} from './Room';
import {User} from './User';
export class Course {
    id: number;
    name: string;
    teacher: User;
    students: User[];
    room: Room;
    date: string;
    constructor(students?: User[],date?: string, teacher?: User, name?: string, room?: Room, startTime?: Date, endTime?: Date, id?: number){
        this.room = room;
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.date = date;
        this.students = students;
    }
    
}
