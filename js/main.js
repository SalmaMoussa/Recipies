
var rowData = document.getElementById('rowData');
var links = document.querySelectorAll('nav .nav-link');
var dropdownItem = document.querySelectorAll('.dropdown-item');
var dataContainer = [];



//get api for Recipes

getRecipies('tomato');

function getRecipies(x){

var req = new XMLHttpRequest();

req.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${x}`);

req.send();

req.addEventListener('readystatechange', function () {
    if (req.readyState == 4 && req.status == 200) {

        req.response;

        console.log(req.response);

        dataContainer =  JSON.parse(req.response).recipes;

        console.log(dataContainer);

        displayData();
    }
});
}





function displayData(){

    div =''

    for(i=0;i<dataContainer.length;i++){

        div += ` <div class="col-md-4">
        <div class="item">
        <a href=' ${dataContainer[i].source_url}'target='_blank'>
        <img src='${dataContainer[i].image_url }'class="w-100"/>
        </a>
            <h2 class="mt-3 text-center">${dataContainer[i].title}"</h2>
            <p  class="mt-3 text-center"> publisher:${dataContainer[i].publisher}</p>
        </div>
    </div>`
    }

    rowData.innerHTML = div ;

}

for( var i=0;i<links.length;i++){

    links[i].addEventListener('click',function(e){
      var innerWord = e.target.innerHTML;

      console.log(innerWord);

      getRecipies(innerWord);
    })
}


