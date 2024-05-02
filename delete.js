import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
 const firebaseConfig = {
    apiKey: "AIzaSyCa8SSSsvBrVKXqDyLneZ0OVBrPV39-46I",
    authDomain: "spendifi-user.firebaseapp.com",
    projectId: "spendifi-user",
    storageBucket: "spendifi-user.appspot.com",
    messagingSenderId: "416501871618",
    appId: "1:416501871618:web:dbeb2e2184ee03ed54231b"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  // Form submission handler
  const deletionForm = document.getElementById('deletionForm');
  deletionForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const email = deletionForm.querySelector('#email').value;
  
    try {
      // Save email to Firestore collection
      const docRef = await addDoc(collection(db, 'deletionRequest'), {
        email: email,
        timestamp: serverTimestamp()
      });
      alert('Data deletion request submitted successfully!');
      deletionForm.reset(); // Reset form after submission
    } catch (error) {
      console.error('Error submitting deletion request:', error);
      alert('Error submitting deletion request. Please try again.');
    }
  });
