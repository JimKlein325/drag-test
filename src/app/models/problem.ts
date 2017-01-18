export class Test {
    sampleProperty: string = "sample P";
}


export class Problem {
    // problem: string = "Diabetes Type II";
    // date: string = "December 22, 2016";
    // status: string = "Active";
/*    numberDataFields: number = 3;
    headers: Array<string> = ["Problem", "Date", "Status"];
    values: Array<string>;// = ["problem", "date", "status"];
*/

    constructor(public problem: string,
        public date: string,
        public status: string) {
            //   for (var i in this) {
            // console.log(i);
            // console.log(this[i]);
            // this.values.push(String(this[i]));
        // }
        // this.values = this.values.slice(0, this.numberDataFields);
        // console.log(this.values);
        // return this.values;
        // this.sampleProperty = "66";
    }
    //console.log(this.values);
    // public getValues(): Array<string> {
        
    //     for (var i in this) {
    //         console.log(i);
    //         console.log(this[i]);
    //         this.values.push(String(this[i]));
    //     }
    //     this.values = this.values.slice(0, this.numberDataFields);
    //     console.log(this.values);
    //     return this.values;
    //     // this.values = Object.keys(this).map((key)=>{ return this[key]}).slice(0,this.numberDataFields);

    // }
 /*   get collectedValues(){

        let vals=["test"];
        vals.push(this.problem);
        //       for (var i in this) {
        //     //console.log(i);
        //     // console.log(this[i]);
        //     this.values.push(String(this[i]));
        // }
        // this.values = this.values.slice(0, 2);//this.numberDataFields);
        //console.log(this.values);
        // return this.values;
        return vals;
    }*/
}

export interface IEMRBlock {
    headers: Array<string>;
    numberDataFields: number;

}