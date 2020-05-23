const recipes = document.querySelectorAll('.recipe img')
const hideEl = document.querySelectorAll('.text-hide')

recipes.forEach(recipe => {
    recipe.addEventListener('click', () => {
        let dishId = recipe.parentNode.getAttribute('id')

        window.location.href = `/dish?id=${dishId}`
    })
})

hideEl.forEach(el => {
    el.addEventListener('click', (event) => {
        let elementList = event.target.parentElement.nextElementSibling
        elementList.classList.toggle('hide')  
        el.innerHTML = el.innerHTML === 'MOSTRAR' ? 'ESCONDER' : 'MOSTRAR'
    })
})