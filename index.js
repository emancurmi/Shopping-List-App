'use strict'

const LIST = [
    { id: 0, name: "apples", checked: false },
    { id: 1, name: "oranges", checked: false },
    { id: 2, name: "milk", checked: true },
    { id: 3, name: "bread", checked: false }
];

function createitemhtml(item) {
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

function createitemlist() {
    for (let i = 0; i < LIST.length; i++) {
        ('.js-shopping-list').append(createitemhtml());
    }
}

createitemlist();