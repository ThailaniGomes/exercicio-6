import { addDays } from "date-fns";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

const semanaQueVem = addDays(new Date(), 7);

const fetchFotos = async () => {
  const response = await fetch("http://localhost:4321/api/fotos");
  return await response.json();
};

const logEvent = () => {
  console.log("Oi eu sou o Cesão");
};

const logSelectedDate = (date) => {
    console.log(`A data escolhida foi ${date}`)
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
    </div>
  );
};

export default Sandbox;
