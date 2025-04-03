const emailContainer = document.getElementById('email-container');
const repeatButton = document.getElementById('repeat-button');

const repeat = () => {

    emailContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
    
        const mails = 'https://flynn.boolean.careers/exercises/api/random/mail';
    
        axios.get(mails).then((resp) => {
        
            let randomMails = resp.data.response;
            let listElement = document.createElement('li');
            listElement.innerText = randomMails;
            emailContainer.appendChild(listElement);
        
        });
    };

};

repeatButton.addEventListener('click', repeat);