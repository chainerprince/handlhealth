
import fs from 'fs';
import { obj } from './typings';

/**
 * CombineJsonFiles class
 * @class
 * @classdesc This class is used to combine json files
 * @param {string} outputFile - The output file path
 * 
 */
export class CombineJsonFiles{   
    /**
     * The path of the output
    */
     readonly _outputFile: string;

    /**
     * @constructor
     * @param {string} outputFile - The output file path
    */
    constructor(_outputFile: string){                        
        this._outputFile = _outputFile;
    }
   /**
    * 
    * @returns {string} - The content of json files
    * @memberof CombineJsonFiles
    * @throws {Error} - If the file is not found
    * 
    */
    readFiles = () => {
    let files = [];
    for(let i=1; i<=3; i++){
       let data: string = fs.readFileSync(`./data/Object${i}.json`).toString();
       files.push(JSON.parse(data));
    }
    return files;
    }
      /**
       * @param ...args array of strings
       * @returns {string} - The sum of the arguments
       * @memberof CombineJsonFiles
       * 
      */
    calculateSum = (...args: any[]) =>       
        args.map(arg=>parseInt(arg)).reduce((total, item) => total + item).toString();         
    
    mergeObjects = (...objects: obj[][]) => { 
    let [obj1,obj2,obj3] = objects;

    for (let i = 0; i < obj3.length; i++)     
      obj3[i].value = this.calculateSum(obj1[i].value,obj2[i].value,obj3[i].value);                 
    
    return obj3
}
    /**
     * @returns {string} - The content of json files
     * @memberof CombineJsonFiles
     */
   jsonToString = () => {return JSON.stringify(this.mergeObjects(...this.readFiles()))}
   
    /**     
     * @returns {boolean} - True if the file is written successfully
     * @memberof CombineJsonFiles
     * @throws {Error} - If the file is not found
    */
   writeOutputFile = () => {
        fs.writeFile(this._outputFile, this.jsonToString(), (error:any) => {
            if (error) {
                console.log("An error has occurred ",error);
                return;
            }
         console.log("Data written successfully to the file ");
                
    });
    // if everything went well it will return true.
    return true;  
    }       
}

const combineJsonFiles = new CombineJsonFiles('./data/output.json');
combineJsonFiles.writeOutputFile();


