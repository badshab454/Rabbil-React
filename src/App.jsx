import Hero from "./component/Hero";

const App = () => {
  const BtnClick = () => {
    alert('alert')
  }
  return (
    <div>
      <button onClick={BtnClick}>Submit</button>
    </div>
  );
};

export default App;
