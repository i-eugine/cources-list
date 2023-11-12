import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'co-header',
	standalone: true,
	imports: [ButtonComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {}
