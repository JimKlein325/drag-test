import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
    getData() {
        return ["hello ", "world"];
    }
}

