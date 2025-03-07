export default function coloredCells(n) {
    let start = 1;
    for (let i=n;i>1;i--){
        start+= (i-1) *4;
    }
    return start;

};
console.log(coloredCells(5))
console.log(coloredCells(6))