const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

//function to generate template to add todo
const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;
    list.innerHTML += html
}

addForm.addEventListener('submit', e => {

    e.preventDefault()
    const todo = addForm.add.value.trim() //add input's name

    //check if something was typed
    if(todo.length){
        generateTemplate(todo)
        addForm.reset()
    } 
})

//delete todos event delegation
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove() //li tag
    }
})

//function that match the term with the todos
const filterTodos = (term) => {
    
    Array.from(list.children) //lis
        .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> {
            todo.classList.add('filtered')
        })
    
        Array.from(list.children) //lis
        .filter((todo)=> todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> {
            todo.classList.remove('filtered')
        })
}

//search and filter - keyup
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase()
    filterTodos(term)
})