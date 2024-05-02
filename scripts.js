function openForm(){
    let formElement = document.getElementById("form-box");
    let formOverlay = document.getElementById("form-overlay");

    formElement.style.display = "flex";
    formOverlay.style.display = "flex";

}

function closeForm(){
    let formElement = document.getElementById("form-box");
    let formOverlay = document.getElementById("form-overlay");

    formElement.style.display = "none";
    formOverlay.style.display = "none";

}