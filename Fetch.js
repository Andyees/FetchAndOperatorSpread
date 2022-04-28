const contenedor=document.getElementById("contenedor")

const contenido =(src)=>{return `<img src="${src}" alt="dog" srcset="" ></img>` }

const url="https://dog.ceo/api/breeds/image/random"

async function  fetchDog(url) {
    console.log("Hola")
    const respuesta=await fetch(url)
    
    console.log(respuesta)
    const repuestaJson=await respuesta.json()
    console.log(repuestaJson)
    
    renderHTML(repuestaJson.message)

  
}

function renderHTML(src){
contenedor.innerHTML+=contenido(src)
}


const imgsrc= fetchDog(url)



