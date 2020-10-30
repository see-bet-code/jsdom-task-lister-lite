document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskDesc = document.querySelector('input')
  const form = document.querySelector('form')
  const taskList = document.querySelector('ul')

  form.addEventListener("submit", function(e) {
    e.preventDefault()
    function addTask() {
      const li = document.createElement('li')
      li.textContent = " " + taskDesc.value + " "
      taskList.append(li)

      function addButton() {
        const button = document.createElement('button')
        function removeLi() {
          li.remove()
        }
        button.onclick = removeLi
        button.textContent = 'x'
        li.append(button)
      }

      addButton()
    }

    addTask()
  })
  
});
