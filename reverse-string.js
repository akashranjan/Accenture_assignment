function reverseString(s) {
    var reverseedString = '';
    for (var i = s.length - 1; i >= 0; i--)
        reverseedString += s[i];
    return reverseedString;
  }
  
  reverseString("akashRanjan");