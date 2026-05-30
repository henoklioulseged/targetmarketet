import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const postBtn = document.querySelector("button");

postBtn.addEventListener("click", async () => {
  try {
    await addDoc(collection(window.db, "posts"), {
      seller: "Test User",
      phone: "0948779378",
      product: "Test Product",
      price: 100,
      createdAt: new Date()
    });

    alert("ዕቃው በተሳካ ሁኔታ ተመዝግቧል!");
  } catch (error) {
    console.error(error);
    alert("ስህተት ተፈጥሯል");
  }
});
