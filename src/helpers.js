export function shuffleLetters(text){
	var a = text.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

export function getScore(length, isPanagram){
    if(length == 4){
        return 1
    }else if(!isPanagram){
        return length;
    }else{
        return length+7
    }
}

export function findUnique(str){
  // The variable that contains the unique values
  let uniq = "";
   
  for(let i = 0; i < str.length; i++){
    // Checking if the uniq contains the character
    if(uniq.includes(str[i]) === false){
      // If the character not present in uniq
      // Concatenate the character with uniq
      uniq += str[i]
    }
  }
  return uniq;
}