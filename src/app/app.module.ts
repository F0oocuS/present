import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { MatToolbarModule, MatCardModule, MatButtonModule, MatSliderModule, MatCheckboxModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { counterReducer } from './store/store.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ThnxComponent } from './thnx/thnx.component';
import { EffectsModule } from '@ngrx/effects';
// import { StoreEffect } from './store/store.effect';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		RxjsComponent,
		MainComponent,
		ThnxComponent
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
		MatListModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		StoreModule.forRoot({ counter: counterReducer }),
		StoreDevtoolsModule.instrument({ maxAge: 25 })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
