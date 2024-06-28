import { Button } from "@/shared/components/ui/button";
import useSession from "@/shared/hooks/useSession";

export default function ButtonPay() {
  const { loggedIn } = useSession();

  return (
    <Button 
      className={`bg-chaarcoal300 hover:bg-chaarcoalBase w-3/5 md:w-1/5
        ${!loggedIn ? 'bg-slateGray800 disabled:pointer-events-none' : ''}`} 
      disabled={!loggedIn}
    >
      <p className="text-base font-bold">Pagar</p>
    </Button>
  );
}
