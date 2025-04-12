document.getElementById('translateBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
  
    if (inputText === "") {
      alert("Please enter some text to translate.");
      return;
    }
  
    const fromLang = document.getElementById('fromLang').selectedOptions[0].id;
    const toLang = document.getElementById('toLang').selectedOptions[0].id;
  
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${fromLang}|${toLang}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const translated = data.responseData.translatedText;
        document.getElementById('outputText').value = translated;
      })
      .catch(error => {
        console.error('Translation error:', error);
        alert('что то не правильно');
      });
  });
  

  document.querySelectorAll('.speakBtn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const text = document.getElementById(targetId).value;
  
      if (text.trim() === "") return;
  
      const utterance = new SpeechSynthesisUtterance(text);
  
      
      const lang = (targetId === "inputText")
        ? document.getElementById('fromLang').selectedOptions[0].id
        : document.getElementById('toLang').selectedOptions[0].id;
  
      utterance.lang = lang;
      speechSynthesis.speak(utterance);
    });
  });
        