import React from 'react'
import './style.css'

import BubbleSort from '../SortingAlgorithms/BubbleSort'

const Primary_Color = 'turquoise';
const Secondary_Color = 'red';

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
        let array = []
        
        for (let i=0;i<145; i++) {
            array.push(getRandomInt(5, 700))
        }
        this.setState({
             array
        })
    }

    bubbleSort = (array) => {
        // let array = this.state.array;
        // const sortedArray = BubbleSort(array)
        // const testArray = array.sort((a,b) => a-b);
        let isSorted = false
        const arrayBar = document.getElementsByClassName('array-bars');

            while(!isSorted){
                isSorted = true
                for(let i = 0; i < array.length-1; i++){
                    
                    setTimeout(() => {

                        if(array[i] > array[i+1]){
                            arrayBar[i].style.backgroundColor = 'red'
                            arrayBar[i+1].style.backgroundColor = 'red'
                            this.swap(i, i+1, array);
                            isSorted = false;
                        }

                        setTimeout(() => {
                            arrayBar[i].style.backgroundColor = 'turquoise'
                            arrayBar[i+1].style.backgroundColor = 'turquoise'
                        }, (i+1) * 10)
                    }, i*10)

                   
                }
            }
        
    }


    swap = (i, j, array) => {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
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
                <div>
                    <button onClick={this.generateArray}>Generate Array</button>
                    <button onClick={()=> this.bubbleSort(this.state.array)}>Bubble Sort</button>
                </div>
                
            </div>
        );
    }
}

// taken from stack overflows
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }