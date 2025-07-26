import { collection,doc, db, getDocs,query,where } from "./firebase.js";



const privateRouteCheck = () =>{
    const uid = localStorage.getItem("userUid")
    console.log("privateroutecheck", uid)
    if(!uid){
        window.location.replace("./index.html")
    }
}
 window.addEventListener("load",privateRouteCheck)


 const fetchMyNamaz = async ()=>{
    try {
        const userUid = localStorage.getItem("userUid");
        
        const querySnapShot = await getDocs(query(collection(db,"namazStatus"),where("uid", "==",userUid)));
        console.log("querysnapshot",querySnapShot)
        let tempArr = [];
        console.log(tempArr)
        querySnapShot.forEach(doc => {
            console.log(doc.data())

            const obj = {
                ...doc.data(),
                id: doc.id,
            };
            tempArr.push(obj)
            console.log(tempArr)
        });
        
            
        const namazCard = document.querySelector("#namazCard");
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let  date = new Date().getDate();

        for(const obj of tempArr){
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

 const logout = async()=>{
    await localStorage.removeItem("userUid");
    window.location.replace("./index.html");

 }
 window.addEventListener("load",fetchMyNamaz)

 window.fetchMyNamaz = fetchMyNamaz;
 window.logout = logout;
