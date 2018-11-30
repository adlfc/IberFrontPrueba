import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAppComponent } from './template-app.component';

describe('TemplateAppComponent', () => {
  let component: TemplateAppComponent;
  let fixture: ComponentFixture<TemplateAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
