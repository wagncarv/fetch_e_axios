async function getContent(){
    try {
        const response = await fetch("http://localhost:4567/")
        const data = await response.json()
        show(data)
    } catch (error) {
        console.log(error)
    }
}

getContent()

function show(users){
    const main = document.createElement("ul")
    for(let user of users){
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(`${user.name}`))
        li.classList.add("list")
        main.append(li)
    }
    document.querySelector("body").append(main)
}