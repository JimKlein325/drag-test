import {Component} from '@angular/core';
import { DragulaModule, DragulaService }   from 'ng2-dragula';
import { DataService } from './data.service'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  //providers: [DataService, DragulaService],
})
export class AppComponent {
  q1 = [];
  q2 = [];
  placeholder = "h1";
 
  constructor( private dataService: DataService,  private dragulaService: DragulaService) {
    for (var i = 0; i < 5; i++) {
      this.q1.push("1. <" + i + ">");
      this.q2.push("2. <" + i + ">");
    }
 
    dragulaService.drop.subscribe((value) => {
      console.log(value);
    });
  }
 
  
}
