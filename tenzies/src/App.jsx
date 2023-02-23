import React from 'react';
import Die from './Die';
import Confetti from 'react-confetti';

export default function App() {

    const [ dieGroup, setDieGroup ] = React.useState(allNewDie());
    const [ tenzies, setTenzies ] = React.useState(false);

    React.useEffect(() => {
        const allHeld = dieGroup.every(die => die.isHeld)
        const allSameValue = dieGroup.every(die => die.value === dieGroup[0].value)

        if(allHeld && allSameValue) console.log('You win!'), setTenzies(true);
    }, [dieGroup])

    function allNewDie() {
        const arr = [];

        for(let i = 0; i < 10; i++) {
            arr.push({
                id: i,
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            });
        };

        return arr;
    }

    function resetGame() {
        setDieGroup(allNewDie())
        setTenzies(false)
    }

    function hold(dieId) {
        setDieGroup(prevDie => prevDie.map(die => {
                return die.id === dieId ? {...die, isHeld: !die.isHeld} : die
        }))
    }

    function rollDie() {
        setDieGroup(prevDie => prevDie.map(die => {
            return !die.isHeld ? {...die, value: Math.ceil(Math.random() * 6)} : die
        }))
    }
    
    const dices = dieGroup.map(die => <Die 
        key={die.id} 
        hold={() => hold(die.id)} 
        isHeld={die.isHeld} 
        value={die.value}/>)

    return (
        <main>
            {tenzies && <Confetti/>}
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            <div className="game-region">
                {dices}
            </div>

            <button onClick={tenzies ? resetGame : rollDie}>{tenzies ? 'New Game!' : 'Roll'}</button>
        </main>
    )
}

