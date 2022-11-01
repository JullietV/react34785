import data from '../data/MOCK_DATA'
export function getItemsFromAPI () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export function getItemFromAPI (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find(item => item.id === id));
    }, 2000);
  });
}
export function getItemsFromAPIByCategory (cat) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.filter(item => encodeURIComponent(item.category).toLowerCase === encodeURIComponent(cat).toLowerCase));
    }, 2000);
  });
}