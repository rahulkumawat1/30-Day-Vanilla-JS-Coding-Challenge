const addItems = document.querySelector('.add-items');      //form
const itemsList = document.querySelector('.plates');        //ul

const items = JSON.parse(localStorage.getItem('items')) || [];

function populateList(arr = [], htmlList){

    htmlList.innerHTML = arr.map((item,i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked': ''}>
                <label for="item${i}">${item.text}</label>
            </li>
        `;
    }).join('');
    
}

function addItem(e){
    e.preventDefault();
    const inputText = addItems.querySelector('input[name="item"]');
    const item = {
        text: inputText.value,
        done: false
    };

    items.push(item);

    localStorage.setItem('items',JSON.stringify(items));

    // console.table(items);

    populateList(items,itemsList);

    this.reset();
}

function toggleDone(e){
    if(e.target.tagName != 'INPUT') return;
    const index = e.target.dataset.index;
    // console.log(index);
    items[index].done = !items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click',toggleDone);

populateList(items, itemsList);
