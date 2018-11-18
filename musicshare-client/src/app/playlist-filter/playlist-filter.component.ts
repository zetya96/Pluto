import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-filter',
  templateUrl: './playlist-filter.component.html',
  styleUrls: ['./playlist-filter.component.css']
})
export class PlaylistFilterComponent implements OnInit {

  filterText: string = '';
  
  @Output()
  filterSubmit: EventEmitter<string> = new EventEmitter();

  @Input()
  filterName: string;

  constructor() { }

  ngOnInit() {
  }

  filter() {
    this.filterSubmit.emit(this.filterText);
  }

}
