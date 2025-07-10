import LoginDialog from "@/components/dialogs/Logindailog";
import SignUpDialog from "@/components/dialogs/SignUpDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const AuthDialogWrapper = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(location.pathname === "/account/login" || location.pathname === "/account/register"){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }, [location.pathname]);

    const handleClose = () => {
        setOpen(false);
    }

    return <>
        <Dialog open={open} onOpenChange={handleClose}>
             <DialogContent>
                {location.pathname === "/account/login" && <LoginDialog />}
                {location.pathname === "/account/register" && <SignUpDialog />}
            </DialogContent>
        </Dialog>
    </>
}

export default AuthDialogWrapper;
