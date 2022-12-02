export default function Input({children, onClickButton}){
// const [result, setResult] = React.useState("");

  function handleClick(event) {
    onClickButton(event.target.value);
  }
  return(
    <p onClick={handleClick}>{children}</p>
  )

}