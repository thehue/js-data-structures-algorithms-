let letters = []; // this is our stack

let word = "hello";

let rword = "";

//put letters of word into stack
for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(let i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(word === rword){
    console.log(word + " is palindrome");
}else {
    console.log(word + " is not a palindrome");
}