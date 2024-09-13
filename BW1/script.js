function updateElementText(id){
    return function (content){
        document.querySelector("#" + id).textContent = content;
    }
}

const updateHeader = updateElementText("heading")

updateHeader("welcome guys")