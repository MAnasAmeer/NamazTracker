import {db,doc,setDoc, auth, createUserWithEmailAndPassword } from "./firebase.js"

const signupHandler = async ()=>{
  try {
    const userName = document.querySelector("#sig-user").value;
    const email = document.querySelector("#sig-email").value;
    const password = document.querySelector("#sig-pass").value;

    // console.log("user",userName ,email,password)
    

    // auth
    const response = await createUserWithEmailAndPassword(auth,email,password,userName);

    console.log("response",response)

    const userUid = response.user.uid;

    console.log("userUid",userUid)

    // db store
    const userObj = {
      userName : userName,
      email : email,
      uid : userUid,
    }
    console.log("userObj", userObj)

  const userDb = await setDoc(doc(db , "user",userUid),userObj)
    console.log("userDb", userDb)

    alert("user created...")

    window.location.href = "./index.html"
  } catch (error) {
    error.massage
  }
}



window.signupHandler = signupHandler;

