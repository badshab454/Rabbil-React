const App = () => {
  let marks = 85;
  return (
    <div>
      {(()=>{
        if(marks >= 80) {
          return "A+";
        } else if (marks >= 70) {
          return "A";
        } else if (marks >= 60) {
          return "A-";
        } else if ( marks >= 50) {
          return "B";
        } else if (marks >=  40) {
          return "C";
        } else if (marks >= 33) {
          return "D";
        } else {
          return "F";
        }
      })()}          
    </div>
  );
};

export default App;
