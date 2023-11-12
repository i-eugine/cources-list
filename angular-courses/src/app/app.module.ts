import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './pages/courses/courses.module';
import { HeaderComponent } from './common';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HeaderComponent, CoursesModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
