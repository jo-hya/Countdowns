import "./App.css";

function App() {
  return (
    <>
      <div id="main">
        <h1 className="blue-text">About Me</h1>
        <p>
          <strong>Name:</strong> Joyce Yang
        </p>
        <p>
          <strong>Hometown:</strong> Chantilly, VA
        </p>
        <p>
          <strong>School:</strong>{" "}
          <span className="blue-text">
            University of Virginia - 2nd Year, Computer Science & Mathematics Major
          </span>
        </p>
        <p className="highlight">
          <strong>Hobbies:</strong> I love art, playing video games, travelling, and listening to music.
        </p>
        <p style={{ color: "rgb(17, 67, 184)" }}>
          <strong>Pets:</strong> I have a cat named Mimi!
        </p>
        <p>
          <strong>Favorite Foods:</strong> I love Japanese cuisine and sweet treats.
        </p>

        <img src="/image.JPG" alt="A picture that represents me" width="300" />

        <p>
          Here is my{" "}
          <a href="https://github.com/jo-hya" target="_blank">
            GitHub
          </a>
          !
        </p>
      </div>
    </>
  );
}

export default App;
