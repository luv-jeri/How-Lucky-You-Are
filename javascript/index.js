import cardGenerator from './func/cardGenerator.js';
import getData from './func/getData.js';

const body = document.querySelector('body');

const get = async () => {
  const data = await getData('https://reqres.in/api/users?page=1');

  data.forEach((element) => {
    const card = cardGenerator(element);
    body.append(card);
  });
};

get();
