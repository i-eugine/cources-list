import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';
import { CoursesService } from 'src/app/common/services';

@Component({
	selector: 'co-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class CoursesComponent implements OnDestroy {
	search$ = new BehaviorSubject('');

	courses$ = combineLatest([
		this.couses.getAll$(),
		this.search$.pipe(debounceTime(300)),
	]).pipe(
		map(([courses, value]) => {
			const search = value.toLowerCase();
			return search
				? courses.filter(
						({ id, title }) =>
							title.toLowerCase().includes(search) || id === search
				  )
				: courses;
		})
	);

	constructor(private couses: CoursesService) {}

	ngOnDestroy(): void {
		this.search$.complete();
	}

	onSearchChange(value: string) {
		this.search$.next(value);
	}
}
