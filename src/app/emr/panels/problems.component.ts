import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Problem } from '../../models/problem';

@Component({
    selector: 'problems',
    templateUrl: './problems.component.html',
    styleUrls: ['../emr.component.css'],
})

export class ProblemsComponent implements OnInit {
    @Input() title: string;
    @Input() headers: string[];
    @Input() problems: any[];
    @ViewChild('panel') private panelContainer: ElementRef;
    private toggleScroll: string = "false";
    opened: Boolean = true;
    
    toggleTable () {
      this.opened = !this.opened;
    }
    generateArray(obj) {
        return Object.keys(obj).map((key) => {
            if (key != "headers") {
                return obj[key];
            }
        });
    }

    ngOnInit() {
        let e = this.panelContainer.nativeElement;
        this.toggleScroll = e.offsetWidth < 630 ? "scroll" : "hidden";
    }

    ngOnChanges() {
    }
}