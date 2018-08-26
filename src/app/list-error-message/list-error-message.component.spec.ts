import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListErrorMessageComponent } from './list-error-message.component';

describe('ListErrorMessageComponent', () => {
  let component: ListErrorMessageComponent;
  let fixture: ComponentFixture<ListErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
