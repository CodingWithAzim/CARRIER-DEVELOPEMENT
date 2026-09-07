function takethecourse() {
      const hasLaptop = document.getElementById('laptop').checked;
      const hasHSC = document.getElementById('hsc').checked;
      const canGiveTime = document.getElementById('time').checked;
      const willComplete = document.getElementById('commitment').checked;

      if (hasLaptop && hasHSC && canGiveTime && willComplete) {
        alert("Congratulations! You are fully eligible for the free course.");
      } else {
        alert("Sorry! You must fulfill all conditions to join the course.");
      }
    }

function LibraryEligibility() {
      const registered = document.getElementById('reg').checked;
      const deposited = document.getElementById('refund').checked;
      const returnbooks = document.getElementById('timeoo').checked;

      if (registered && deposited && returnbooks) {
        alert("Congratulations! You are fully eligible to borrow books.");
      } else {
        alert("Criteria Not Met! To borrow a book, you must be registered, have paid the security deposit, and agree to return it on time.");
      }
    }


function checkLetter() {
        let char = document.getElementById("charInput").value.toLowerCase();

        if (char === "") {
            alert("Please enter a character!");
        } 
        else if (char < 'a' || char > 'z') {
            alert("Enter valid English characters!");
        } 
        else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            alert("Vowel.");
        } 
        else {
            alert("Consonant.");
        }
    }