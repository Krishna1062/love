ham = document.getElementById('ham')
comp = document.getElementById('comp-ham')

ham.addEventListener('click', ()=>{
    document.getElementById('nav').classList.toggle('opacity-0')
    document.getElementById('nav').classList.toggle('-translate-x-full')
})
