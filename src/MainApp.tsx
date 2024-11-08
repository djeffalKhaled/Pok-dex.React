import Pokemon from "./Pokemon.tsx"
import './style/MainApp.css'
import { useState } from "react";
import NavBar from './NavBar.tsx'
import Button from "react-bootstrap/Button";
import SearchInput from "./SearchInput.tsx";


function MainApp() {
  // forces components to rerender once changed
  const [offset, setOffsetPokemon] = useState(1);


  // Handles rendering next and previous pages
  function PrevButton() {
    if (offset > 1) {
      setOffsetPokemon(offset - 100);
      console.log("OFFSET: ", offset);
    }
  }
  function NextButton() {
    if (offset < 800) {
      setOffsetPokemon(offset + 100);
      console.log("OFFSET: ", offset);
    }
  }
  


  return (
    <>
    
    <NavBar />
    <SearchInput inputlabel = "" inputPlaceHolder = "Pokemon Name" buttonlabel = "Search" />
    <div className = "Pokemons">
        {Array.from({ length: 100 }, (_, index) => (
            <Pokemon key={index + offset} name={`${index + offset}`} className = "PokemonStatsContainer"/>
        ))}
    </div>
    <div className = "Offset">
      <Button className = "Previous btn-light" id = "prev-button" onClick={PrevButton}>Prev</Button>
      <Button className = "Next btn-light" id = "next-button" onClick={NextButton}>Next</Button>
    </div>
    <div className = "Link"><a href = "https://github.com/djeffalKhaled">https://github.com/djeffalKhaled</a></div>
    

    </>
  )
}

export default MainApp
