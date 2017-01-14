
export class Problem implements IEMRBlock {
    // problem: string = "Diabetes Type II";
    // date: string = "December 22, 2016";
    // status: string = "Active";
    numberDataFields: number = 3;
    headers: Array<string> = ["Problem", "Date", "Status"];
    values: Array<string> = [];


    constructor(public problem: string,
        public date: string,
        public status: string) {

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

export interface IEMRBlock {
    headers: Array<string>;
    numberDataFields: number;

}