const tbody = document.getElementById('tbody')
const thead = document.getElementById('thead')
const addround = document.getElementById('addround')
let baseURL = "http://localhost:3000/api/v1/rounds"
fetch(baseURL).then((res) => res.json()).then((data) => {
  let { users } = data;
  users.forEach((element, index) => {
    let total = element.Totalrounds.value1 + element.Totalrounds.value2 + element.Totalrounds.value3 + element.Totalrounds.value4
    thead.innerHTML = `  <tr>
    <th scope="col">#</th>
    <th scope="col">${element.name1}</th>
    <th scope="col">${element.name2}</th>
    <th scope="col">${element.name3}</th>
    <th scope="col">${element.name4}</th>
  </tr>`
    tbody.innerHTML = `
  <tr>
          <th scope="row">Sum of scores (${total})</th>
          <td>${element.Totalrounds.value1}</td>
          <td>${element.Totalrounds.value2}</td>
          <td>${element.Totalrounds.value3}</td>
          <td>${element.Totalrounds.value4}</td>

        </tr>
  `
  });
}).catch((err) => {
  console.log(err)
})
addround.addEventListener('click', async () => {
  let rounds = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0
  }
  try {
    let res = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rounds)
    })
  } catch (error) {

  }
})
