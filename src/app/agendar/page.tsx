import ComeBack from "@/shared/components/ComeBack/comeBack";
import AppointmentForm from "./appointmentForm";


export default function Agendar () {
    return(
        <div className='bg-gradient-to-b from-whiteSmokeBase to-chaarcoalLight min-h-screen flex flex-col justify-center'>
			<div className='pt-16 md:pt-28 pb-40 w-[90%] md:w-[95%] flex flex-col self-center items-center'>
				<div className='relative bottom-6 md:bottom-8 self-start'>
					<ComeBack/>					
				</div>
				<div className="bg-white w-[95%] md:w-3/5 rounded-xl py-10 md:py-14 border-t-8 border-teaRose500">
                    <div className="flex flex-col items-center">
                        <p className="text-2xl md:text-3xl text-chaarcoal300 font-bold">Agendar consulta</p>
                        <p className="text-base w-[90%] text-center md:w-full md:text-xl text-slateGrayBase font-semibold pt-2">Complete el formulario para reservar su turno</p>
                    </div>
                    <div className=" flex justify-center">
                        <AppointmentForm />
                    </div>
                </div>
			</div>
		</div>
    )
}