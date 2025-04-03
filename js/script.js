
const mails = 'https://flynn.boolean.careers/exercises/api/random/mail';

axios.get(mails).then((resp) => {

let randomMails = resp.data.response;
console.log(randomMails)

});