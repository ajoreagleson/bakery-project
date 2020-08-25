// for(let a = 0; a < 31; a++){
// 	console.log("No." + a + ":" + "My name is ugo.")
// }

//const arr = ['Victor', 'Ugo' , 'roy', 'Sharon'];
//let a = arr.length;
// for(let i = 1; i < a ; i++){
// 	console.log('Yo bro')
// }

//for(let b =0; b < a; b++){
  //console.log('No.' + +b + ':' + arr[b]);
//}
// for(let s = 0; s < 21; s++){
// 	console.log("No." + s + ":" + "My name is roy i am stupid ");
// }
// for(let a = 1; a < 19; a++){
// 	console.log('No.' + a + ':' + 'hey am victor i love been stupid')
// }

//let i = 0;
//while(i < 20){
//	console.log('No.' + i + ':'+ 'Ugo');
//	i++;
//}
//let a = 0;
//while(a < 10){
//	console.log("Emeka" + a + ":" + "How are you doing");
//	a++;
//}
//for(a = 0; a < 50; a++){
//	console.log("No" + a + ":" + "hallo");
//}
//const arr = ["Roy","Victor","Ugo"];
//let i = arr.length;
//for(let a = 0; a < 3; a++){
//	console.log("Name." + a + ":" + arr[a]);
//}
//let a = 0;
//while(a < 20){
//	console.log('No.' + a + ':' + "My name" );
//	a++
//}
//for(let i = 0; i < 20; i++){
//	console.log("No." + i + ":" + "My name is roy")
//}
//let i = 0;
//while(i < 21){
//	if(i < 0){
//		break;
//	}else{
//	console.log("No" + i + ":" + "How are you doing");
//}
//	i++;
//}
/*
const arr = [1,2,3,4,5,6];
   let sum = 0;
   for(let i=0; i < arr.length; i++){
   	sum = sum + arr[i];
   }
   console.log(sum);
*/

const phone = 45000;
const casing = 2000;
const earpiece = 10000;
const dellBattery = 45000;

const arr = [phone, casing, earpiece, dellBattery];

function storeArray(){
	  let sum =0;
	for(let i = 0; i <= (arr.length-1); i++){
          sum += arr[i];
	}
	console.log("Total sum in cart: N "+ sum);
}

storeArray();














