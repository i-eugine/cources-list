import { Component, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	ControlValueAccessor,
	FormsModule,
	NG_VALUE_ACCESSOR,
} from '@angular/forms';

type ChangeFn = (_value: string) => void;
type TouchFn = () => void;

@Component({
	selector: 'co-input',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	encapsulation: ViewEncapsulation.None,

	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputComponent),
			multi: true,
		},
	],
})
export class InputComponent implements ControlValueAccessor {
	@Input() placeholder = '';

	_value = '';
	set value(value: string) {
		this._value = value;

		this.onChange(value);
		this.onTouch();
	}

	onChange: ChangeFn = () => null;
	onTouch: TouchFn = () => null;

	writeValue(value: string): void {
		console.log(value);
		this.value = value;
	}

	registerOnChange(fn: ChangeFn): void {
		console.log('registerOnChange');
		this.onChange = fn;
	}

	registerOnTouched(fn: TouchFn): void {
		console.log('registerOnTouched');

		this.onTouch = fn;
	}
}
