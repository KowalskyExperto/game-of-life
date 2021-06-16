import React from 'react'
import './GameOfLife.css';
export const GameOfLife = () => {
    return (
        <div>
            <h1>The Game Of Life</h1>
            <div className="cells">
                <div className="cells-row">
                    <div className="cell alive"></div>
                    <div className="cell dead"></div>
                    <div className="cell alive"></div>
                    <div className="cell dead"></div>
                </div>
                <div className="cells-row">
                    <div className="cell dead"></div>
                    <div className="cell alive"></div>
                    <div className="cell alive"></div>
                    <div className="cell dead"></div>
                </div>
            </div>
        </div>
    )
}