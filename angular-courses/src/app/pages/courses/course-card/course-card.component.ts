import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ICourse } from 'src/app/models';

@Component({
	selector: 'co-course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class CourseCardComponent {
	@Input() course!: ICourse;
}
