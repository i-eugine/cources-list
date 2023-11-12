import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {
	ButtonComponent,
	DurationPipe,
	FormatDatePipe,
	InputComponent,
} from 'src/app/common';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [CoursesComponent, CourseCardComponent, SearchBarComponent],
	imports: [
		CommonModule,

		ButtonComponent,
		InputComponent,

		DurationPipe,
		FormatDatePipe,

		FormsModule,
	],
})
export class CoursesModule {}
