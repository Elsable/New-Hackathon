import React, { Component } from 'react'
import { SearchInput, Notify } from 'zent';
import Cardwork from './cardwork';

export class Work extends Component {
    state = {
        value: ''
    };
    
    onChange = evt => {
        this.setState({
        value: evt.target.value
        });
    };
    
    onPressEnter = () => {
        const { value } = this.state;
    
        if (value) {
        Notify.success(`Your enter content: ${value}`);
        } else {
        Notify.error('Please input search content');
        }
    }
    
    render() {
        const { value } = this.state;
        return (
        <div>
            <SearchInput
                value={value}
                onChange={this.onChange}
                placeholder="Search"
                onPressEnter={this.onPressEnter}
            />
            <Cardwork/>
        </div>
        )
    }
}

export default Work
