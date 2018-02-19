import React from "react";


class Cell extends React.Component {
    constructor(props){
        super()
        this.state = {
            visibility: 'hidden'
        }
    }


    render(){
        console.log(this.props)
        const hint = this.props.hint;
        const mine = String.fromCharCode(0x125CF)
        const score = this.props.mine ? mine : hint;
        
       
    
        return (
        
            <div onClick={(e)=>{this.setState({visibility: 'visible'})}} className="cell">
                <div className={this.state.visibility}>
                    {score}
                </div> 
            </div>
        )
    }

}



 export default Cell;