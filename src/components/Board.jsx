import React from "react";
import Cell from "./Cell"


class Board extends React.Component {
    constructor(){
        super()
        this.state = {
           rows: 5,
           cols: 5 
        }
          
        
    }
   
    render(){
        
        // const rows = this.state.rows;
        // const cols = this.state.cols
        
        let grid = []
        
        function createGrid() {
            for(let i = 0; i < 5; i++){
                grid = grid[i] = new Array(5).fill([]); 
                    for(let j = 0; j < 5; j++){
                        grid = grid[i][j] = new Array(5).fill(" ")
                    } 
            }
            return grid
        }
        createGrid();
        console.log(grid)
        
        return (
            <div>something</div>
        )
    }
}

export default Board;