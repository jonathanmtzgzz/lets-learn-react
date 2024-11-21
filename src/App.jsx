function App() {
  function handleClick() {
    alert("Me hiciste click");
  }

  return <button onClick={handleClick}>Hazme clic</button>;
}

export default App;
