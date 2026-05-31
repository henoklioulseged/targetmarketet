import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.onload = () => {
  const buttons = document.querySelectorAll("button");
  const postBtn = buttons[1];

  postBtn.addEventListener("click", async () => {
    try {
      const docRef = await addDoc(collection(window.db, "posts"), {
        seller: "Test User",
        phone: "0948779378",
        product: "Test Product",
        price: 100,
        createdAt: new Date()
      });

      alert("SUCCESS: " + docRef.id);
    } catch (error) {
      alert("ERROR: " + error.message);
      console.error(error);
    }
  });
};
