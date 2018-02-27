// https://www.codewars.com/kata/format-words-into-a-sentence

function formatWords (words) {
  if (words === [] || words === null) return '';
  words = words.filter(function(n){ return n !== ''; });
  return words.map(function(a, i){ if (i === words.
    length-2) return a + ' and'; return a + ','; }).join(' ').slice(0, -1);
}