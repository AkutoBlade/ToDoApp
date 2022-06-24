
function create(){
    let container = document.getElementById('container')
    container.innerHTML=`
    <div id="Enter">
    <button type="button" id="SortBy">Sort By</button>
    <input id="Item" type="text"  placeholder="Enter your item"></input>
    <button type="button" id="AddItem">Add Item</button>
    </div>
    <br>
    <div id="ItemBox">
    <div id="ListBox">
    <ul id="#ul"></ul>
    </div>
    </div>
   `
}

create()



const btnAddItem = document.querySelector('#AddItem')
const btnSortBy = document.querySelector('#SortBy');

let lists= [];
let listItem = JSON.parse( localStorage.getItem('records'))?
JSON.parse( localStorage.getItem('records')) : lists; 



btnAddItem.addEventListener('click',()=>{
    let items = document.querySelector('#Item').value;
    let ul= document.querySelector('ul');
    let i=lists.length;
    
    ul.innerHTML +=`
    <li id="List">
    <input class="bg-primary icon" type="checkbox" id="ListItem">
    <label>${items}</label>
    <i class="bi bi-x-circle-fill press" onclick="remove(${i})"></i>
    </li>`;

    lists.push(
        {
            id: i++,
            item:document.querySelector('#Item').value,
            createDate: new Date()
        }
    );
    localStorage.setItem('records',JSON.stringify(lists));

    function loadData() {
        console.table(lists);
    };
    
    loadData() 

    
});



// localStorage.removeItem('records');

function remove(id){
    console.log(id+lists);
 if(id > -1){
    lists.splice(id, 1);
    localStorage.setItem('records', JSON.stringify(lists));
 }
}

function showData(){
    document.querySelector('#')
}

