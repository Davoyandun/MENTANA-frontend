import { Label } from "../../../shared/components/ui/label";
import { Checkbox } from "../../../shared/components/ui/checkbox";

export function CheckboxGroupDemo() {
  return (
    <div className="flex flex-row justify-center gap-4 mt-2">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="checkbox1" 
          className="focus:ring-2 focus:ring-slate-400 focus:outline-none" 
        />
        <Label className="text-base text-slateGray800 font-semibold" htmlFor="checkbox1">
          Teléfono/Celular
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="checkbox2" 
          className="focus:ring-2 focus:ring-slate-400 focus:outline-none checked:bg-chaarcoalLight" 
        />
        <Label htmlFor="checkbox2" className="text-base text-slateGray800 font-semibold ">
          Email
        </Label>
      </div>
    </div>
  );
}
