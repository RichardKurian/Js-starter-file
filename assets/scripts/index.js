// const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// function strip(bandName) {
//   return bandName.replace(/^(a |the |an )/i, '').trim();
// }

// const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// console.log(sortedBands)

// const num=10;

// var name = window.prompt("Enter any no: ");
// // alert("Your name is " + name);

// if(name==num){
//     console.log("correct guess");
// }else{
//     console.log("better luck next time");
// }


console.log("learning ES6 reduce")

const timeNodes= Array.from(document.querySelectorAll('[data-time]'));

console.log(timeNodes);

const seconds=timeNodes
              .map(node=>node.dataset.time)
              .map(timeCode=>{
              
                  const [mins, secs] = timeCode.split(':').map(parseFloat);
                  return (mins*60)+secs;
              })
              .reduce((total,vidSeconds)=>{
                  return (total+vidSeconds);
              })

              console.log(seconds);

 
 
 let secondsLeft = seconds;
 const hours = Math.floor(secondsLeft / 3600);
 secondsLeft = secondsLeft % 3600;

 const mins = Math.floor(secondsLeft / 60);
 secondsLeft = secondsLeft % 60;

 console.log(hours, mins, secondsLeft);





