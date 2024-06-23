// Code your solutions in this file
//const names = [`Rocco`, `Rusty`, `Shiva`];
//function writeCards(names) {
//for (let i = 0; i > names.length, i++;) {
   // console.log(`Thank you for the gift, ${names}`)
//}
//return names;
//}


//console.log(writeCards);

names = ["Robert", "King", "Joey"];

function writeCards(names) {
  let messages = [];
  names.forEach((name) => {
    messages.push(`Thank you, ${name}, for the wonderful surprise gift!`)//+ name + " at " + index + " for the wonderful gift");
  });
  return messages;
}

console.log(writeCards(names));

//function countDown(i) {
    //answer = '';
    //while( i >= 0) {
       //answer = answer + i.toString() + ' ';
       //i--;
    //}
    //return answer;
//}
//console.log(5);
function countDown(n)
{
  if (n >= 0)
  {
    console.log(n);
    n--;  //n is decremented and the new value is stored back to n
    countDown(n);  //Function is called again with the updated value
  }
  else
  {
    return;
  }
}

countDown(10); 