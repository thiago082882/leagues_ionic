import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassificationTablePage } from './classification-table.page';

describe('ClassificationTablePage', () => {
  let component: ClassificationTablePage;
  let fixture: ComponentFixture<ClassificationTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
