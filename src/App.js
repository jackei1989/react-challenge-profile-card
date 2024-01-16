// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar avatar="avatar/avatar.jpg" alt="avatar" />
      <div className="body">
        <h1 className="name">jabbar mohammadi</h1>
        <p>hi im jabbar </p>
        <Skill skill="js" imoji="😡" color="blue" />
      </div>
    </div>
  );
}

// function Card() {}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.avatar} alt={props.alt} />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill-card" style={{ backgroundColor: props.color }}>
      <span className="skill-text">{props.skill}</span>
      <span className="imoji">{props.imoji}</span>
    </div>
  );
}

export default App;
