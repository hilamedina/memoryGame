import './App.css';
import Card from './component/card/Card';

function App() {
  const arrayOfCard = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      let ran = Math.random();
      randomIndex = Math.floor(ran * currentIndex); // curr =3 ran=0.9
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const mapOfCard = () => {
    return shuffle(arrayOfCard).map((onecard, i) => {
      return <Card name={onecard} key={i}></Card>;
    });
  };
  return (
    <div className="App">
      <div className="board">{mapOfCard()}</div>
      {/* <div className="board">
        {arrayOfCard.map((onecard, i) => {
          return <Card name={onecard} key={i}></Card>;
        })} */}
    </div>
  );
}

export default App;
