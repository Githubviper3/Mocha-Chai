import coloredCells from "../src/L-2579.js";
import {expect} from "chai"; 

function TestColourCells(testcase ,expected){
    describe("Test Suite", function (){
        it("Test check for collored cells",function (){
            expect(coloredCells(testcase)).to.equal(expected)
        })
    })
}

TestColourCells(1,1)
TestColourCells(2,5) 
TestColourCells(3,13) 
TestColourCells(4,25)
TestColourCells(5,41)
TestColourCells(6,61)
