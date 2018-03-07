import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityManagerComponent } from './identity-manager.component';

describe('IdentityManagerComponent', () => {
  let component: IdentityManagerComponent;
  let fixture: ComponentFixture<IdentityManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
