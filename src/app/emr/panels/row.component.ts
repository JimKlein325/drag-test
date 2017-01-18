import { Component, Input } from '@angular/core';
//import { Problem } from '../../models/problem';

@Component({
    selector: 'panel-row',
    templateUrl: './row.component.html',
    //styleUrls: ['../emr.component.css'],
})

export class PanelRowComponent {
    panelTitle: string = "Problems";
    @Input() model: any;

    generateArray(obj){
   return Object.keys(obj).map((key)=>{ return obj[key]});
}
}