/** @jsx React.DOM */

var TodoApp = React.createClass({
  getInitialState: function() {
    return { items: [], text: '' };
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var nextItems = this.state.items.concat([{title: this.state.text}]);
    var nextText = '';

    this.setState({items: nextItems, text: nextText});
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>Add</button>
        </form>

        <ItemList items={this.state.items} />
      </div>
    );
  }
});

var ItemList = React.createClass({
  render: function() {
    var createItem = function(item){
      return Item(item);
    };
    return (
      <ul>{this.props.items.map(createItem)}</ul>
    );
  }
});

var Item = React.createClass({
  render: function(){
    return (
      <li>{this.props.title}</li>
    );
  }
});

window.onload = function() {
  var mountNode = document.getElementById("react");
  React.renderComponent(<TodoApp />, mountNode);
};
