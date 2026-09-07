    const textElement = document.getElementById("typed-text");
    const originalText = textElement.getAttribute("data-text");
    const speed = parseInt(textElement.getAttribute("data-speed"));

    const colors = ["#ff5722", "#4caf50", "#00bcd4", "#e91e63", "#ffeb3b", "#9c27b0"];

    let index = 0;
    let isReverse = false;
    let currentText = originalText;

    function type() {
      if (index < currentText.length) {
        
        let char = currentText.charAt(index);
        let currentColor = colors[index % colors.length];

        textElement.innerHTML += `<span style="color: ${currentColor};">${char}</span>`;

        index++;
        setTimeout(type, speed);
        
      } else {
        setTimeout(() => {
          textElement.innerHTML = "";
          index = 0;
    
          isReverse = !isReverse;
          
          if (isReverse) {
            currentText = originalText.split("").reverse().join("");
          } else {
            currentText = originalText;
          }

          type();
        }, 100);
      }
    }

   type();