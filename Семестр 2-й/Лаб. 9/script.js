const text = document.getElementById('text')
let TextClr = 0;
text.addEventListener('click', () => {
    text.style.backgroundColor = TextClr ? 'black' : '#CC5555';
    TextClr = TextClr ? 0 : 1;
})



const inst = document.getElementById("inst");
inst.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    console.log(e.target);
    if(e.target.tagName == 'INPUT'){
        console.log(e.target.nextSibling.nextSibling);
        e.target.nextSibling.nextSibling.innerText = parseInt(e.target.nextSibling.nextSibling.innerText) + 1;
    }
})