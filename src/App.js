import React, { useState } from 'react'
import './App.css';
import MovieList from './components/movieList';
import AddNewCard from './components/addNewCard';
import SearchTitle from './components/searchTitle';
import StarRating from './components/star'




function App() {
  const  [state, setState] = useState([
    { title: "Hatchi",
    id:0,
    description: "The film takes up the true story of Hachikō, an Akita dog who, despite the death of his master, continued to wait for his return from work outside a station in Shibuya, Tokyo, for nine years.",
    posterUrl: "./hatchi.jpg",
    rate: 1
  },
  
  {title: "Titanic",
  id:1,
  description: "In 1912, the Titanic, the world's most luxurious passenger ship, set out across the Atlantic for New York City. It would never see it's destination.1500 people were on the ship, some first class, others restrained to the lower decks where windows were limited. Either way, the passengers on board the Titanic held high hopes, not because it was deemed the unsinkable ship but because they were leaving their past behind them and preparing for a new life in America.",
  posterUrl: "./titanic.jpg",
  rate: 2
},

  {title: "The invisible guest",
  id:2,
  description: "The life of businessman Adrián Doria turns into a nightmare the day he wakes up alongside his lifeless girlfriend. Convinced of his innocence, he hires a great lawyer to understand what really happened and prove his innocence.",
  posterUrl: "./invguest.jpg",
  rate: 3},
  {title: "Shawshank Redemption",
  id:4,
  description: "Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, a banker who spends 19 years in Shawshank State Prison for the murder of his wife and her lover despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd Red Redding, and finds himself protected by the guards after the warden begins using him in his money laundering operation. Despite a lukewarm box office reception that barely recouped its budget, the film received multiple award nominations and favorable reviews from critics for its acting and realism.",
  posterUrl: "./shawshank.jpg",
  rate: 4},

  {title: "Gone girl",
  id:5,
  description: "Gone Girl is a 2014 American psychological thriller film directed by David Fincher and with a screenplay by Gillian Flynn based on her 2012 novel of the same title. The film stars Ben Affleck, Rosamund Pike, Neil Patrick Harris, and Tyler Perry. Set in Missouri, the story is a postmodern mystery[4][5] that follows the events surrounding Nick Dunne (Affleck), who becomes the prime suspect in the sudden disappearance of his wife Amy (Pike).",
  posterUrl: "./gonegirl.jpg",
  rate: 4},
  {title: "God the fadher",
  id:6,
  description: "The Godfather Don Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.",
  posterUrl: "./godfadher.jpg",
  rate: 5}])

const [input,setInput]=useState('');


 const handleAdd=(newMovie)=>{
setState([...state,{...newMovie,id:Date.now()}])
 }
 const handleSearch=(text)=>{
   setInput(text)
 }
 const [rate,setRate]=useState(null);
 const handleRate=(number)=>{
   setRate(number)
 }
  
  return (
  <div className="App">

  <SearchTitle handleSearch={handleSearch}/>
  <StarRating handleRate={handleRate}/>
  <AddNewCard handleAdd={handleAdd}/>
  <MovieList MovieList={state} input={input} rate={rate}/>
  
    </div>
  );
  }

export default App;
  
