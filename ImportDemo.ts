 import { CDE as importedInterface } from './Basics'
 import { exportType } from './Basics';
 //import { DDemo } from './Basics';
 //import AAA from './Basics';
// //IMPORTED INTERFACE
class ImportDemo implements importedInterface{
    methodA(): void {
        console.log("Class Implements Imported Interface");
    }
}

//IMPORTED TYPE
let v1:exportType="ABCD";
console.log(v1);

//EXPORT DEFAULT VARIABLE
//let importedClass=new DDemo();
//console.log(AAA);
