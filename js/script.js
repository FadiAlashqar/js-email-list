

for (let i = 0; i < 10; i++) {
    
    const emailContainer = document.getElementById('email-container');
    
    const mails = 'https://flynn.boolean.careers/exercises/api/random/mail';

    axios.get(mails).then((resp) => {
    
        let randomMails = resp.data.response;
        let listElement = document.createElement('li');
        listElement.innerText = randomMails;
        emailContainer.appendChild(listElement);
    
    });
};