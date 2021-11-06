"use script";

const blooks = document.querySelectorAll('.puzzle-img');
const zones = document.querySelectorAll('.puzzle');
const cells = document.querySelectorAll('.cell');
let text = document.getElementById('text_content');

let dragItem = null;
let count = cells.length;

blooks.forEach(cell => {
    cell.addEventListener('dragstart', dragstart);
    cell.addEventListener('dragend', dragend);
});

[...cells].forEach(zona => {
    zona.addEventListener('dragover', dragoverCell);
    zona.addEventListener('drop', dragdropCell);
});

[...zones].forEach(zona => {
    zona.addEventListener('dragover', dragoverZone);
    zona.addEventListener('drop', dragdropZone);

});
function dragstart(e) {
    dragItem = e.target;
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}
function dragend(e) {
    e.target.style.display = "";
}

function dragoverCell(e) {
    e.preventDefault();
    e.target.classList.remove('zone-predator');
}
function dragoverZone(e) {
    e.preventDefault();
}

function dragdropCell(e) {
    e.preventDefault();
    
    if (e.target.tagName !== 'IMG') {
        e.target.append(dragItem);
        
    }
}

function dragdropZone(e) {
    e.preventDefault();
    if (e.target.tagName !== 'IMG') {
        e.target.append(dragItem);
    }
    
}