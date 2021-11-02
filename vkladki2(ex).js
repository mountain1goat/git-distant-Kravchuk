//динамический
let tabs=[
    {
        header: 'Один',
        body: 'Первая вкладка',

    },
    {
        header: 'Два',
        body: 'Вторая вкладка',

    },
    {
        header: 'Три',
        body: 'Третья вкладка',

    }
];

const tabHeader=document.querySelector('.tab-header');
const tabBodyItem=document.querySelector('.tab-body_item');

let i = 0;
tabs.forEach(tab=>{
    
    let divHeader=createElement('div', ['tab-header_item'], `<span>${tab.header}</span>`)
    
    divHeader.dataset.target=i;
    
    divHeader.addEventListener('click',doActiveTab)


    // let divBody=createElement('div', ['tab-body_item'], `<p>${tab.body}</p>`)
    // divBody.id=tab.target

    tabHeader.append(divHeader)
    // tabBody.append(divBody)

    i++;
})

start();

function start() {
    tabHeader.firstChild.classList.add('active')
    tabBodyItem.innerHTML = `<p>${tabs[0].body}</p>`
    // tabBodyItem.classList.add('active') - если не менять ничего в стилях
}

function createElement(el, classes, template) {
    let elem = document.createElement(el)
    elem.classList.add(...classes)
    elem.innerHTML = template
    return elem;

}

function doActiveTab(e){
    clearTab();
    
    let currentHeader=e.target.closest('div.tab-header_item')
    currentHeader.classList.add('active')

    // let currentBody=document.querySelector(`#${currentHeader.dataset.target}`)
    // currentBody.classList.add('active')

    let currentTab = tabs[currentHeader.dataset.target]
    tabBodyItem.innerHTML = `<p>${currentTab.body}</p>`
    // tabBodyItem.classList.add('active') - если не менять ничего в стилях
}



function clearTab(){
    [...tabHeader.children].forEach(item=>{
        item.classList.remove("active")
    });
    // [...tabBody.children].forEach(item=>{
    //     item.classList.remove("active")
    // });
}