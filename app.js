import { auth,signInWithEmailAndPassword} from "./firebase.js";


const loginHandler = async()=>{

        const email = document.querySelector("#log-email").value;
        const password = document.querySelector("#log-pass").value;

    try {
        if(email.value || password.value){
                alert("required fields are missing...")
                return;
        }
        const userRes = await signInWithEmailAndPassword (auth,email,password);
        console.log("userRes", userRes)

        const userUid = userRes.user.uid;

        localStorage.setItem("userUid", userUid);
        window.location.href = "./dashboard.html"
    } catch (error) {
        error.massage
    }
}

window.loginHandler = loginHandler;