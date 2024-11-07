import Pokemon from './Pokemon.tsx'
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from 'react-bootstrap/FormControl';
import './style/SearchInput.css';

type InputProps = {
    inputlabel: string;
    inputPlaceHolder: string;
    buttonlabel: string;
};

function SearchInput(props : InputProps) {
    // States - they rerender a component if its value gets changed
    const [showPokemon, setShowPokemon] = useState(false);
    const [inputValue, setInputValue] = useState('');
    // Reference - think of it as getElementById
    const inputRef = useRef<HTMLInputElement>(null);

    function ButtonClicked() {
        setShowPokemon(false);
        if (inputRef.current) {
            setInputValue(inputRef.current.value.toLowerCase());
            setShowPokemon(true);
        }
    }


    return (
        <>
            <Form className = "Search">
                <Form.Group className="mb-3 d-flex align-items-center"  controlId="exampleForm.ControlInput1">
                    <label htmlFor = "search-input" itemType = "text">{props.inputlabel}</label>
                    <Input width = '30px' id = "search-input" ref = {inputRef} placeholder = {props.inputPlaceHolder} className = "SearchInput"></Input>
                    <Button id = "search-button" onClick = {ButtonClicked} className = "SearchButtont">{props.buttonlabel}</Button>
                </Form.Group>
            </Form>
            {showPokemon && <Pokemon name = {inputValue}/>}
        </>
    );
}
export default SearchInput