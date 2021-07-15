//verileri listeleme
let ul=document.querySelector('#dataList')
let liste=document.querySelector('#liste');
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response)=>response.json())
//  console.log(data)
.then((data)=>{
    data.map(item=>{
      let foodList=document.createElement('li')
      let tag=document.createElement("button");
      foodList.innerHTML=item.title;
      ul.appendChild(foodList);
      foodList.appendChild(tag)
      console.log(foodList)
      tag.innerHTML= `<i class="bi bi-suit-heart-fill"></i>`
})

//favori ekle-çıkar işlemi
let addToFav='<i class="bi bi-suit-heart-fill"></i>';
let remove='<i class="bi bi-trash-fill"></i>';

$("#dataList button").each(function(e){
  if(localStorage.getItem($(this).parent().contents()[0].nodeValue)){
    $(this).html(remove);
  }else{
    $(this).html(addToFav);
  }
})

$('#dataList button').click(function(e){
  var nodeVal=$(this).parent().contents()[0].nodeValue;
  if(localStorage.getItem(nodeVal)){
    localStorage.removeItem(nodeVal);
    $(this).html(addToFav);
  }else{
    localStorage.setItem(nodeVal,"kocaman kalp");
    $(this).html(remove)
  }
})
//listede arama yapma
let searchBar=document.getElementById('searchBar');
searchBar && searchBar.addEventListener('input',function(e){   
let filter=e.target.value.toUpperCase();
let dataList=document.getElementById('dataList');
let a=document.createElement('a');
let li=dataList.getElementsByTagName('li');
  for(let i=0;i<li.length;i++){
     a=li[i].getElementsByTagName("a")[0];
    if(li[i].innerText.toUpperCase().indexOf(filter)>-1)
    {
      li[i].style.border="3px solid red"
    }else{
      li[i].style.display="none"
    }
  }
    console.log("tıkla bakalım ");
})  
    
})
.catch((err)=>console.log(err));
//Kullanıcı bilgisinin gösterimi
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res => res.json())
.then(nameData => {
  document.getElementById("myName").innerHTML = "Merhaba, " + nameData.name + "<br>" +" Hoşgeldiniz";
});


