import {
	Component,
	EventEmitter,
	Output,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'co-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent {
	@Output() handleSearchChange = new EventEmitter<string>();

	search = '';

	onSearchChange(value: string) {
		this.search = value;

		this.handleSearchChange.emit(value);
	}
}
