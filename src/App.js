import React,{ Component } from 'react';
import { CardList } from './component/cardlist/cardlist.component'
import { Searchbox } from './component/searchbox/searchbox.component';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      monsters:[],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(array => this.setState({monsters:array}))
  }

  handlechange = (e) => {
    this.setState({searchfield:e.target.value})
  }

  render(){
    const {monsters,searchfield} = this.state;
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    )
    return(
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <Searchbox 
          placeholder='search monsters'
          handlechange={this.handlechange} 
        />
        <CardList monsters={filteredmonsters}/>
      </div>
    );
  }
}

export default App;
