var words = ["ground", "control", "to", "major", "tom"];


function map (arr , change){
  var newArr = [];
  for (i=0 ; i < arr.length; i++){
    var value = change(arr[i])
    newArr.push(value);
  }
  return newArr;
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

const a = map(words, function(word) {
  return word.split('').reverse().join('');
});

