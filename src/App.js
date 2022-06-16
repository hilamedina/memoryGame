import './App.css';
import Card from './component/card/Card';

function App() {
  const row = 4;
  const column = 4;
  const arrayOfCard = ['hila', 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const mapOfCard = () => {
    return arrayOfCard.map((onecard, i) => {
      return <Card name={onecard} key={i}></Card>;
    });
  };
  return (
    <div className="App">
      <div className="board">{mapOfCard()}</div>
    </div>
  );
}

export default App;
