import { Btn } from "./Button.styled";

const Button = ({text}) => {
    return (
        <Btn type="button">{text}</Btn>
    );
};

export default Button;