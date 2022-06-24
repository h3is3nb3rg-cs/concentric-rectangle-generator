import "./App.css";

function App() {
  const max_width = 500;
  const step = 100;

  const RecurrentDiv = ({ width }) => {
    const style = {
      width: `${width}px`,
      height: `${width}px`,
    };

    return width < step ? null : (
      <div style={style} className="rectangle-container">
        <RecurrentDiv width={width - step} />
      </div>
    );
  };
  return (
    <div className="App">
      <RecurrentDiv width={max_width} />
    </div>
  );
}

export default App;
