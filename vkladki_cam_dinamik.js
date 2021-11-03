let tabs=[
    {
        header: 'Волк',
        body: '<h3>Волк обыкновенный (серый волк)</h3>'+
        '<table><tr><td><div class="p">' +
                 '– это крупный хищный зверь из семейства псовых. Длина тела'+ 
                 'взрослого волка может достигать 180 см (с хвостом), а высота'+
                  'холке – 90 см. Вес волка колеблется от 30 до 50 кг, некоторые'+
                   'самые крупные животные могут весить до 80 килограммов.'+
               ' </div></td><td><div class="img img1"></div></td></tr>'+
        '</table>',

    },
    {
        header: 'Лиса',
        body: '<h3>Лисица</h3><table>'+
            '<tr><td><div class="p">'+
                    '– одно из самых красивых хищных животных. У нее изящное'+
                     'удлиненное тело, стройные ноги, длинный пушистый хвост. '+
                     'Голова с заостренной мордой и большими стоячими ушами. '+
                     'Лисица обыкновенная фото. Размером лиса с небольшую '+
                     'собаку. Длина тела взрослой особи составляет от 60 до 90 '+
                     'см, длина хвоста – от 40 до 60 см. Вес лисицы обычно не '+
                     'превышает 10 кг. Лисы, живущие в северных широтах, часто '+
                     'крупнее своих южных собратьев.'+
                '</div></td><td><div class="img img2"></div></td></tr>'+
        '</table>',

    },
    {
        header: 'Медведь',
        body: '<h3>Обыкновенный медведь (бурый медведь)</h3>'+
        '<table><tr><td><div class="p">'+
                    'Облик бурого медведя типичен для представителя '+
                    'семейства медвежьих. Тело у него мощное, с высокой холкой; '+
                    'голова массивная с небольшими ушами и глазами. Хвост короткий'+
                     '— 65—210 мм, едва выделяющийся из шерсти. Лапы сильные с мощными, '+
                     'невтяжными когтями длиной 8—10 см, пятипалые, стопоходящие. Шерсть'+
                      'густая, равномерно окрашенная. Окраска бурого медведя очень '+
                      'изменчива, причём не только в разных частях ареала, но и в '+
                      'пределах одного района. Цвет меха варьирует от светло-палевого '+
                      'до синеватого и почти чёрного. Самой обычной является бурая форма.'+
                '</div></td><td><div class="img img3"></div></td></tr>'+
        '</table>',

    }
];

const tabHeader=document.querySelector('.tab-header');
const tabBodyItem=document.querySelector('.tab-body_item');

let i = 0;
tabs.forEach(tab=>{
    
    let divHeader=createElement('div', ['tab-header_item'], `<span>${tab.header}</span>`)
    
    divHeader.dataset.target=i;
    
    divHeader.addEventListener('click',doActiveTab)

    tabHeader.append(divHeader)
    i++;
})

start();

function start() {
    tabHeader.firstChild.classList.add('active')
    tabBodyItem.innerHTML = `<p>${tabs[0].body}</p>`
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

    let currentTab = tabs[currentHeader.dataset.target]
    tabBodyItem.innerHTML = `<p>${currentTab.body}</p>`
}



function clearTab(){
    [...tabHeader.children].forEach(item=>{
        item.classList.remove("active")
    });
}