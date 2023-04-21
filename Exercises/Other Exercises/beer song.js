beerSong();
function beerSong(){
    let count = 99;
    while (count > 1) {      
        console.log(count + " bottles of beer, " + count + " bottles of beer. Take 1 down, pass it around, ");
        count--; 
        console.log(count + " bottles of beer on the wall.");
    }
    if(count = 1){
        console.log(count + " bottles of beer, " + count + " bottles of beer.Take 1 down, pass it around, no more bottles of beer on the wall. No more bottlesof beeron thewall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
    }
}