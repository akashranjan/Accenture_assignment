//Let Example

for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}


//var example
for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}

//this example

function getFullName(fName, lName) {
    this.firstName = fName;
    this.lastName  = lName;
  }

  var x = new getFullName("Akash", "Ranjan");

