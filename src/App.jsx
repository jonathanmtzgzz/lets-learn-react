const user = {
  name: "Jonathan",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="img-thumbnail"
        src={user.imageUrl}
        alt={"Foto de " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default App;
