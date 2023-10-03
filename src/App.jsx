import Hero from "./component/Hero";

const App = () => {
  const itemObj = {
    name: "Badsha Hossain",
    age: 26,
    city: "Dhaka"
  }
  return (
    <div>
      <Hero item={itemObj}/>
    </div>
  );
};

export default App;
