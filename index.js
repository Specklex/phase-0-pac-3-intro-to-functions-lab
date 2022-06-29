function shout(string){
return string.toUpperCase();

}
//console.log(string.shout())

function whisper(string){
    return string.toLowerCase();
}
//console.log(string.whisper())

function logShout(string){
   console.log(shout(string))
}

function logWhisper(string){
    console.log(whisper(string))
 }

function sayHiToHeadphonedRoommate(string){
    console.log(string)
   
    if ((string === string.toUpperCase())){
    return('YES INDEED!')}
    
    else if((string === string.toLowerCase())){
        return(`I can\'t hear you!`)
    }
    
    else if (string === "Let\'s have dinner together!") {
        return ('I would love to!')}
    
   
}
