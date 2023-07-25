const form = document.getElementById('create-form')
const alertred = document.getElementById('alertred')
let baseURL = "http://localhost:3000/api/v1/rounds"

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  let user = {
    name1: form.input1.value,
    name2: form.input2.value,
    name3: form.input3.value,
    name4: form.input4.value,
  }
  try {
    form.input1.value == ''
    form.input2.value == ''
    form.input3.value == ''
    form.input4.value == ''
    alertred.classList.add('hide')
    window.location.href = "http://localhost:3000/rounds"
    let res = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    let data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})
