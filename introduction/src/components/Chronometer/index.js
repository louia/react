import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export class Chronometer extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        
        this.state = {
            time: 0,
            isClicked : false,
        };
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.start();
    }
    componentWillUnmount() {
        this.stop();
    }
    clickHandle() {       
        if(this.state.isClicked){
            this.start();
            this.setState(state => ({
                isClicked: !state.isClicked,                
            }))
        }
        else{
            this.stop();
            this.setState(state => ({
                isClicked: !state.isClicked,
                time: state.time = <FontAwesomeIcon icon={faPlay} />
                
            }))
            

        }

    }
    tick() {
        this.setState(state => ({
            time: parseInt((new Date() - this.startDate)/1000)
        }));
    }
    start() {
        this.startDate = new Date();
        this.setState({
            time: 0,
        }, () => {
            this.timerID = setInterval(() => this.tick(), 1000);
        })
    }
    stop() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <Button onClick={this.clickHandle}>{this.state.time}</Button>
        );
    }
}

export default Chronometer;