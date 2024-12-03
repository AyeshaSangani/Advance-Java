

//   ===========SENDING MSG WITH NAME ==========



let msg = ()=>{
    let a = prompt("Enter Name")

    let text = `🎉🌟 Happy Birthday! 🌟🎉 ${a} May your day be filled with laughter, love, and all the things that make you happiest. Here's to another year of incredible adventures, cherished moments, and dreams coming true. Enjoy every moment—you deserve it! 🥳🎂🎁`

    console.log(text);
}

// let run = ()=>{
//     msg()
//     msg()
//     msg()
// }

document.getElementById("run").addEventListener("mouseover" , ()=>{
    msg()
    msg()
    msg()
} )