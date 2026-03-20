import { addDays } from "date-fns";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { FieldGroup, Field } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel } from "./ui/select";

const semanaQueVem = addDays(new Date(), 7);

const fetchFotos = async () => {
  const response = await fetch("http://localhost:4321/api/fotos");
  console.log("Clicou");
  return await response.json();
};

// const logEvent = () => {
//   console.log("Oi eu sou o Cesão");
// };

const logSelectedDate = (date) => {
  console.log(`A data escolhida foi ${date}`);
};

const logChekedStatus = (chekedStatus) => {
  console.log(`Status ${chekedStatus}`);
};
const logSelectOpcoes = (value) =>{
console.log(`Radio ${value}`);
};

const logSelectCores = (value) => {
  console.log(`Select ${value}`);
};

const Sandbox = () => {
  return (
    <div className="m-4 grid gap-10">
      <div>
        <Button onClick={fetchFotos}>Clique aqui</Button>
      </div>
      <div>
        <Calendar
          mode="single"
          selected={semanaQueVem}
          onSelect={logSelectedDate}
          className="rounded-lg border"
          captionLayout="dropdown"
        />
      </div>
      <div>
        <FieldGroup className="max-w-sm">
          <Field orientation="horizontal">
            <Checkbox
              id="terms-checkbox"
              name="terms-checkbox"
              onCheckedChange={logChekedStatus}
            />
            <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
          </Field>
        </FieldGroup>
      </div>
      <div>
        <RadioGroup defaultValue="opcoes" className="w-fit" onValueChange={logSelectOpcoes}>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="opcao1" id="r1" />
            <Label htmlFor="r1">Opção 1</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="opcao2" id="r2" />
            <Label htmlFor="r2">Opção 2</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="opcao3" id="r3" />
            <Label htmlFor="r3">Opção 3</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Select onValueChange={logSelectCores}>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Selecione uma cor" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cores</SelectLabel>
              <SelectItem value="amarelo">Amarelo</SelectItem>
              <SelectItem value="azul">Azul</SelectItem>
              <SelectItem value="vermelho">Vermelho</SelectItem>
              <SelectItem value="branco">Branco</SelectItem>
              <SelectItem value="Preto">Preto</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Sandbox;
