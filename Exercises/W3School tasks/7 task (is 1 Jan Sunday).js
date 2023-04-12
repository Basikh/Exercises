// #7
// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

for(let i=2014; i<=2050; i++)
{
            let c = new Date("January 01" + i);
            let x = c.getDay();
                if(x === 0){
                    console.log(i + ", 01 January is Sunday");
                }
                else{
                    console.log(i + ", 01 January is NOT Sunday");
                }
}