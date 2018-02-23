function formatWords (words) {
  if (!words.length || words.length === null) return '';
  words = words.filter(function(n){ return n !== ''; });
  return words.map(function(a, i){ if (i === words.length-2) return a + ' and'; return a + ','; }).join(' ').slice(0, -1);
}