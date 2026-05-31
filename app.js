import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.onload = () => {

const postBtn = document.getElementById("postBtn");

postBtn.addEventListener("click", async () => {

const seller = document.getElementById("seller").value;
const phone = document.getElementById("phone").value;
const product = document.getElementById("product").value;
const price = document.getElementById("price").value;
const description = document.getElementById("description").value;

try {

  const docRef = await addDoc(collection(window.db, "posts"), {
    seller,
    phone,
    product,
    price,
    description,
    createdAt: new Date()
  });

  alert("ዕቃው በተሳካ ሁኔታ ተመዝግቧል");

  window.open(
    "https://t.me/HeNiTa8",
    "_blank"
  );

  console.log(docRef.id);

} catch (error) {

  alert("ስህተት: " + error.message);
  console.error(error);

}

});

};
