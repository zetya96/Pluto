import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent
  implements OnInit, OnDestroy {

  playlistItems: string[] = [
    'Eurobeat',
    'Rock',
    'Vegyes',
  ];

  filteredPlaylistItems: string[];
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {
    this.filteredPlaylistItems = [];
    for (let playlistItem of this.playlistItems) {

      if (playlistItem.startsWith(filterText)) {

        this.filteredPlaylistItems.push(playlistItem);

      }

    }
    this.submitted = true;
  }

}
