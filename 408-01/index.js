
var counter = 0
function AppPlayerDetails() {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const country = document.getElementById("country").value
    const score = document.getElementById("score").value
    
    
    const container = document.getElementById("container")
    const innerDiv = document.getElementById("innerDiv")
    if(firstName==""||lastName==""||country==""||score==""){
        innerDiv.innerHTML = ""
        innerDiv.innerHTML = " <p>All fields are required! </p> "
    }else{
        innerDiv.innerHTML = ""
        container.innerHTML += `
        
        <table>
        <tr id="tr${counter}">
            <td id="NameRow">${firstName+" " + lastName}</td>
            <td id="countryRow">${country}</td>
            <td id="scoreRow${counter}">${score}</td>
            <td id="but1"><button onclick="DeleteElem(${counter})" id="del${counter}">🗑️</button></td>
            <td><button onclick="plusFive(${counter})" id="plusFive${counter}">+5</button></td>
            <td><button onclick="subFive(${counter})" id="subFive${counter}">-5</button></td>
        </tr>
    </table>
        `
        
        counter = counter+1  
    }
}

function DeleteElem(counter) {
    const trDel = document.getElementById(`tr${counter}`)
    const deleElem = document.getElementById(`del${counter}`)
    console.log(deleElem);
    trDel.remove()


}

function plusFive(counter) {
    console.log("hello");
    const score = document.getElementById(`scoreRow${counter}`)
    score.innerText = +score.innerText+5
}

function subFive(counter) {
    console.log("hello");
    const score = document.getElementById(`scoreRow${counter}`)
    score.innerText = +score.innerText-5
}