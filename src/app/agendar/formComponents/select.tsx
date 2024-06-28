import * as React from "react";
import {
  Select as CustomSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../shared/components/ui/select";

export function SelectForm() {
  return (
    <CustomSelect>
      <SelectTrigger className="w-[200px] md:w-[280px] focus:ring focus:ring-slate-400 mt-3">
        <SelectValue className="text-base" placeholder="Seleccionar" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-sm md:text-base">Especialidad:</SelectLabel>
          <SelectItem className="text-sm md:text-base" value="Psicología clínica">Psicología Clínica</SelectItem>
          <SelectItem className="text-sm md:text-base" value="neuropsicología">Neuropsicología</SelectItem>
          <SelectItem className="text-sm md:text-base" value="terapia del lenguaje">Terapia del Lenguaje</SelectItem>
          <SelectItem className="text-sm md:text-base" value="psicología educativa">Psicología Educativa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </CustomSelect>
  );
}
