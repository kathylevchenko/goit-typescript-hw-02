import css from './ErrorMessage.module.css'
const ErrorMessage:React.FC=()=>{
    return (
        <p className={css.error}>There was an error! Try again!</p>
    )
}

export default ErrorMessage;