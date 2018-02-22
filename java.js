


const template = document.querySelector('template').content;
const main = document.querySelector('main');
<<<<<<< HEAD
const link = "https://raw.githubusercontent.com/PaulChelaru/Dynamic-website/master/data.json?token=AeqwT8ebbeO9NuqQkaUh5pE9Sa2YtPqjks5alwsxwA%3D%3D";

//for (let i = 1; i < 4; i++) {
//    const clone = template.cloneNode('true');
//    main.appendChild(clone);
//}

fetch(link).then(result => result.json()).then(data => {
    show(data["core-areas"])
});

function show(jData) {

Object.keys(jData).forEach(function(elem){
   console.log(elem + '=' + jData[elem]);
    elem = jData[elem];
    const clone = template.cloneNode(true);
    clone.querySelector('.name').textContent += elem.name;
    clone.querySelector('.about').textContent += elem.about;
        clone.querySelector('.knowledge').textContent += elem.knowledge;
    clone.querySelector('.skills').textContent += elem.skills;
    
    
    
    clone.querySelector('.competencies').textContent += elem.competencies;
    main.appendChild(clone);
    
});
}


fetch(link).then(result => result.json()).then(data => {
    show(data[""])
});

function show(jData) {

Object.keys(jData).forEach(function(elem){
   console.log(elem + '=' + jData[elem]);
    elem = jData[elem];
    const clone = template.cloneNode(true);
    clone.querySelector('.name').textContent += elem.name;
    clone.querySelector('.about').textContent += elem.about;
        clone.querySelector('.knowledge').textContent += elem.knowledge;
    clone.querySelector('.skills').textContent += elem.skills;
    
    
    
    clone.querySelector('.competencies').textContent += elem.competencies;
=======
const link = "https://raw.githubusercontent.com/lanasladovic/data/master/data.json";

import data from './data.json';
console.log(data);

console.log("da");
for (let i = 1; i < 4; i++) {
    const clone = template.cloneNode('true');
//    clone.querySelector('h2').textContent += i;
>>>>>>> parent of ffef507... Cat de cat prima pagina
    main.appendChild(clone);
}
//fetch(link).then(result => result.json()).then(data => {
//    console.log(data);
//    show(data)
//});


function show(data) {
    data.forEach(elem => {
        console.log(elem.shortdescription);
        const clone = template.cloneNode(true);
        clone.querySelector('.about').textContent += elem.about;
        clone.querySelector('.knowledge').textContent += elem.knowledge;
        clone.querySelector('.skills').textContent += elem.skills;
        clone.querySelector('.competencies').textContent += elem.competencies;
        main.appendChild(clone);
    })

}