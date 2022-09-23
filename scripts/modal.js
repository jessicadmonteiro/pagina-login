const buttonModal = document.querySelectorAll("[data_modal]")

for(let i = 0; i < buttonModal.length; i++){
    buttonModal[i].addEventListener("click", function(){
        let valueButtonModal = buttonModal[i].getAttribute("data_modal")
        document.getElementById(valueButtonModal).classList.toggle("show_screen")
    })
}