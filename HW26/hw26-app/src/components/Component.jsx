import React from "react";
import eyeEmoji from '../assets/images/Eye-Emoji.png'
import pumpkinEmoji from '../assets/images/Pumpkin-Emoji.png'
import faceEmoji from '../assets/images/Slightly -Smiling-Emoji.png'
import squirelEmoji from '../assets/images/SquirrelEmoji.png'
import sweatEmoji from '../assets/images/Sweat-Emoji.png'
import { useState } from "react";
import { useEffect } from "react";

const VoteEmojies = () => {
    const [vote, setVotes] = useState({
        eyeClick: 0,
        pumpkinClick: 0,
        faceClick: 0,
        squirelClick: 0,
        sweatClick: 0,
        winner: '',
        winnerImg: '',
        showResults: false,
        maxClick: 0,
    });
    const emojiImages = {
        eyeClick: eyeEmoji,
        pumpkinClick: pumpkinEmoji,
        faceClick: faceEmoji,
        squirelClick: squirelEmoji,
        sweatClick: sweatEmoji
    }
    useEffect (()=>{
        const storedWinner = localStorage.getItem('winner')
        const storedCount = localStorage.getItem('count click');
        if(storedCount&&storedWinner){
            setVotes((prev) => ({
                ...prev,
                winner: storedWinner,
                maxClick: storedCount,
                winnerImg: emojiImages[storedWinner],
                showResults: true
            }))
    
        }

    },[])

    const handleClick = (emoji) => {
        setVotes((prev) => ({
            ...prev,
            [emoji]: prev[emoji] + 1
        }));
    };

    const handleWinner = () => {
        const values = Object.entries(vote).filter(([key, value]) => value !== 'maxClick' && value !== 'winner' && value !== 'winnerImg' && value !== 'showResults' && typeof value === 'number')
        const maxClick = Math.max(...values.map(([key, value]) => value));

        const winner = values.find(([key, value]) => value === maxClick);
      
        setVotes((prev) => ({
            ...prev,
            winner: winner ? winner[0] : '',
            maxClick: winner ? winner[1] : '',
            winnerImg: winner ? emojiImages[winner[0]] : '',
            showResults: true
        }))


        localStorage.setItem('winner', winner[0])
        localStorage.setItem('count click', winner[1])

    }
    const handleClean = () => {
        setVotes({
            eyeClick: 0,
            pumpkinClick: 0,
            faceClick: 0,
            squirelClick: 0,
            sweatClick: 0,
            winner: '',
            winnerImg: '',
            showResults: false,
            maxClick: 0
        })
        localStorage.removeItem('winner')
        localStorage.removeItem('count click')


      
    }
    return (
        <>
            <div className="emojies">
                <img onClick={() => handleClick('eyeClick')} src={eyeEmoji} alt="eye" />
                <h2>{vote.eyeClick}</h2>
                <img onClick={() => handleClick('pumpkinClick')} src={pumpkinEmoji} alt="pumpkin" />
                <h2>{vote.pumpkinClick}</h2>
                <img onClick={() => handleClick('faceClick')} src={faceEmoji} alt="face" />
                <h2>{vote.faceClick}</h2>
                <img onClick={() => handleClick('squirelClick')} src={squirelEmoji} alt="squirel" />
                <h2>{vote.squirelClick}</h2>
                <img onClick={() => handleClick('sweatClick')} src={sweatEmoji} alt="sweat" />
                <h2>{vote.sweatClick}</h2>
            </div>
            <button onClick={handleWinner}>Show result</button>
            <button onClick={handleClean}>Clean result</button>

            {vote.showResults && (
                <div className="result">
                    <div>
                        Winner:
                    </div>
                    <div> {vote.winnerImg && <img src={vote.winnerImg} alt={vote.winner} />}</div>
                    <div>{vote.maxClick}</div>
                </div>
            )}


        </>
    )
}


export default VoteEmojies