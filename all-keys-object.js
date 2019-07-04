function getAllKeys(object) {
    function iter(o, p) {
        if (Array.isArray(o)) { return; }
        if (o && typeof o === 'object') {
            var keys = Object.keys(o);
            if (keys.length) {
                keys.forEach(function (k) { 
                    iter(o[k], 
                    p.concat(k));
                    result.push(k); 
                });
		
            }
            return;
        }
    }
    var result = [];
    iter(object, []);
    return result;
}

//var object = {  a: 5, b: { c: { d: 10 } }};
var object = {
    id: 42,
    emp: {
        empCode: "AI1234",
        empData: {
	    name: "Akash",
            dept: "Eng",
	    deptCode: "JI07",

        }
    },
    skill: [ {name: 'Angular'}]
}

console.log(getAllKeys(object));