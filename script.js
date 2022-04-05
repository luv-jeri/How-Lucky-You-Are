const cardGenerator = (element) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
        <img src="${element.avatar}" alt="${element.first_name}">
        <h2>${element.first_name} ${element.last_name}</h2>
        <p>${element.email}</p>
        `;
  return card;
};

const body = document.querySelector('body');

// fetch('https://reqres.in/api/users?page=2')
//   .then((res) => {
//     console.log(res);

//     const data = res.json();

//     console.log(data);

//     data.then((data_) => {
//       console.log(data_);
//       console.log(data_.data);

//       data_.data.forEach((element) => {
//         const card = cardGenerator(element);
//         body.append(card);
//       });
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const get = async () => {
  const res = await fetch('https://reqres.in/api/users?page=1');
  const data = await res.json();

  console.log(' Inside the get function ', data.data);

  if (data.data.length === 0) {
    console.log('No data');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>No data</h2>
        `;
    body.append(card);
    return;
  }

  data.data.forEach((element) => {
    const card = cardGenerator(element);
    body.append(card);
  });
};

get();

// const pr = new Promise((resolve, reject) => {
//   reject('Error 😡😡');
//   resolve('Hello');
// });

// pr.then((data) => {
//   console.log(data);
// });

// pr.catch((error) => {
//   console.log(error);
// });

// const get = async () => {
//   try {
//     var data = await pr;
//     console.log('resolved data', data);
//   } catch (error) {
//     console.log('rejected data', error);
//   }
// };

// get();

// try {
//   const age = prompt('How old are you?');
//   if (age > 18) {
//     alert('You are old enough');
//   } else {
//     throw 'You are not old enough'
//   }
// } catch (err) {
//   console.log('Something went wrong 🥲🥲');
//   console.log(err);
// }
