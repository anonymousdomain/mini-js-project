const filter = document.querySelector("#filter")

const user = document.querySelector("#user")

const listItems = []

getData()

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=30')

    const { results } = await res.json()
    user.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
   <img src="${user.picture.large}" alt="${user.name.last}"> 
   <div class="user-info">
   <h4>${user.name.first} ${user.name.last}</h4>
   <p>${user.location.city},${user.location.country}</p>
      </div>`

        user.appendChild(li)
    });
}