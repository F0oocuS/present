import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AppService {
	public constructor(private http: HttpClient) {}

	public getItems(): Observable<any> {
		return this.http.get('http://localhost:3000/items');
	}

	public getNumber(): Observable<any> {
		return this.http.get('http://localhost:3000/number');
	}
}
