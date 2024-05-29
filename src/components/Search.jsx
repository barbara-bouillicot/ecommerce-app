export default function Search({ setQuery }) {

  const searchItem = (event) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <input type="text" onChange={searchItem} />
  );
}
