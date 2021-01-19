'use strict';
var buttons1=document.querySelectorAll('input[name="product1"]');
var labels1=document.querySelectorAll('label[for="product1"]')
var arr=Array.from(buttons1)



let cart1=0
let cart2=0
let cart3=0

let label1=0
let label2=0

let price1=[1000,2000,3000]
let price2=[500,700,900]
let price3=[250,550,750]

let amount=0


let opt1_ispressed=false
let opt2_ispressed=false

for(let i in arr){
  arr[i].addEventListener('click', function(){
    cart1=price1[i]
    label1=labels1[i].innerHTML
    opt1_ispressed=true
    console.log(label1)


  })
}


var buttons2=document.querySelectorAll('input[name="product2"]');
var labels2=document.querySelectorAll('label[for="product2"]')
var arr1=Array.from(buttons2)

for(let i in arr1){
  arr1[i].addEventListener('click', function(){
    cart2=price2[i]
    let text1=arr1[i].innerHTML
      label2=labels2[i].innerHTML
    opt2_ispressed=true
    console.log(label2)
  })
}


var buttons2=document.querySelectorAll('input[name="add1"]');

var arr2=Array.from(buttons2)

var add_list=document.querySelectorAll('.additional');

var additional_list=[]

for(let i in arr2){
  cart3=0
  arr2[i].addEventListener('change', function(){
    if (arr2[i].checked){

      additional_list.push([add_list[i].innerHTML, price3[i]])
      add_add_list(additional_list)


      cart3+=price3[i]
      update()
    }
    if (arr2[i].checked != true){

      cart3-=price3[i]


      additional_list.splice(getLast1(additional_list, price3[i]),1)
      add_add_list(additional_list) 
      update()
    }   
  })}


function getLast1(arr, value){
  var temparr=[]
  var max=0
  arr.forEach(function(item, index, array) {
  if(item[1]==value){
  temparr.push(index)}
  max = getMaxOfArray1(temparr)} )
  return max
}

function getMaxOfArray1(numArray) {
  return Math.max.apply(null, numArray);
}





var addhtml= document.getElementById('additional_list')
function add_add_list(arr){
  console.log(arr)
  addhtml.innerHTML=''
  for(let i in arr){

    addhtml.innerHTML+=`<li>  ${arr[i][0]} ${arr[i][1]} `}


  }






function update(){
  document.getElementById('amount').innerHTML=total1+total2+cart3
}




//сумма
function sum_array(arr){
  return arr.reduce((a, b) => a + b, 0)
}



var spisok=[]

var total1=0

var option1_quantity=0
var opt1_arr=[]
var opt1_plus = document.getElementById('opt1_plus')


opt1_plus.addEventListener('click',function(){
  if(opt1_ispressed==true)
  {
document.getElementById('opt1_total').innerHTML=++option1_quantity
opt1_arr.push(cart1)

total1=sum_array(opt1_arr)


spisok.push([1,label1, cart1])


add_buy_list(spisok)


update()
}
})


var opt1_minus = document.getElementById('opt1_minus')
opt1_minus.addEventListener('click',function(){
  if(option1_quantity>0){
document.getElementById('opt1_total').innerHTML=--option1_quantity
opt1_arr.pop(cart1)




total1=sum_array(opt1_arr)


spisok.splice(getLast(spisok,1), 1)


add_buy_list(spisok)

update()
}
})




var total2=0

var option2_quantity=0
var opt2_arr=[]
var opt2_arr_labels=[]


var opt2_plus = document.getElementById('opt2_plus')


opt2_plus.addEventListener('click',function(){
  if(opt2_ispressed==true)
  {document.getElementById('opt2_total').innerHTML=++option2_quantity
opt2_arr.push(cart2)
opt2_arr_labels.push(label2)

console.log(label2)
console.log(opt2_arr_labels)

total2=sum_array(opt2_arr)
console.log(total2)

spisok.push([2,label2, cart2])
console.log(spisok)

add_buy_list(spisok)
update()


}
})


var opt2_minus = document.getElementById('opt2_minus')
opt2_minus.addEventListener('click',function(){
  if(option2_quantity>0){
document.getElementById('opt2_total').innerHTML=--option2_quantity
opt2_arr.pop(cart2)

console.log(opt2_arr)

total2=sum_array(opt2_arr)
console.log(total2)

spisok.splice(getLast(spisok,2), 1)
console.log(spisok)

add_buy_list(spisok)

update()

}
})




var sp=[[2, "стандарт 700", 700],[1, "комфорт 3000", 3000],[1, "эконом 1000", 1000],[2, "эконом 500", 500],
[2, "стандарт 700", 700],[3, "комфорт 3000", 3000],[1, "эконом 1000", 1000],[2, "эконом 500", 500] ]





function getLast(arr, value){
  var temparr=[]
  var max=0
  arr.forEach(function(item, index, array) {
  if(item[0]==value){
  temparr.push(index)}
  max = getMaxOfArray(temparr)} )
  return max

}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}





let array_buttons = []
function add_buy_list(arr){
  array_buttons=[]

  let count=0
  buy_list.innerHTML=''
  for(let i in arr){
    buy_list.innerHTML+=
        `<span id='del${i}'><li>
     ${++count} ${arr[i][1]} ${arr[i][2]} 
      </span>`
     

 //   `<span id='del${i}'><li>
   //  ${++count} ${arr[i][1]} ${arr[i][2]} 
    // <button id="delete${i}">remove</button> </span>`
   //  array_buttons.push('delete'+i)

     //add_listeners_delete_buttons()


}


  }

// not works
function add_listeners_delete_buttons(){
for (let i in array_buttons){
  document.getElementById(array_buttons[i]).addEventListener('click',
    function(){console.log(spisok[i])

    document.getElementById('del'+i).remove()
    if(spisok[i][0]==1){
      opt1_minus.click()
    }
    if(spisok[i][0]==2){
opt2_minus.click()
    }
    })
    update()

  
}
}