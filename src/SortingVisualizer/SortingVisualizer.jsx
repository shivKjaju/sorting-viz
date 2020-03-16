import React from 'react'
import './style.css'


export default class SortingVisualizer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            array : []
        }

    }

    componentDidMount(){
        this.generateArray();
    }

    generateArray = () => {
        const array = []
        
        for (let i=0,t=145;i<t ; i++) {
            array.push(getRandomInt(5, 800))
        }
        
        this.setState({
             array
        })
    }


    render(){
        const { array } = this.state;

        return(
            <div className="array-container">
                {
                        array.map((value, idx) => (
                            <div className="array-bars" key={idx}  style={{
                                backgroundColor: 'turquoise',
                                height: `${value}px`,
                              }}></div>
                        ))
                    
                }
            </div>
        );
    }
}

// taken from stack overflows
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }