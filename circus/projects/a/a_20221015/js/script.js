//////// NOTES

// state
// 0: out-of-play/destroyed/not-introduced
// 1: is somewhere in the game world but not found
// 2: had been handled by the player (taken then dropped)
// 3: is carried by the player

// rarity
// 0: common
// 1: uncommon 
// 2: rare
// 3: epic

//////// END NOTES

//////// GLOBAL VARIABLES
//////// END GLOBAL VARIABLES



class Item {
    constructor(name, state) {
        this.name = name;
        this.state = state;
    }
};
class Card extends Item { // extend: Card is a subclass of item 
    constructor (name, damage, state, rarity) {
        super(name, state); // super() refers to the parent class item. The arguments are fed into the parent item
        this.damage = damage; // do I need this?
        this.rarity = rarity;
        this.image = image;
    }
};
// class Deck extends Item { 
//     constructor(name, cards, state) {
//         super(name, state); 
//         this.cards = cards; 
//         this.common = common; 
//         this.uncommon = uncommon; 
//         this.rare = rare; 
//         this.epic = epic;
//     }
// };

// all collectible cards
const collectibles = [
    // creating card objects
    card01 = new Card ("card of death", 5, 1, 0, url("cards/tarotbase01.png")),
    card02 = new Card ("two towers", 5, 1, 0, url("cards/tarotbase01.png")),
    card03 = new Card ("lovers", 5, 1, 0, url("cards/tarotbase01.png")),
    card04 = new Card ("king", 5, 1, 0, url("cards/tarotbase01.png")),
    card05 = new Card ("queen", 5, 1, 0, url("cards/tarotbase01.png")),
    card06 = new Card ("gates", 5, 1, 0, url("cards/tarotbase01.png")),
    card07 = new Card ("name", 5, 1, 0, url("cards/tarotbase01.png")),
    card08 = new Card ("thing", 5, 1, 0, url("cards/tarotbase01.png")),
    card09 = new Card ("joker", 5, 1, 0, url("cards/tarotbase01.png")),
    card10 = new Card ("jack", 5, 1, 0, url("cards/tarotbase01.png")),
    card11 = new Card ("bridge", 5, 1, 1, url("cards/tarotbase01.png")),
    card12 = new Card ("flower", 5, 1, 1, url("cards/tarotbase01.png")),
    card13 = new Card ("test", 5, 1, 1, url("cards/tarotbase01.png")),
    card14 = new Card ("ugh", 5, 1, 2, url("cards/tarotbase01.png")),
    card15 = new Card ("okay", 5, 1, 3, url("cards/tarotbase01.png")),
];

//card descriptions
card01.description = "Lorem ipsum";
card02.description = "something";
card03.description = "more random stuff";

// array for cards based on rarity 
// all common cards
var common = [];
// all uncommon cards
var uncommon = [];
// all rare cards
var rare = [];
// all epic cards
var epic = [];

// push to array based on rarity
for (let i of collectibles) {
    if (i.rarity == 0) {
        common.push(i.name);
    } else if (i.rarity == 1) {
        uncommon.push(i.name);
    } else if (i.rarity == 2) {
        rare.push(i.name);
    } else if (i.rarity == 3) {
        epic.push(i.name);
    }
}; 

// console.log(common);
// console.log(uncommon);
// console.log(rare);
// console.log(epic);

// var inventory = []; 
var cardCollection = []; 

// for (let i of collectibles) {
//     if (i.state == 3) {
//         cardCollection.push(i.name);
//     } 
// }; 

// console.log(inventory);
// console.log(cardCollection);

// document.getElementById("gachaCard").onclick = gachaCard;

let btn = document.getElementById("btn");
btn.addEventListener("click", gachaCard);

function gachaCard(name, state) {
    let random = collectibles[Math.floor(Math.random() * collectibles.length)];
    // random.state = 3;
    cardCollection.push(random.name);
    console.log(random);
    console.log(cardCollection);
    // return random
};

console.log(collectibles)



// console.log(getNewCard());
console.log(cardCollection);

// Stringify 
// localStorage.setItem('cards', JSON.stringify(cardCollection));

// Parese after getting it
// JSON.parse(localStorage.getItem('cards'));
// console.log(JSON.parse(localStorage.getItem('cards')))

