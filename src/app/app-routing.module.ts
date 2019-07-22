import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { CounterComponent } from './counter/counter.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ThnxComponent } from './thnx/thnx.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'counter', component: CounterComponent },
	{ path: 'rxjs', component: RxjsComponent },
	{ path: 'thank', component: ThnxComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
