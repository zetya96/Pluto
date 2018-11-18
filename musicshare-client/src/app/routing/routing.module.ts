import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaylistListComponent } from '../playlist-list/playlist-list.component';
import { SongFormComponent } from '../song-form/song-form.component';
import { SongListComponent } from '../song-list/song-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/playlists',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    component: PlaylistListComponent,
  },
  {
    path: 'songs/new',
    component: SongFormComponent,
  },
  {
    path: 'playlist',
    component: SongListComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: [],
})
export class RoutingModule { }