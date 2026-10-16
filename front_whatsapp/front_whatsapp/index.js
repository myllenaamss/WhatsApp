const tel = document.querySelector("#tel");
const btnNext = document.querySelector("#btn-next-1");
const senha = document.querySelector("senha")

btnNext.addEventListener("click", function() {
     console.log(tel.value)
})
async function fetchAPI(){
   const URL = "http://10.111.9.41:3000/auth" 
    try {
          const req = awaitfetch(URL,{
            method: 'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({ 
                telefone: tel.value,
                senha: "123"
             })
          })
          
          const res = await req.json()
          if(req.ok)
          {}
    }
    catch{
        console.log("A conexão com o servidor falhou!")
    }
}