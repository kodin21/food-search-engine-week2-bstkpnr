//verileri listeleme
let ul=document.querySelector('#dataList')
let liste=document.querySelector('#liste');
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response)=>response.json())
// console.log(data)
.then((data)=>{
    data.map(item=>{
    const foodList=document.createElement('li');
    foodList.innerHTML=item.title;
    ul.appendChild(foodList);
    console.log(foodList)
})
let searchBar=document.getElementById('searchBar');
searchBar && searchBar.addEventListener('keyup',function(){
    console.log("tıkla bakalım ")
})    
    
    
})
.catch((err)=>console.log(err));
//Kullanıcı bilgisinin gösterimi
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res => res.json())
.then(nameData => {
  document.getElementById("myName").innerHTML = "Merhaba, " + nameData.name + "<br>" +" Hoşgeldiniz";
});