input = ['hello world', 'hello world'];

resultArr =input.join('');
getCharacterCount(resultArr);

function getCharacterCount(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};