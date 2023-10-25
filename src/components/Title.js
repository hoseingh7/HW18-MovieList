import "./Title.css";

export default function Title(props) {
  return (
    <div className="title-block">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle"></h2>
    </div>
  );
}
