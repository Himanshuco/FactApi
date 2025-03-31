let url = "https://catfact.ninja/fact";

let b=document.getElementById("btn");

let text = document.getElementById("f");
//fetch(url)
    // .then((response)=>{
    //     console.log(response);
    //     response.json().then((data)=>{
    //         console.log(data);
    //     });
    //     return fetch(url);
    // })
    // .then((response)=>{
    //     response.json().then((data2)=>{
    //         console.log(data2);
    //     })
    // })
    // .catch((err)=>{
    //     console.log("Error-",err);
    // });

async function getfact(){
    try{
        let resp=await fetch(url);
        console.log(resp);
        let data = await resp.json();
        text.innerText=data.fact;
        console.log(data);

    }catch(e){
        console.log("Error - ",e);
    }
    
}


b.addEventListener("click",getfact);