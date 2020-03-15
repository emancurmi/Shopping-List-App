'use strict'

const LIST = [
    { id: 0, name: "apples", checked: false },
    { id: 1, name: "oranges", checked: false },
    { id: 2, name: "milk", checked: true },
    { id: 3, name: "bread", checked: false }
];

function renderitemhtml(item) {
    return `
     <li id='${item.id}'>
        <span class="shopping-item shopping-item ${item.checked}">${item.name}</span >
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
     </li >`;
}

function renderitemlist() {
    for (let i = 0; i < LIST.length; i++) {
        ('.js-shopping-list').append(renderitemhtml(LIST[i]));
    }
}

function createiteminlist(itemName) {
    let item = LIST[LIST.length];
    let nextindex = item.id + 1;
    STORE.push({ id: nextindex, name: itemName, checked: false });
}

function additem() {
    console.log("Add Button Clicked");
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const newitem = $('.js-shopping-list-entry').val();
        createiteminlist(newitem);
        renderitemlist();
    });
}

function checkitem() {
    console.log("Check Button Clicked");
    $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
        const id = getItemIdFromElement(event.currentTarget);

    });
}

function removeitem() {
    console.log("Remove Button Clicked");
}

renderitemlist();