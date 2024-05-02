import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey:`${process.env.APIKEY}`,
    authDomain:`${process.env.AUTHDOMAIN}`,
    projectId: `${process.env.PROJECTID}`,
    storageBucket: `${process.env.STORAGEBUCKET}`,
    messagingSenderId: "683202047148",
    appId: "1:683202047148:web:280c39d99b74bfab418309",
    measurementId: "G-QD1Y58X3LZ",
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
