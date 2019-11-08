function testOdd(num) {
    if(num & 1 == 1){
        console.log("odd");
    } else {
        console.log("Even");
    }
}

testOdd(13);


function testEven(num) {
	return num % 2 == 0
}
testEven(3);

aray = [1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0];
var count = 0;
var arrLength = aray.length;
console.log("arrLength", arrLength);
for(var i =0; i <= aray.length; i++){
	if(aray[i] == 1){
		count++;
	}
//console.log("count", count);
}
aray.length = 0;
for(var i =0; i<= count; i++){
	aray.push(0);
}
for(var i = count +1 ; i< arrLength; i++){
	aray.push(1);
}
console.log(aray);