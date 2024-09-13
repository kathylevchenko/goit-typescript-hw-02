import css from './ErrorMessage.module.css'
export default function ErrorMessage(){
    return (
        <p className={css.error}>There was an error! Try again!</p>
    )
}