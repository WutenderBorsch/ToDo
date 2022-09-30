const input = document.querySelector('input')
const list = document.querySelector('ul')
const btnAdd = document.querySelector('#btn_add')
const buttons = document.getElementsByClassName('btn');

function createToDo(value) {
    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = value

    list.appendChild(li)
    
    const buttonDel = document.createElement('button')
    buttonDel.className = 'btn'
    buttonDel.textContent = ' ✖ Удалить '

    li.appendChild(buttonDel)
    
    deleteToDo(buttonDel)
}

function onClickToDo(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('li-done')
        localStorage.setItem('toDo', list.innerHTML)
    }
}
list.addEventListener('click', onClickToDo)

btnAdd.addEventListener('click', () => {
    if (input.value === '') return alert('Введите заметку!')
    createToDo(input.value)
    input.value = ''

    localStorage.setItem('toDo', list.innerHTML)
})

function deleteToDo(){
    for(let button of buttons){
        button.addEventListener ('click', (event) => {
        const answer = confirm('Вы действительно хотите удалить запись?')
        if (answer) {
            alert('Запись удалена!')
            button.parentElement.remove()
            localStorage.setItem('toDo', list.innerHTML)
            event.stopPropagation()
        } 
      });
    }
}

function loadingToDo() {
    if(localStorage.getItem('toDo')){
        list.innerHTML = localStorage.getItem('toDo')

        deleteToDo()
    }
}

loadingToDo()