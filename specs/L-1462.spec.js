import checkIfPrerequisite  from "../src/L-1462.js"; 
import {expect} from "chai"; 

function TestcheckPrereq(testcase,expected){
    describe("Test Suite", function () {
        it("Test check for prerequisites", function () {
            expect(checkIfPrerequisite(testcase[0],testcase[1],testcase[2])).to.have.same.members(expected)
        });
    });
}


TestcheckPrereq([2, [[1,0]],[[0,1],[1,0]]],[false,true])
TestcheckPrereq([2, [],  [[1,0],[0,1]]],[false,false])
TestcheckPrereq([3, [[1,2],[1,0],[2,0]],[[1,0],[1,2]]],[true,true])
TestcheckPrereq([5,[[0,1],[1,2],[2,3],[3,4]],[[0,4],[4,0],[1,3],[3,0]]],[true,false,true,false])
TestcheckPrereq([4,[[2,1],[3,2],[1,0]],[[2,0],[1,3],[0,3],[3,0]]],[true,false,true,false])
TestcheckPrereq([5,[[4,3],[4,1],[4,0],[3,2],[3,1],[3,0],[2,1],[2,0],[1,0]],[[1,4],[4,2],[0,1],[4,0],[0,2],[1,3],[0,1]]],[false,true,false,true,false,false,false])