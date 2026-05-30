alert("APP STARTED");

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

alert("IMPORT OK");

const buttons = document.querySelectorAll("button");
const postBtn = buttons[1];

postBtn.addEventListener("click", async () => {
  alert("BUTTON CLICKED");

  try {
    await addDoc(collection(window.db, "posts"), {
      name: "Test"
    });

    alert("SUCCESS");
  } catch (error) {
    alert("ERROR: " + error.message);
    console.error(error);
  }
});
