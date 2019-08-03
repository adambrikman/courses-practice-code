function upper(strings,...values) {
  var str = "";
  
  for(let i = 0; i < strings.length; i++) {
    
    // Append uppercased-values strings if i is past the first word (e.g. > 0)
    if(i > 0) {      
      str += String(values[i-1]).toUpperCase();
    }
    
    // Append the first word to our string
    str += strings[i];
  }
    
  return str;
  
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
