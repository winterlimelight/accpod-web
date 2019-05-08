import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulemenuComponent } from './modulemenu.component';

describe('ModulemenuComponent', () => {
  let component: ModulemenuComponent;
  let fixture: ComponentFixture<ModulemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
