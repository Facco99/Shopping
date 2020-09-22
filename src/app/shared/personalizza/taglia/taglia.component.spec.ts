import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagliaComponent } from './taglia.component';

describe('TagliaComponent', () => {
  let component: TagliaComponent;
  let fixture: ComponentFixture<TagliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
