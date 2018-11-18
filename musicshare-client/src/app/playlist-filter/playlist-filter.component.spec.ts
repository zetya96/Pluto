import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistFilterComponent } from './playlist-filter.component';

describe('PlaylistFilterComponent', () => {
  let component: PlaylistFilterComponent;
  let fixture: ComponentFixture<PlaylistFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
