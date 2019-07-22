import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
	public items;

	public constructor(private appService: AppService) {}

	public ngOnInit(): void {}

	public onSendGet(): void {
		console.log(this.appService.getItems());

		this.appService.getItems().subscribe(
			data => {
				console.log(data);

				this.items = data.items;
			},
			error => console.log(error)
		);
	}
}
