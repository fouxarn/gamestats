var React = require('react')

module.exports = React.createClass({
    getInitialState: function() {
        return {matches: ["test"]};
    },

    componentDidMount: function() {
        var socket = io.connect('http://localhost:3000');
        var that = this;
        socket.on('news', function (data) {
          console.log(data);
          that.setState({matches: JSON.stringify(data, null, 2)});
          //socket.emit('my other event', { my: 'data' });
        });
    },

    render: function() {
        return (
            <div>
                Hello React <br/><br/>
            <pre>{this.state.matches}</pre>
            </div>
        )
    }
})
