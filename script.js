let userEmailId = document.getElementById("email");
let subBtn = document.getElementById("subscirbeBtn");
let searchBar = document.getElementById("searchIcon");
let searchField = document.getElementById("search");

subBtn.addEventListener("click", () => {
    let test = userEmailId.value;
    if(test){
        alert("you sign up successfully: "+test);
    }else{
        alert("please enter your email id");
    }
    userEmailId.value = "";
})


searchBar.addEventListener("click", () => {
    searchField.value = "";
})