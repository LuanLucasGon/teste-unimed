import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTaskComponent } from './read-task.component';

describe('ReadTaskComponent', () => {
  let component: ReadTaskComponent;
  let fixture: ComponentFixture<ReadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
