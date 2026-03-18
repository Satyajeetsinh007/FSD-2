const shape=[
    {'name':'circle','diameter':'8'},
    {'name':'square','side':'10'}
]

var ps=require('fs');
ps.writeFileSync('shape.txt',JSON.stringify(shape));

var perimeter=(shape[0].diameter)*3.14;
console.log('peri of circle'+perimeter)

var peri_sq=(shape[1].side)*4
console.log('peri of square'+ peri_sq);

// ps.appendFileSync('shape')