 import{addDoc, collection, db, doc, getDoc, getDocs, } from "./firebase.js"  
   
const privateRouteCheck = () =>{
    const uid = localStorage.getItem("userUid")
    console.log("privateroutecheck", uid)
    if(!uid){
        window.location.replace("./index.html")
    }
}
 window.addEventListener("load",privateRouteCheck)

   // get user data from db
    let userData;

    const fetchUserData = async()=>{
        const userUid = localStorage.getItem("userUid");
        // console.log(userUid)
        const user = await getDoc(doc(db,"user",userUid));
        userData = user.data();
        console.log("userData",userData);
    }


const addNamaz = async()=>{
    try {
     const fajar = document.querySelector("#fajar");
     const zuhar = document.querySelector("#zuhar");   
     const asar = document.querySelector("#asar");
     const maghrib = document.querySelector("#maghrib");
     const esha = document.querySelector("#esha");
     const selectDate = document.querySelector("#selectDate");
            
    //  console.log(fajar,zuhar,asar,maghrib,esha)
     const namazObj = {
        fajar : fajar.checked,
        zuhar : zuhar.checked,
        asar : asar.checked,
        maghrib : maghrib.checked,
        esha : esha.checked,
        uid : userData.uid,
        userName : userData.userName,
        selectDate : new Date(),     
     }

     await addDoc(collection(db,"namazStatus"),namazObj)
     alert("Namaz data created...")
     fetchNamaz()
     console.log("namazobj",namazObj)

    } catch (error) {
        error.massage
    }
}

const fetchNamaz = async()=>{
    try {
        const querySnapShot = await getDocs(collection(db , "namazStatus"));
        console.log(querySnapShot)
        const emptyArr = [];
        
        querySnapShot.forEach((doc) => {
            console.log("doc",doc.data());
            console.log("doc",doc.id);
            const obj = {
                ...doc.data(),
                id : doc.id,
            }
            console.log(obj)
        emptyArr.push(obj);
        });
        

        console.log("emptyarr", emptyArr);

        const namazCard = document.querySelector("#namazCard");
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let  date = new Date().getDate();
        for(const obj of emptyArr){
            console.log(obj)
            namazCard.innerHTML += `<div class="cardContainer">
         <h2>${month}-${date}-${year}</h2>   
        <h2>${obj.userName}</h2>
            <div class="status">
                <h3>fajar<span> </span>${obj.fajar}</h3>
                <h3>zuhar<span> </span>${obj.zuhar}</h3>
                <h3>asar<span>  </span>${obj.asar}</h3>
                <h3>maghrib<span> </span>${obj.maghrib}</h3>
                <h3>esha<span> </span>${obj.esha}</h3>
            </div>
        </div>`
        }
        

    } catch (error) {
        error.massage
    }
}



window.addNamaz = addNamaz
window.fetchUserData = fetchUserData
window.fetchNamaz = fetchNamaz
    
