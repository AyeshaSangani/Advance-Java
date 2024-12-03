// function run() {
//     alert("Are You Sure")
// }


// // ============ARROW FUNCTION MOSTLY USED IN JAVA=========

let run = ()=>{
    alert("Are You Sure")
}


// ==========ADD EVENT LISTNER=========
// !!!!!=========DONE BY DIFFERENT METHODS=============!!!!!!!
  
            //   --------METHOD 01-----------
// document.getElementById("run").addEventListener("click", ()=>{
//     alert("Are You Sure")
// })

            // -------METHOD 02-------------
// document.getElementById("run").addEventListener("click", run)
// alert("Are You Sure")

     
        //    --------METHOD 03----------
document.getElementById("run").addEventListener("mouseover", function(){
    alert("Are You Sure")
})