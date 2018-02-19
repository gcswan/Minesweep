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
        let mines;
        let gridStyle;

        switch(this.state.difficulty){
            case "easy": 
                rows = 5; cols = 5; gridStyle = "grid-5";
                mines = rows * cols / 4
                mines = Math.round(mines)
                for(let i = 0; i < mines; i++){
                    let x = Math.floor((Math.random() * cols) + 1);
                    let y = Math.floor((Math.random() * rows) + 1);
                   
                }
                
            break;
            case "medium": 
                rows = 10; cols = 10; gridStyle = "grid-10";
                mines = rows * cols / 4
                mines = Math.round(mines)
                
            break;
            case "hard": 
                rows = 15; cols = 15; gridStyle = "grid-15";
                mines = rows * cols / 4
                mines = Math.round(mines)
                
            break; 
        }
        
  
        const createGrid = () => {
            //   a loop to create rows
            for(let row = 0; row < rows; row++){
                grid[row] = [];
                //   make columns by pushing in null values;
                for(let col = 0; col < cols; col++){
                    grid[row].push(<Cell />);
                }

            }
            console.log(grid);
            return grid;
        }
        createGrid();
        
        const createMines = () => {
            const tiles = rows * cols;
            let mines = rows * cols / 4;
            mines = Math.round(mines);
            for(let i = 0; i < mines; i++){

                    let x = Math.floor((Math.random() * cols) + 1);
                    let y = Math.floor((Math.random() * rows) + 1);
                    
                }
                console.log("createMines logging amount of mines: ", mines);
                
        }
        
        createMines();
  
  

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





// let mineRow = [] 
//             let mineCol = []
//             let mines = rows * cols / 4;
//             mines = Math.round(mines);
//             for(let i = 0; i < mines; i++){
//                 // this loop generates a random set of coordinates where each mine can be found
//                     let x = Math.floor((Math.random() * cols) + 1);
//                     let y = Math.floor((Math.random() * rows) + 1);
//                     mineCol.push(x);
//                     mineRow.push(y)
//                 }








// for(let row = 0; row < rows; row++){
//                 grid[row] = [];
//                 //   make columns by pushing in null values;
//                 for(let col = 0; col < cols; col++){
//                     for(let i = 0; i < mines; i++){
//                         if(mineRow[i] === row && mineCol[i] === col){
//                             grid[row].push(<Cell hint={0} mine={true}/>)
//                         }
    
//                             grid[row].push(<Cell hint={0} mine={false}/>) 
                        
//                     }
//                 }
















