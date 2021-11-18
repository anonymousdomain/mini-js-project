const filter=document.querySelector("#filter")

const user=document.querySelector(".user")

const listItems=[]

async function getData(){
    const res=await fetch('https://randomuser.me/api?results=30')

    const {results}=await res.json()

    console.log(results)
}