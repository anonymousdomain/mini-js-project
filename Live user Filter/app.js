const filter = document.querySelector('#filter')

const users = document.querySelector('#user')

const listItems = []

getData()
filter.addEventListener('input',(e)=>filterData(e.target.value))
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=30')
  
    const { results } = await res.json()
    users.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
   <img src="${user.picture.large}" alt="${user.name.last}"> 
   <div class="user-info">
   <h4>${user.name.first} ${user.name.last}</h4>
   <p>${user.location.city},${user.location.country}</p>
      </div>`

        users.appendChild(li)
    });
}

function filterData(search){
    listItems.forEach(users=>{
        if(users.innerText.toLowerCase().includes(search.toLowerCase())){
            users.classList.remove('hide')
        }
        else{
            users.classList.add('hide')
        }
    })
}