// function isLocalStorageAvailable(){
//     var test = 'test';
//     try {
//         localStorage.setItem(test, test);
//         localStorage.removeItem(test);
//         return true;
//     } catch(e) {
//         return false;
//     }
// }

// if(isLocalStorageAvailable()){
//     // available
// }else{
//     // unavailable
// }

 

//   console.log(cardStorage);

// function weightRarity(collectibles) {
//     var cumul = 100
//     var random = Math.floor(Math.random() * 100)
  
//     for(var i = 0; i < collectibles.length; i++) {
//       cumul -= collectibles[i].rarity
//       if (random >= cumul) {
//         return collectibles[i]
//       }
//     }
//   }

//   console.log(weightRarity(collectibles));


// for (let i of collectibles) {
//     if (i.state == 3) {
//         inventory.push(i.name);
//     } 
// }; 

// for each Card with a state equal to 3, push the Card name to inventory
// maybe use this same method to create "duplicates" or multiple quantities
// push an object into the cardDeck array if another is found





// instruction followed

// next instruction



// let permbtn = document.getElementById("test")

// // if ( location.protocol != "https:" ) {
// //     location.href = "https:" + window.location.href.substring( window.location.protocol.length );
// // }
// function permission () {
//     // document.getElementById('doeSupported').innerText = 'asking';
//     if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
//         // (optional) Do something before API request prompt.
//         DeviceMotionEvent.requestPermission()
//             .then( response => {
//             // (optional) Do something after API prompt dismissed.
//             if ( response == "granted" ) {
//                 document.getElementById('doeSupported').innerText = 'Yes!!';

//                 window.addEventListener('deviceorientation', (event) => {
//                     document.getElementById("alpha").innerHTML = event.alpha;
//                     document.getElementById("beta").innerHTML = event.beta; 
//                     document.getElementById("gamma").innerHTML = event.gamma; 
//                 });
//                 window.addEventListener('devicemotion', (event) => {
//                     // console.log(`${event.acceleration.x} m/s2`);
//                     document.getElementById("acc_x").innerHTML = event.acceleration.x;
//                     document.getElementById("acc_y").innerHTML = event.acceleration.y;


//                 });
//             }
//         })
//             .catch( console.error )
//     } else {
//         alert( "DeviceMotionEvent is not defined" );
//         document.getElementById('doeSupported').innerText = 'still no';
//     }
// }
// permbtn.addEventListener( "click", permission );


// let instruct = document.getElementById('instructions');

// // give instruction
// function getgachaCard() {
//     // instruct.innerHTML = "";
//     instruct.innerHTML = "Please turn over your device";

//     window.addEventListener('deviceorientation', (event) => {
//         document.getElementById("alpha").innerHTML = event.alpha;
//         document.getElementById("beta").innerHTML = event.beta; 
//         document.getElementById("gamma").innerHTML = event.gamma; 

//         // console.log(event.gamma)


//         // console.log(betaAbs)
    
//         if (Math.abs(event.gamma) <= 5 && Math.abs(event.beta) > 177
//          ) {
//             instruct.innerHTML = "Flip Card!"; 
//             console.log("true");
//         } else {
//             console.log("false");
//         }
//     });
// };


// getgachaCard()

// let mainText = document.getElementById("main-text");
// let startButton = document.getElementById("startButton")

// // from: https://stackoverflow.com/a/14301832
// window.mobileAndTabletcheck = function() {
//     var check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// };

// if(window.mobileAndTabletcheck()){
//     mainText.innerHTML = "🌀";
//     document.getElementById("getGyroAccess").style.display = "block";
//     startButton.addEventListener("click", permission)

// }else{
//     mainText.innerHTML = "Please visit this page on a mobile phone";
// }


let on = document.getElementById("on");
let off = document.getElementById("off");
let toggle = document.getElementById("onofftoggle");

let hertzDisplay = document.getElementById("hertzDisplay");
let minSlider = document.getElementById("min");
let minLabel = document.getElementById("min-label");
let maxSlider = document.getElementById("max");
let maxLabel = document.getElementById("max-label");


// let volumeRange = document.getElementById("volumeInput");

let context = new AudioContext();
let destination = context.destination;

let oscillator = context.createOscillator();
oscillator.type = "triangle";
oscillator.frequency.value = 440;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(destination);

let oscillatorStarted = false;

// // initialise the volume:
// // we divide the value from the slider by 100 to bring it back to
// // a value between 0 and 1
gain.gain.value = 1;

