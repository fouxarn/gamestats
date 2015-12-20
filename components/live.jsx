import React from 'react'
import LiveMatch from './livematch'

class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {matches: ["test"]};
    }

    componentDidMount() {
        var socket = io.connect('http://localhost:3000');
        var that = this;
        socket.on('news', function (data) {
          //console.log(data);
          that.setState({matches: data.matches});
          //socket.emit('my other event', { my: 'data' });
        });
    }

    render() {
        return (
            <div>
                Hello React <br/><br/>
            <LiveMatch match={this.state.matches} />
            <pre>{JSON.stringify(this.state.matches.provider)}</pre>
            </div>
        )
    }
}

export default Live
