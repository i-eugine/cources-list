import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'duration',
	standalone: true,
})
export class DurationPipe implements PipeTransform {
	transform(value: number): unknown {
		const hours = `${Math.floor(value / 60)}`.padStart(2, '0');
		const mins = `${value % 60}`.padStart(2, '0');
		return `${hours}:${mins}`;
	}
}
