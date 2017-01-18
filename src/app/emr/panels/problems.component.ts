import { Component, Input } from '@angular/core';
import { Problem } from '../../models/problem';

@Component({
    selector: 'problems',
    templateUrl: './problems.component.html',
    styleUrls: ['../emr.component.css'],
})

export class ProblemsComponent {
    @Input() title: string;
    @Input() headers: string [];
    @Input() problems: any[];

    generateArray(obj) {
        return Object.keys(obj).map((key) => { 
            if(key != "headers"){
                return obj[key] ;
            }
        });
    }
}