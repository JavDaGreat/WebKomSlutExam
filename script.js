import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, 
    updateDoc, doc, increment } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  const firebaseConfig = {
  apiKey: "AIzaSyAGC_tIgA0YBIWtTUi9gbl6iV0HyVsffZE",
  authDomain: "movie-51741.firebaseapp.com",
  projectId: "movie-51741",
  storageBucket: "movie-51741.appspot.com",
  messagingSenderId: "821539652040",
  appId: "1:821539652040:web:2e9be0cdd1ba29228fc0fd"
    
  };

  const titleInput = document.getElementById('title')
  const genreInput = document.getElementById('genre')
  const RDInput = document.getElementById('release-date') 
  const app=initializeApp(firebaseConfig);
  const db = getFirestore(app)
  
  
 async function saveMovie(data){
        try {
          const send=await addDoc(collection(db, 'movie'), data);
          console.log('Document added successfully.'+send.id)
        } catch (error) {
          console.error('Error adding document:', error);
        }
      };
     function reset(){
      titleInput.value=''
        genreInput.value=''
         RDInput.value=''

     }

      
      const form = document.getElementById('movie-form');
      form.addEventListener('submit', e => {
        e.preventDefault();
        console.log(RDInput)

        
        const data = { 
          title:titleInput.value,
          genre:genreInput.value,
          realesedata:RDInput.value
          
         };

        saveMovie(data);
        reset()
      });




      