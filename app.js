let gcd = 0;
function mygcd(){
    const x = document.getElementById("inp1").value;
    const y = document.getElementById("inp2").value;
    for ( let j = 1; j <= Math.max(x,y); j++ ){
      if ( x % j === 0 && y % j === 0){
       gcd = j;
      }
    }
    alert(gcd)
  }
function mylcm() {
    const xx = document.getElementById("inp1").value;
    const yy = document.getElementById("inp2").value;
    alert((xx*yy)/gcd)
    return;
    
  }
 
document.querySelector('#buton1').addEventListener('click', mygcd)
document.querySelector('#buton2').addEventListener('click', mylcm)















// function mygcd(){
//   const x = document.getElementById("inp1").value;
//   const y = document.getElementById("inp2").value;
//   for ( let j = Math.max(x, y); j > 0; j-- ){
//     if ( x % j === 0 && y % j === 0){
//      alert(j)
//      return;
//     }
//   }
// }
// function mylcm() {
//   const xx = document.getElementById("inp1").value;
//   const yy = document.getElementById("inp2").value;
//   alert((xx*yy)/mygcd())
//   return;
  
// }

// document.querySelector('#buton1').addEventListener('click', mygcd)
// document.querySelector('#buton2').addEventListener('click', mylcm)