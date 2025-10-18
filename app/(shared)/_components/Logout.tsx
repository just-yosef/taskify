import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";
interface Props {
  isPending?: boolean;
  handelFn?: React.MouseEventHandler<HTMLButtonElement>;
  //    Promise<void>;
}
const Logout = ({ isPending = false, handelFn }: Props) => {
  return (
    <Button onClick={handelFn} disabled={isPending} variant="destructive">
      <LogOut /> {isPending ? "Logging out.." : "Logout"}
    </Button>
  );
};

export default Logout;
