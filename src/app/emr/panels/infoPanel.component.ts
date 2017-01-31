import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Problem } from '../../models/problem';

@Component({
    selector: 'infoPanel',
    templateUrl: './infoPanel.component.html',
    styleUrls: ['../emr.component.css'],
})

export class InfoPanelComponent implements OnInit {
    @Input() title: string;
    @Input() headers: string[];
    @Input() dataItems: any[];
    @ViewChild('panel') private panelContainer: ElementRef;
    private toggleScroll: string = "hidden";
    opened: Boolean = true;

    toggleTable() {
        this.opened = !this.opened;
    }
    generateArray(obj) {
        return Object.keys(obj).map((key) => {
            if (key != "headers") {
                return obj[key];
            }
        });
    }
    showHideScrollBars() {
        let e = this.panelContainer.nativeElement;
        this.toggleScroll = e.offsetWidth < 630 ? "scroll" : "hidden";
    }

    ngOnInit() {
        this.showHideScrollBars();
    }

    ngOnChanges() {
        this.showHideScrollBars();
    }
}