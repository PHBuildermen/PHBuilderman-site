<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC61bm4frpqqVwqYiK87FARe78lzH88Hng",
    authDomain: "phbuilderman-site.firebaseapp.com",
    projectId: "phbuilderman-site",
    storageBucket: "phbuilderman-site.firebasestorage.app",
    messagingSenderId: "777840097655",
    appId: "1:777840097655:web:eccaefaf541d617e794972",
    measurementId: "G-4NKNN8ZFKV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
