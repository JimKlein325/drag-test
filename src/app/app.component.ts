import { Component } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { DataService } from './data.service';
import { Problem } from './models/problem';
import { Medication } from './models/medication';
import { EMRData } from './data.service';
import { EMRComponent} from './emr/emr.component'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [DataService, DragulaService],
})
export class AppComponent {
  q1 = [];
  q2 = [];
  placeholder = "h1";
  problem: Problem;// = new Problem("one", "two", "three");
  emrData: EMRData = new EMRData(new Array<Problem>(), new Array<Medication>());
  problems: Problem[];
  medications: Medication[];

  constructor(private dataService: DataService, private dragulaService: DragulaService) {
  
    dragulaService.drop.subscribe((value) => {
      console.log(value);
    });

  }

  getDoodles() {
    return this.placeholder;
  }
  ngOnInit() {
    this.dataService.getEMRData()
      .subscribe(
      (data) => { 
        this.problems = data.emrData.problems;
        this.emrData.problems = data.emrData.problems;
        this.medications = data.emrData.medications;
        this.placeholder = String(this.emrData.problems.length);
        console.log("# problems: " + this.emrData.problems.length + this.placeholder)
        console.log("onInit: " + this.emrData.problems[0]["problem"]);
      },
      error => console.log(<any>error.message)
      );
      let a = this.problems;
      console.log("onInit for app component");
  }
}
