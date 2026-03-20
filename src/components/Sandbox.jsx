import { addDays } from "date-fns";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { FieldGroup, Field } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const semanaQueVem = addDays(new Date(), 7);

const fetchFotos = async () => {
  const response = await fetch("http://localhost:4321/api/fotos");
  return await response.json();
};

const logEvent = () => {
  console.log("Oi eu sou o Cesão");
};

const logSelectedDate = (date) => {
  console.log(`A data escolhida foi ${date}`);
};

const logChekedStatus = (chekedStatus) =>{
  console.log(`Status ${chekedStatus}`)
}

const Sandbox = () => {
  return (
    <div className="flex">
      <Button onClick={fetchFotos}>Clique aqui</Button>

      <Calendar
        mode="single"
        selected={semanaQueVem}
        onSelect={logSelectedDate}
        className="rounded-lg border"
        captionLayout="dropdown"
      />
      <FieldGroup className="max-w-sm">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox" name="terms-checkbox" onCheckedChange={logChekedStatus} />
          <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
        </Field>
      </FieldGroup>
    </div>
  );
};

export default Sandbox;
