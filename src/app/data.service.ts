import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Problem } from './models/problem'
import { Medication } from  './models/medication';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

export class EMRData {
    constructor(public problems: Problem[], public medications: Medication[]) { }
}

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getEMRData() {
        return  this.http.get('./app/models/emrdata.json')
            .map((response: Response) => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }

}

