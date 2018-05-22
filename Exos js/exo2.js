function countVowels(string) {
  //on utilise une regex pour definir les voyelles		
  var vowels = string.match(/[aeiou]/gi);
  //on utilise alert pour le nombre des voyelles
  alert(vowels.length);
}

countVowels("helloooo");

