import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1,
        step: 1
    }
    add = () => {
        const {count, step} = this.state;
        this.setState({
            count: count + step,
            step: step + 1
        });
    }
    render() {
        const {count, step} = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.add}>+{step}</button>
            </div>
        );
    }
}

export default Counter;