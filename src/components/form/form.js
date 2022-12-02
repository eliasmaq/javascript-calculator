import { Button } from "../button-number/button-number";
import { ButtonOperator } from "../button-operator/button-operator";
import { ButtonSubmit } from "../button-submit/button-submit";


export default function Form(){
  return(
    <form>
      <ButtonSubmit><ion-icon name="checkmark"></ion-icon></ButtonSubmit>
      <ButtonOperator>-</ButtonOperator>
      <ButtonOperator>+</ButtonOperator>
      <ButtonOperator>x</ButtonOperator>
      <ButtonOperator>÷</ButtonOperator>
      <Button>{0}</Button>
      <Button>{1}</Button>
      <Button>{2}</Button>
      <Button>{3}</Button>
      <Button>{4}</Button>
      <Button>{5}</Button>
      <Button>{6}</Button>
      <Button>{7}</Button>
      <Button>{8}</Button>
      <Button>{9}</Button>
      <Button>.</Button>
      <Button><ion-icon name="calendar"></ion-icon></Button>
      <Button><i className="ri-delete-back-2-fill"></i></Button>
      <Button>C</Button>
      {/* <Date/> */}
    </form>
  )
}