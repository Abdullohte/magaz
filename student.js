const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")

const shopbtn = document.querySelector(".shop")
if (student) {
    infoStudentBox.innerHTML = 
    `
    
    <img src="./images/Frame 36614.png">
    <h2>${student.name}</h2>
    <h3>${student.surname}</h3>
    <p>ID: ${student.id}</p>
    <p>Группа: ${student.group}</p>
    <p><img src="./images/coin.png" class="coin"> ${student.coin} </p>
    <p>Текущий учитель: ${student.teacher}</p>
    <p> <img src="./images/hp.png" class="hp"> ${student.hp} </p>
    
    
    `
    document.querySelector(".reset").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "./index.html"
    })
   

    shopbtn.addEventListener("click", () => {
        window.location.href = "./shop.html"
    })
}


