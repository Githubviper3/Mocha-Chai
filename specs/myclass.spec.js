import MyClass from "../src/myclass.js"; // Use import instead of require
import {expect} from "chai"; // Use import for Chai
let obj = new MyClass();
// const testcases = [
//     [2, [[1,0]],[[0,1],[1,0]],[false,true]],
//     [2, [],  [[1,0],[0,1]],[false,false]],
// [3, [[1,2],[1,0],[2,0]],[[1,0],[1,2]],[true,true]],
// [5,[[0,1],[1,2],[2,3],[3,4]],[[0,4],[4,0],[1,3],[3,0]],[true,false,true,false]],
// [4,[[2,1],[3,2],[1,0]],[[2,0],[1,3],[0,3],[3,0]],[true, false, true, false]],
// [5,[[4,3],[4,1],[4,0],[3,2],[3,1],[3,0],[2,1],[2,0],[1,0]],[[1,4],[4,2],[0,1],[4,0],[0,2],[1,3],[0,1]],[false,true,false,true,false,false,false]]
// ]


function TestProgram(testcase,expected){
    describe("Test Suite", function () {
        it("Test check for prerequisites", function () {
            expect(obj.checkIfPrerequisite(testcase[0],testcase[1],testcase[2])).to.have.same.members(expected)
        });
    });
}


TestProgram([2, [[1,0]],[[0,1],[1,0]]],[false,true])
TestProgram([2, [],  [[1,0],[0,1]]],[false,false])
TestProgram([3, [[1,2],[1,0],[2,0]],[[1,0],[1,2]]],[true,true])
TestProgram([5,[[0,1],[1,2],[2,3],[3,4]],[[0,4],[4,0],[1,3],[3,0]]],[true,false,true,false])
TestProgram([4,[[2,1],[3,2],[1,0]],[[2,0],[1,3],[0,3],[3,0]]],[true,false,true,false])
TestProgram([5,[[4,3],[4,1],[4,0],[3,2],[3,1],[3,0],[2,1],[2,0],[1,0]],[[1,4],[4,2],[0,1],[4,0],[0,2],[1,3],[0,1]]],[false,true,false,true,false,false,false])

