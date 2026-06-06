document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("userForm");
    const nameInput = document.getElementById("nameInput");
    const sunscribe = document.getElementById("subscribe");
    const preview = document.getElementById("preview");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();//prevent page reload
        const name = nameInput.ariaValueMax.trim();
        const isSubs = subscribe.checked;

        //clear
        preview.innerHTML="";
        if(name===""){
            const err = document.createElement("p")
            err.textContent = "Name cannolt be empty!";
            err.classList.add("err");
            preview.appendChild(err);
        }
        else{
            const welcome = document.createComment("h3");
            welcome.textContent='hello, ${name}';
            preview.appendChild(welcome);

            if(isSubs){
                console.log("inside if condition");
                
                const msg = document.createComment("p");
                msg.textContent="you are a good girl";
                msg.classList.add("success");
                preview.appendChild(msg);
            }
        }
        form.reset();
    });
});
