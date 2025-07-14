import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState, type FormEvent } from "react";
import api from "@/axios/axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const notifyLoggedIn = () => toast.success('Logged in successfully');

const SignUpDialog = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();

    if(password !== rePassword){
      setFormError("password does not match");
      return;
    }

    const route_url = "/accounts/register/";
    try{
      const res = await api.post(route_url, {email:userEmail, password:password, password2:rePassword});
      if(res.status === 200){
        localStorage.setItem(ACCESS_TOKEN, res.data.content.access_token);
        localStorage.setItem(REFRESH_TOKEN, res.data.content.refresh_token);
      }
      else{
        setFormError(res.data.message);
      }
      setFormError("");
      notifyLoggedIn();
      navigate("/accounts/profile/");
    }catch(error: any){
      if(error.status === 401){
        setFormError("Try to logout and then create new account")
      }else{
        setFormError(error.response.data.message);
      }
    }
    finally{
      setIsLoading(false);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <DialogHeader className="text-center space-y-1">
        <DialogTitle className="text-2xl font-bold">Create An Account</DialogTitle>
        <DialogDescription className="text-muted-foreground">
          Start Writing your day memories
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-4 mt-6">
        <div>
          <Label htmlFor="username">User Name</Label>
          <Input type="username" id="username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <Label htmlFor="password">Re-Password</Label>
          <Input type="password" id="re-password" required placeholder="Re-Enter the password" value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
        </div>
        {formError && <p className="text-sm text-red-600 mt-1">{formError}</p>}
      </div>

      <div className="text-center mt-4 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/account/Login" className="text-primary hover:underline">
          Login
        </Link>
      </div>

      <DialogFooter className="mt-6">
        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
        >
          {isLoading?<Loader/>:"Create an account"}
        </Button>
      </DialogFooter>
      </form>
    </>
  );
};

export default SignUpDialog;
