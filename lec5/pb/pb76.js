// Write a function 'ArrayToObject' which takes in an array of arrays, 
// and returns an object with each pair of elements in the array as a key
// value pair and store the result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country  : ' India ', State  : ' Gujarat ',  City  :  
// ‘Ahmedabad’ }

function ArrayToObject(data) {
    var data_obj = {}
    for (var i = 0; i < data.length; i++) {
        data_obj[data[i][0]] = data[i][1]
    }
    return data_obj;
}
data = [['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']]
console.log(ArrayToObject(data))
