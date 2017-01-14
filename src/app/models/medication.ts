import { IEMRBlock } from './problem'

export class Medication implements IEMRBlock {
    numberDataFields: number = 6;
    headers: Array<string> = ["Problem", "Date", "Status"];
    values: Array<string> = [];


    constructor( 
        public name: string,
        public directions: string,
        public startDate: string,
        public status: string,
        public indications: string,
        public fillInstructions: string
    ) {

/*        for (var i in this) {
            console.log(i);
            console.log(this[i]);
            this.values.push(String(this[i]));
        }
        this.values = this.values.slice(0, this.numberDataFields);
        console.log(this.values);
*/        // this.values = Object.keys(this).map((key)=>{ return this[key]}).slice(0,this.numberDataFields);
    }
    //console.log(this.values);

}
