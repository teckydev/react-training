const myelemet=React.createElement('h1',{},'hello world');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myelemet);
const parent = React.createElement('div', {
    id: "parent"
}, React.createElement('div', { id: "child" }, React.createElement('h1', null, 'hello this react')));

const val = ReactDOM.createRoot(document.getElementById('container'));
val.render(parent);
const example=React.createElement('div',{className:'container'},React.createElement('h1',{className:'greeting'},'react training started'),React.createElement('p',null,'this basic examples'))
root.render(example);