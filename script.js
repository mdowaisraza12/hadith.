const hadith = document.getElementById('hadis');
    const buttons = document.getElementById('newb');
    const narrator = document.getElementById('narrator');
    const sound = document.querySelector('.sound');
    function randomHadith(){
      buttons.innerText='Loading hadith...'
      fetch('https://random-hadith-generator.vercel.app/bukhari/').then(res => res.json()).then(result=>{
        console.log(result);
        hadith.innerText= result.data.hadith_english;
        narrator.innerText= result.data.header;
        buttons.innerText='New Hadith';
      })
    };

    sound.addEventListener('click',()=>{
      let speech = new SpeechSynthesisUtterance(hadith.innerText);
      speechSynthesis.speak(speech);
    })
    buttons.addEventListener("click",randomHadith);
  