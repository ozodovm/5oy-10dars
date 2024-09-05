let elUsersLists = document.querySelector(".users-list");
function getRecuest(){
    axios.get("https://dummyjson.com/products").then(res => {
        localStorage.setItem("products", JSON.stringify(res.data.products));
        res.data.products.map(item => {
            let elItem = document.createElement("li");
            elItem.className = "w-[400px] p-5 rounded-lg bg-slate-200";
            elItem.innerHTML = `
                <img class="object-contain h-[200px] p-2 rounded-lg mb-5" src=${item.images[0]} alt="Product image" width="100%" height="70" />
                <h2 class="font-bold text-[20px] mb-5">${item.title}</h2>
                <p class="line-clamp-3">${item.description}</p>
                <button onclick="handleSendMessage(${item.id}, '${item.images[0]}')" class="bg-blue-500 text-white py-2 rounded-lg font-semibold w-full mt-5">Send message</button>
            `;
            elUsersLists.appendChild(elItem);
        });
    });
}
getRecuest();
// ----------------------------Chat Bot-----------------------------------
const TOKEN = "7379221199:AAFDHKMEVnv0gvwvNDtOR6m5bHhcjBnUzg4";
const CHAT_ID = "-1002192579884";
const HTTP_MESSAGE = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const HTTP_PHOTO = `https://api.telegram.org/bot${TOKEN}/sendPhoto`;

function handleSendMessage(id, imageUrl){
    axios.get(`https://dummyjson.com/products/${id}`).then(res => {
        let message = `<b>Products info</b>\n`;
        message += `<b>Name:</b> ${res.data.title}\n`;
        message += `<b>Description:</b> ${res.data.description}\n`;
        axios.post(HTTP_MESSAGE, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message
        }).then(response => {
            console.log("Text message sent successfully:", response);
            return axios.post(HTTP_PHOTO, {
                chat_id: CHAT_ID,
                photo: imageUrl,  
                caption: res.data.title 
            });
        }).then(photoResponse => {
            console.log("Rasm muvafaqiyatli yuborildi:", photoResponse);
        }).catch(err => {
            console.error("Rasm yoki xabar yuborishda xatolik bor:", err);
        });
    }).catch(err => {
        console.error("Mahsulot malumotlarini olishda xatolik yuz berdi:", err);
    });
}