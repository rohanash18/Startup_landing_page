const scriptURL = 'https://script.google.com/macros/s/AKfycbwHysTgDLp0S_-Sjg_28NCSlaT-PNWA2ksqIGj6ZJPe1wRS8kUI87zICaPEhgTModSCfw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
              msg.innerHTML = "Thank you for subcribing!"
              setTimeout(function(){
                msg.innerHTML = ""
              },3000)
              form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })