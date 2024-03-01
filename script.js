const localStorageItem = 'to-do-list'

function validateTask() {
    let values = JSON.parse(localStorage.getItem(localStorageItem) || '[]');
    let inputValue = document.getElementById('input__task').value
    let exist = values.find(item => item.name == inputValue);
    return !exist ? false : true
}

function addNewTask() {
    const input = document.getElementById('input__task');

    if (!input.value) {
        alert('Digite uma tarefa para adicionar à lista');
        input.value = "";

    } else if (validateTask()) {
        alert('Essa tarefa já existe');
        input.value = "";
    }
    else {

        let values = JSON.parse(localStorage.getItem(localStorageItem) || '[]');
        values.push({
            name: input.value
        });

        localStorage.setItem(localStorageItem, JSON.stringify(values));

        showTask();

        input.value = "";
    }

}

function showTask() {
    let values = JSON.parse(localStorage.getItem(localStorageItem) || "[]");
    let list = document.getElementById('task__list');
    list.innerHTML = '';

    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li class="teste">${values[i]['name']} 
                                <div class="acoes">
                                 <label class="custom-checkbox">
                                      <input type="checkbox"></input>
                                 </label><button id="btn__remove" onclick='removeItem("${values[i]['name']}")'>x</button>
                                </div>
                           </li>`;

    }
}

function removeItem(data) {
    const userConfirmed = confirm('Tem certeza de que deseja excluir este item?');

    if (userConfirmed) {
        let values = JSON.parse(localStorage.getItem(localStorageItem) || "[]");
        let index = values.findIndex(item => item.name == data);

        values.splice(index, 1);
        localStorage.setItem(localStorageItem, JSON.stringify(values));
        showTask();
    }
}


showTask();