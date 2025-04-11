import { set } from "mongoose";
import React, { Component } from "react";
import eyeEmoji from '../assets/images/Eye-Emoji.png'
import pumpkinEmoji from '../assets/images/Pumpkin-Emoji.png'
import faceEmoji from '../assets/images/Slightly -Smiling-Emoji.png'
import squirelEmoji from '../assets/images/SquirrelEmoji.png'
import sweatEmoji from '../assets/images/Sweat-Emoji.png'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eyeClick: 0,
            pumpkinClick: 0,
            faceClick: 0,
            squirelClick: 0,
            sweatClick: 0,
            winner: '',
            winnerImg: '',
            showResults: false,
            maxClick: 0,

        }
    }

    handleClick = (emojiName) => {
        this.setState((prev) => ({
            [emojiName]: prev[emojiName] + 1

        }))
    }
    handleClean = () => {
        this.setState({
            eyeClick: 0,
            pumpkinClick: 0,
            faceClick: 0,
            squirelClick: 0,
            sweatClick: 0,
            maxClick: 0,
            winner: '',
            winnerImg: '',
            showResults: false
        })
    }

    handleWinner=()=> {
        const values = Object.entries(this.state).filter(([key, value]) => value !== 'maxClick' && value !== 'winner' && value !== 'winnerImg' && value !== 'showResults' && typeof value === 'number');

        const maxClick = Math.max(...values.map(([key, value]) => value));

        const winner = values.find(([key, value]) => maxClick === value);

        const emojiImages = {
            eyeClick: eyeEmoji,
            pumpkinClick: pumpkinEmoji,
            faceClick: faceEmoji,
            squirelClick: squirelEmoji,
            sweatClick: sweatEmoji
        }
        this.setState({
            winner: winner ? winner[0] : '',
            maxClick: winner ? winner[1] : 0,
            winnerImg: winner ? emojiImages[winner[0]] : '',
            showResults: true
        })
    }

    render() {
        return (
            <>
                <div className="emojies">
                    <img onClick={() => this.handleClick('eyeClick')} src={eyeEmoji} alt="eye" />
                    <h2>{this.state.eyeClick}</h2>
                    <img onClick={() => this.handleClick('pumpkinClick')} src={pumpkinEmoji} alt="pumpkin" />
                    <h2>{this.state.pumpkinClick}</h2>
                    <img onClick={() => this.handleClick('faceClick')} src={faceEmoji} alt="face" />
                    <h2>{this.state.faceClick}</h2>
                    <img onClick={() => this.handleClick('squirelClick')} src={squirelEmoji} alt="squirel" />
                    <h2>{this.state.squirelClick}</h2>
                    <img onClick={() => this.handleClick('sweatClick')} src={sweatEmoji} alt="sweat" />
                    <h2>{this.state.sweatClick}</h2>
                </div>
                <button onClick={this.handleWinner}>Show result</button>
                <button onClick={this.handleClean}>Clean result</button>
                {this.state.showResults && (
                    <div className="result">
                        <div>
                            Winner:
                        </div>
                        <div>
                            {this.state.winnerImg && <img src={this.state.winnerImg} alt={this.state.winner} />}
                        </div>
                        <div> {this.state.maxClick} clicks</div>
                    </div>
                )}


            </>
        )

    }
}