
import "mocha";
import { expect } from "chai";
import { CombineJsonFiles } from "../src/main";

//wrote the basic tests here.

describe("Combine Json Files", () => {
    describe("Combining json files process", () => {
        it("have output path", () => {
            const instance = new CombineJsonFiles('./data/output.json');
            expect(instance._outputFile).to.be.a('string').to.have.length.greaterThan(0);
        });
        
        it("should read files", () => {
            const instance = new CombineJsonFiles('./data/output.json');
           const files = instance.readFiles();
            expect(files).to.be.a('array').to.have.length.greaterThan(0);
        })

        it("should calculate sum", () => {
            const instance = new CombineJsonFiles('./data/output.json');
            instance.readFiles();
            instance.calculateSum(1,2,3);
            expect(instance.calculateSum(1,2,3)).to.be.a('string').to.have.length.greaterThan(0);
        })

        it("should combine objects", () => {
            const instance = new CombineJsonFiles('./data/output.json');
           const files = instance.readFiles();
            instance.mergeObjects(files[0],files[1],files[2]);
            expect(instance.mergeObjects(files[0],files[1],files[2])).to.be.a('array').to.have.length.greaterThan(0);
        })
        it("should write output", async() => {
            const instance = new CombineJsonFiles('./data/output.json');
            instance.readFiles();
            const res = await instance.writeOutputFile();   
            
                expect(res).to.be.a('boolean').to.be.true;
            

        })
    });
});