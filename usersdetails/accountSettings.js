document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('saveUserInfo').addEventListener('click', function(){
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        console.log(loggedInUser, "dddd");
        

        if(!loggedInUser){
            alert("Please sign in first")
            return;
        }

        const userInfoNameSurname = document.getElementById('namesurname').value.trim();
        const userInfoEmail = document.getElementById('email').value.trim();
        const userInfoAddress = document.getElementById('address').value.trim();
        const userInfoPhone = document.getElementById('phoneNumber').value.trim();

    })
})