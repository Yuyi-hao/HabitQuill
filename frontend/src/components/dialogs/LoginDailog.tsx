import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const LoginDialog = () => {
  return (
    <>
      <DialogHeader className="text-center space-y-1">
        <DialogTitle className="text-2xl font-bold">Login</DialogTitle>
        <DialogDescription className="text-muted-foreground">
          Stay connected to your days
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-4 mt-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" required />
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-muted-foreground">
        Don’t have an account?{" "}
        <Link to="/account/register" className="text-primary hover:underline">
          Create one
        </Link>
      </div>

      <DialogFooter className="mt-6">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
        >
          Login
        </Button>
      </DialogFooter>
    </>
  );
};

export default LoginDialog;
