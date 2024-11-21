const alumnos = [
  { name: "Jonathan", isAlumn: true, id: 1 },
  { name: "Ever", isAlumn: false, id: 2 },
  { name: "Jorge", isAlumn: true, id: 3 },
];

function App() {
  const listAlumnos = alumnos.map((alumno) => (
    <li
      key={alumno.id}
      style={{
        color: alumno.isAlumn ? "darkgreen" : "darkred",
      }}
    >
      {alumno.name}
    </li>
  ));

  return <ul>{listAlumnos}</ul>;
}

export default App;
