import React from 'react';
import PropTypes from 'prop-types';

export class SortButton extends React.Component {

    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        this.state = {
            active: props.active,
            order : props.order,
            disabled : props.disabled,
        };
    }
 
    clickHandle() { 
        if(this.state.active){
            
        }
    }

    render() {
        if (this.state.disabled) {
            return (
                <button disabled>{this.props.children}</button>
            );
        }
        return (
            <button onClick={this.clickHandle}>{this.props.children}</button>
        );
    }
}

SortButton.propTypes = {
    active: PropTypes.bool,
    order: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};


export default SortButton;
