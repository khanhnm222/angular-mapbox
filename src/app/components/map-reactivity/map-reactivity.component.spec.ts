import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapReactivityComponent } from './map-reactivity.component';

describe('MapReactivityComponent', () => {
  let component: MapReactivityComponent;
  let fixture: ComponentFixture<MapReactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapReactivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapReactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
