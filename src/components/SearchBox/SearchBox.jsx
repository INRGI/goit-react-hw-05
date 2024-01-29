import { useState } from "react";
import { Form, FormButton, Input, Label } from "./SearchBox.styled";
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <FormButton type="submit">
                <IoSearchSharp size={24}/>
                <Label>Search</Label>
            </FormButton>
        </Form>
    );
};

export default SearchBox;
