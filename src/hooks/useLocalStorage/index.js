const setLocalItem = (item, value) => sessionStorage.setItem(item, value);

const getLocalItem = (item) => sessionStorage.getItem(item);

const useLocalStorage = () => ({
  setLocalItem,
  getLocalItem,
});

export default useLocalStorage;
