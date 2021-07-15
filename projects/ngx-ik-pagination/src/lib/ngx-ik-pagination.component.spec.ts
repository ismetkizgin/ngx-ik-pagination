import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIkPaginationComponent } from './ngx-ik-pagination.component';

describe('NgxIkPaginationComponent', () => {
  let component: NgxIkPaginationComponent;
  let fixture: ComponentFixture<NgxIkPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIkPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIkPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
