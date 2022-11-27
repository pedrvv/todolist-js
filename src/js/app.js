let txtInput = document.querySelector('.txt-task');
let listTask = document.querySelector('.list-task');

function AddNewTask() {
  if (txtInput.value != '') {   

    let itemTask = document.createElement('p');
    itemTask.classList.add('item-task');
    itemTask.innerHTML = txtInput.value;
    listTask.appendChild(itemTask);

    // create delete button
    let btnDelete = document.createElement('span');
    btnDelete.classList.add('btnDelete');

    // delete item
    itemTask.addEventListener('click', (event) => {
      let deleteTask = event.target;

      if (deleteTask.classList.contains('btnDelete')) {
        itemTask.remove();
      }
    });

    btnDelete.innerHTML = 'X';
    itemTask.appendChild(btnDelete);
  }
  txtInput.value = '';
  txtInput.focus();
}