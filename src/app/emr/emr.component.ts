import { Component } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { DataService } from '../data.service';
import { Problem } from '../models/problem';
import { Medication } from '../models/medication';
import { EMRData } from '../data.service';
import { PanelInfo } from './panels/panelInfo'


@Component({
    //selector: 'emr', --selector only needed if nested, this is displayed using routing!
    //styleUrls: ['./emr.component.css'],
    templateUrl: './emr.component.html',
    providers: [DataService, DragulaService],

})
export class EMRComponent {
    pageTitle: string = "Patient EMR";
    panelInfo: PanelInfo = new PanelInfo();

    problem: Problem;// = new Problem("one", "two", "three");
    emrData: EMRData = new EMRData(new Array<Problem>(), new Array<Medication>());
    problems: Problem[];
    medications: Medication[];
    functionalAndCStatus: any[];
    allergies: any[];
    immunizations: any[];
    socialHistory: any[];
    vitalSigns: any[];
    results: any[];
    planOfCare: any[];
    encounters: any[];
    reasonForRefferal: any[];
    procedures: any[];
    

    constructor(private dataService: DataService, private dragulaService: DragulaService) {

        dragulaService.drop.subscribe((value) => {
            console.log(value);
        });
    }

      ngOnInit() {
    this.dataService.getEMRData()
      .subscribe(
      (data) => { 
        this.problems = data.emrData.problems;
        this.emrData.problems = data.emrData.problems;
        this.medications = data.emrData.medications;
        this.functionalAndCStatus = data.emrData.functionalAndCognitiveStatus;
        this.allergies = data.emrData.allergies;
        this.immunizations = data.emrData.immunizations;
        this.vitalSigns = data.emrData.vitalSigns;
        this.results = data.emrData.results;

        // this.placeholder = String(this.emrData.problems.length);
        // console.log("# problems: " + this.emrData.problems.length + this.placeholder)
        console.log("onInit: " + this.emrData.problems[0]["problem"]);
      },
      error => console.log(<any>error.message)
      );
      let a = this.problems;
      console.log("onInit for app component");
  }

}

