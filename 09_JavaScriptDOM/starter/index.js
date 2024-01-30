const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];

function buildP(placeholder, num){
    let i = 0;
    do {

    
    let p = document.createElement('p');
    let text = document.createTextNode(`Have you tried turning it of and back on again?`);

    p.appendChild(text);
    p.style.color = colours[parseInt(Math.random() * colours.length)]
    placeholder.appendChild(p);
    i++;
    } while (i < num);
}

buildP(document.querySelector('#placeholder'), 8);