import LoginDialog from "@/components/dialogs/Logindailog";
import SignUpDialog from "@/components/dialogs/SignUpDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { createContext, useContext, useState } from "react";

const AuthDialogContext = createContext<{
    openLogin: () => void
    openRegister: () => void
}>({
    openLogin: () => {},
    openRegister: () => {}
})

export const useAuthDialog = () => useContext(AuthDialogContext);

export const AuthDialogProvider = ({children}: {children: React.ReactNode}) => {
    const [dialogType, setDialogType] = useState<"login" | "register"| null>(null);

    const closeDialog = () => {setDialogType(null)};

    return (
        <AuthDialogContext.Provider
            value={{
                openLogin: () => setDialogType("login"),
                openRegister: () => setDialogType("register"),
            }}
        >
            {children}
            <Dialog open={dialogType !== null} onOpenChange={closeDialog}>
                <form>
                    <DialogContent>
                        {dialogType === "login" && <LoginDialog />}
                        {dialogType === "register" && <SignUpDialog />}
                    </DialogContent>
                </form>
            </Dialog>
        </AuthDialogContext.Provider>
    )
}
