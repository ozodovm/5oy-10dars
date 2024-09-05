let elUsersLists = document.querySelector(".users-list")

// const HTTP = `https://api.telegram.org/bot${TOKEN}/sendPhoto`

// https://telegram-bot-sdk.readme.io/reference/sendphoto

function getRecuest(){
    axios.get("https://dummyjson.com/products").then(res => {
       res.data.products.map(item => {
           let elItem = document.createElement("li")
           elItem.className="w-[400px] p-5 rounded-lg bg-slate-200"
           elItem.innerHTML=`
           <img class="object-contain h-[200px] p-2 rounded-lg mb-5" src=${item.images[0]} alt="Product image" width="100%" height="70" />
           <h2 class="font-bold text-[20px] mb-5">${item.title}</h2>
           <p class="line-clamp-3">${item.description}</p>
           <button onclick="handleSendMessage" class="bg-blue-500 text-white py-2 rounded-lg font-semibold w-full mt-5">Send message</button>
           `
           elUsersLists.appendChild(elItem)
        }
       )
    })
   
}
getRecuest()
// ---------------------------------------------------------------
const TOKEN = "7379221199:AAFDHKMEVnv0gvwvNDtOR6m5bHhcjBnUzg4"
const CHAT_ID ="-1002192579884"
const HTTP = `https://api.telegram.org/bot${TOKEN}/sendPhoto`

// https://telegram-bot-sdk.readme.io/reference/sendphoto

// function handleSendMessage()