export default (element) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
        <img src="${element.avatar}" alt="${element.first_name}">
        <h2>${element.first_name} ${element.last_name}</h2>
        <p>${element.email}</p>
        `;
  return card;
};
