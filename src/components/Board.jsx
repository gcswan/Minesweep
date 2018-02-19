import React from "react";
import Cell from "./Cell"





class Board extends React.Component {
    constructor(){
        super();
        this.state = {
            difficulty: "easy"
        }
        this.difficulty = this.difficulty.bind(this);
    }
    difficulty(e){
        e.preventDefault();
        this.setState({
            difficulty: e.target.value
        })
        
    }


    render() {
        const grid = [];
        let rows;
        let cols;
        let gridStyle;

        switch(this.state.difficulty){
            case "easy": rows = 5; cols = 5; gridStyle = "grid-5";
            break;
            case "medium": rows = 10; cols = 10; gridStyle = "grid-10";
            break;
            case "hard": rows = 15; cols = 15; gridStyle = "grid-15";
            break; 
        }
        
  
        const createGrid = () => {
            //   a loop to create rows
            for(let row = 0; row < rows; row++){
                grid[row] = [];
                //   make columns by pushing in null values;
                for(let col = 0; col < cols; col++){
                    grid[row].push(<Cell hint={0} mine={true}/>);
                }
            }
            return grid;
        }
        createGrid();
        
  
  

        return (
            <div>
                <div className={gridStyle}>
                    {grid}
                </div>
                <form>
                    <button onClick={this.difficulty}value="easy">Easy</button>
                    <button onClick={this.difficulty}value="medium">Medium</button>
                    <button onClick={this.difficulty}value="hard">Hard</button>
                </form>
            </div>
        );
    }
}


export default Board;






















