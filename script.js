let $ = document
let faceBtn = $.querySelector('#face-btn')
let colorBtn = $.querySelector('#color-btn')
let hornsBtn = $.querySelector('#horns-btn')
let tailBtn = $.querySelector('#tail-btn')
let docRoot = $.querySelector(':root')

let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];

let colors = [...bodyColors, 'transparent'];

let [faceCunter, colorCunter ,hornsCunter, tailCunter] = Array(4).fill(0)

const setCunter = (cunter, lenght) => {
    return cunter < lenght - 1 ? cunter + 1 : 0
}

faceBtn.addEventListener('click', () => {

    faceCunter = setCunter(faceCunter, 6)
    $.getElementById('face').setAttribute('src', `img/face-${faceCunter}.png`)    

});

colorBtn.addEventListener('click', () => {

    colorCunter = setCunter(colorCunter, bodyColors.length)
    docRoot.style.setProperty('--color-character', bodyColors[colorCunter])
    
});

hornsBtn.addEventListener('click', () => {

    hornsCunter = setCunter(hornsCunter, colors.length)
    docRoot.style.setProperty('--color-horns', colors[hornsCunter])

});

tailBtn.addEventListener('click', () => {

    tailCunter = setCunter(tailCunter, colors.length)
    docRoot.style.setProperty('--color-tail', colors[tailCunter])

});