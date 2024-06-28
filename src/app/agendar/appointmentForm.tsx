"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/shared/components/ui/form";
import { Button } from "@/shared/components/ui/button";
import { SelectForm } from "./formComponents/select";
import { DatePicker } from "./formComponents/datePicker";
import { TextareaDemo } from "./formComponents/textarea";
import ButtonPay from "./formComponents/buttonPay";
import { CheckboxGroupDemo } from "./formComponents/checkBox";
import ButtonRegisterForm from "./formComponents/buttonRegisterForm";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
});

const AppointmentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-9/12 pt-12 md:pt-20"
      >
        <div className="flex flex-col md:flex-row gap-12 md:mb-14">
          <div>
            <p className="text-base md:text-lg text-slateGray700 font-medium">
              Seleccione la especialidad
            </p>
            <SelectForm />
          </div>
          <div>
            <p className="text-base md:text-lg text-slateGray700 font-medium">
              Seleccione día y horario
            </p>
            <DatePicker />
          </div>
        </div>

        <div>
          <p className="text-base md:text-lg text-slateGray700 font-medium">
            Seleccione la razón de su consulta
          </p>
          <TextareaDemo />
        </div>
        <div className="gap-1">
          <p className="text-base md:text-lg text-slateGray700 font-medium italic text-center">
            Para poder abonar y reservar la sesión debes estar registrado
          </p>
          <div className="text-center">
            <p className="text-base md:text-lg text-slateGray700 font-medium italic text-center">
              ¿Aún no tienes cuenta?
            </p>
            <ButtonRegisterForm />
          </div>
        </div>

        {/* El boton deberia aparecer dissable si no esta logueado */}
        <div className="text-center">
          <p className="text-base md:text-lg text-slateGray700 font-medium">
            Pague aquí
          </p>
          <div className="flex flex-col">
            <p className="text-sm md:text-lg text-slateGray800 font-bold">
              Valor de la sesión: $25 USD
            </p>
            <div className="mt-1">
              <ButtonPay />
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm md:text-lg text-slateGray700 font-medium">
            Seleccione cómo desea recibir recordatorios de sesión
          </p>
          <CheckboxGroupDemo />
        </div>
        <div className="">
          <Button
            className="w-full bg-chaarcoal300 hover:bg-chaarcoalBase mt-8"
            type="submit"
          >
            <p className="text-xl font-bold">Enviar</p>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AppointmentForm;
