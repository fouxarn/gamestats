import React from 'react'

class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {matches: ["test"]};
    }

    componentDidMount() {
        var socket = io.connect('http://localhost:3000');
        var that = this;
        socket.on('news', function (data) {
          console.log(data);
          that.setState({matches: JSON.stringify(data, null, 2)});
          //socket.emit('my other event', { my: 'data' });
        });
    }

    render() {
        return (
            <div>
                Hello React <br/><br/>
            <pre>{this.state.matches}</pre>
            </div>
        )
    }
}

export default Live
