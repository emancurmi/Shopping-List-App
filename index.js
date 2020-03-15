'use strict';

const LIST = [
    { id: 0, name: "apples", checked: false },
    { id: 1, name: "oranges", checked: false },
    { id: 2, name: "milk", checked: true },
    { id: 3, name: "bread", checked: false }
];

function renderitemhtml(item) {
    return `
     <li data-item-id='${item.id}'>        
        <span class="shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span >
        <div class="shopping-item-controls">
            <button class="js-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="js-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
     </li >`;
}

function renderitemlist() {
    let listhtml = "";
    for (let i = 0; i < LIST.length; i++) {
        listhtml += renderitemhtml(LIST[i])
    }
    $('.js-shopping-list').html(listhtml);
}

function createiteminlist(itemName) {
    let lastindex = LIST.length;
    let item = LIST[lastindex - 1];
    let nextindex = item.id + 1;
    console.log(nextindex);
    LIST.push({ id: nextindex, name: itemName, checked: false });
    console.log(LIST);
}

function getItemIdFromElement(item) {
    return $(item).closest('li').data('item-id');
}

function finditeminlist(id) {
    let index = -1;
    for (let i = 0; i < LIST.length; i++) {
        if (LIST[i].id == id) { index = i; }
    }
    return index;
}

function additem() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const newitem = $('#js-shopping-list-entry').val();
        createiteminlist(newitem);
        renderitemlist();
    });
}

function checkitem() {
    $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
        const id = getItemIdFromElement(event.currentTarget);
        let listindex = finditeminlist(id);
        LIST[listindex].checked = !LIST[listindex].checked;
        renderitemlist();
    });
}

function removeitem() {
    $('.js-shopping-list').on('click', `.js-item-delete`, event => {
        const id = getItemIdFromElement(event.currentTarget);
        let listindex = finditeminlist(id);
        LIST.splice(listindex, 1);
        renderitemlist();
    });
}

function start() {
    renderitemlist();
    additem();
    checkitem();
    removeitem();
}

start();
