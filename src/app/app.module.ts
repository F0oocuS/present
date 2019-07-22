import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { MatToolbarModule, MatCardModule, MatButtonModule, MatSliderModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { counterReducer } from './store/store.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatCardModule,
		MatButtonModule,
		MatSliderModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		FormsModule,
		StoreModule.forRoot({ counter: counterReducer }),
		StoreDevtoolsModule.instrument({ maxAge: 25 }),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