let minHz = 65;
let maxHz = 1050;
let initalMin = 65;
let initalMax = 1050
minSlider.min = minHz;
minSlider.max = maxHz;
minSlider.value = initalMin;
minLabel.innerHTML = initalMin;
minHz = initalMin;

maxSlider.min = minHz;
maxSlider.max = maxHz;
maxSlider.value = initalMax;
maxLabel.innerHTML = initalMax;
maxHz = initalMax;


minSlider.addEventListener("input", ()=>{
    minHz = Number(minSlider.value);
    minLabel.innerHTML = minSlider.value;
})
maxSlider.addEventListener("input", ()=>{
    maxHz = Number(maxSlider.value);
    maxLabel.innerHTML = maxSlider.value;
})

// let midHz = (minHz + maxHz)/2;
function map(value, x1, y1, x2, y2){
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
  }

let mappedHertz = map(1, 0, 100, minHz, maxHz);
// console.log("mapped hertz is", mappedHertz)
oscillator.frequency.value = mappedHertz;
hertzDisplay.innerHTML = mappedHertz;

//   // on button click event
// on.addEventListener("click", ()=>{
//     if(!oscillatorStarted){
//         oscillator.start(0);
//         oscillatorStarted = true;
//     }

//     // instead of setting full volume:
//     // gain.gain.value = 1;
//     // let us stay true to the volume slider:
//     gain.gain.value = 1;
// });

// off.addEventListener("click", ()=>{
//     gain.gain.value = 0;
// });



// volumeRange.addEventListener("input", ()=>{
//     gain.gain.value = volumeInput.value/100;
//   })


let showDebug = false;
let debugButton = document.getElementById("debugbutton");
let debugInfo = document.getElementById("debug");
debugButton.addEventListener("click", ()=>{
    showDebug = !showDebug;
    debugInfo.style.display = showDebug?"block":"none";
    
})



// let btn = document.getElementById("button")

// // if ( location.protocol != "https:" ) {
// //     location.href = "https:" + window.location.href.substring( window.location.protocol.length );
// // }
function permission() {
    document.getElementById("gyro-text").innerHTML = "getting access to gyroscope.";

    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
        // (optional) Do something before API request prompt.
        DeviceMotionEvent.requestPermission()
            .then( response => {
            // (optional) Do something after API prompt dismissed.
            if ( response == "granted" ) {
                // document.getElementById("gyro-text").innerHTML = "Ready.";
                document.getElementById("getGyroAccess").style.display = "none";
                document.getElementById("sound-interface").style.display = "block";
                // if(!oscillatorStarted){
                //     oscillator.start(0);
                //     oscillatorStarted = true;
                // }
                // gain.gain.value = 1;




                window.addEventListener('deviceorientation', (event) => {
                    document.getElementById("alpha").innerHTML = event.alpha;
                    document.getElementById("beta").innerHTML = event.beta;
                    document.getElementById("gamma").innerHTML = event.gamma;

                    // let newHertz = map(Math.abs(event.gamma), 0, 90, minHz, maxHz);
                    // // simple solution
                    // if(Math.abs(event.beta) > 150){
                    //     oscillator.frequency.value = 65;
                    //     hertzDisplay.innerHTML = Math.round(65)

                    // }else{
                    //     oscillator.frequency.value = 400;
                    //     hertzDisplay.innerHTML = Math.round(400)
                    // }
                    
                    // jean solution
                    if (Math.abs(event.gamma) <= 10 && Math.abs(event.beta) > 170 ) {
                        
                        oscillator.frequency.value = 400;
                        hertzDisplay.innerHTML = Math.round(400)
                    } else {
                        oscillator.frequency.value = 65;
                        hertzDisplay.innerHTML = Math.round(65)
                    }

                });
                window.addEventListener('devicemotion', (event) => {
                    // console.log(`${event.acceleration.x} m/s2`);
                    document.getElementById("acc_x").innerHTML = event.acceleration.x;
                    document.getElementById("acc_y").innerHTML = event.acceleration.y;


                });
            }
        })
            .catch( console.error )
    } else {
        // alert( "DeviceMotionEvent is not defined" );
        // document.getElementById('doeSupported').innerText = 'still no';
        document.getElementById("gyro-text").innerHTML = "Cannot access your phone's gyroscope.";

    }
}
// btn.addEventListener( "click", permission );

