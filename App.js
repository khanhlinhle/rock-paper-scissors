import React from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard'

const choices = {
  rock:"http://wuhuli.com/wp-content/uploads/2016/02/wotw_tiny_blog.png",
  paper: "https://cdna.artstation.com/p/assets/images/images/008/662/016/large/zhong-yang-11.jpg?1514380229",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};



function App() {
    return ( 
      <div className="App">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8 themed-grid-col">
        {/* <img className="backgroundImg" src="https://static.vecteezy.com/system/resources/previews/000/693/105/original/cartoon-rock-paper-scissors-vector-characters.jpg"></img> */}
               <ChoiceCard title = "Radiant" winner = {false} imgURL = {choices.rock} />
               <ChoiceCard title = "Dire" winner = {true} imgURL = {choices.paper} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;