import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCourseListComponent } from './empty-course-list.component';

describe('EmptyCourseListComponent', () => {
	let component: EmptyCourseListComponent;
	let fixture: ComponentFixture<EmptyCourseListComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [EmptyCourseListComponent],
		});
		fixture = TestBed.createComponent(EmptyCourseListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
