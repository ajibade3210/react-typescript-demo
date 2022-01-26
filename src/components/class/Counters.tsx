import {Component} from 'react'

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export class Counters extends Component<CounterProps,CounterState> {
    state = {
        count: 0
    }

    handleAdd = () => {
        this.setState((prevState)=> ({count: prevState.count + 1}))
    }
    handleSubtract = () => {
        this.setState((prevState)=> ({count: prevState.count - 1}))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAdd}>Increment</button>
                {this.props.message} {this.state.count}
                <button onClick={this.handleSubtract}>Decrement</button>
            </div>
        )
    }
}