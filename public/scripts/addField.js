// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// Quando clicar no botão


// Executar uma ação
function cloneField() {
    //console.log("cheguei aqui...")
    
    // Duplicar os campos... Quais campos???
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // Pegar os campos... Quais campos???
    const fields = newFieldContainer.querySelectorAll('input')
    // Para cada campo, limpar...
    fields.forEach(function(){
        // Pegar field do mommento e limpa ele
        fields.value = ""
    })
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}