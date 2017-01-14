import { Component } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { DataService } from './data.service';
import { Problem } from './models/problem';
import { Medication } from './models/medication';
import { EMRData } from './data.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [DataService, DragulaService],
})
export class AppComponent {
  q1 = [];
  q2 = [];
  placeholder = "h1";
  problem: Problem = new Problem("one", "two", "three");
  emrData: EMRData;
  problems: Problem[];
  medications: Medication[];

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
        this.medications = data.emrData.medications;
      },
      error => console.log(<any>error.message)
      );
      let a = this.problems;
      console.log(a);
      console.log("onInit for app component");
  }
}
