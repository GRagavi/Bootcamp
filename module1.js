import {Chalk} from "chalk";
// module.exports.helloworld= function (){
//     console.log("Hi");
// }


// export class Greeter{
//     constructor (greeterName){
//         this.greeterName=greeterName;

//     }

//      sayhelloTo(name) {
//         console.log(name);
//     }
// }

export class Logger{

    constructor(){
        this.Chalk = new Chalk();
    }
    LogInfo(message){
        console.log(this.Chalk.cyanBright(message))
    }

    LogError(message){
        console.log(this.Chalk.red(message))
    }
}