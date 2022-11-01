import data from '../data/MOCK_DATA'
export default function getItemsFromAPI () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}