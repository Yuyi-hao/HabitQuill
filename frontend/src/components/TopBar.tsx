import { ArrowRightFromLine, Home, LeafIcon, Pen, SquareLibrary, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import LoginDialog from "./dialogs/Logindailog";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import SignUpDialog from "./dialogs/SignUpDialog";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="flex items-center justify-between px-6 py-4 sticky top-0 backdrop-blur-md z-10 shadow-md rounded-lg">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src="habitquill_logo.png" alt="HabitQuill Logo" className="w-10 h-10" />
                <p className="font-semibold text-black text-lg">HabitQuill</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
                <Button className="bg-primary hover:bg-[#d99539] text-black font-medium">
                <Home className="mr-2 size-4" /> Home
                </Button>
                <Button className="bg-primary hover:bg-[#d99539] text-black font-medium">
                <Pen className="mr-2 size-4" /> Blog
                </Button>
                <Button className="bg-primary hover:bg-[#d99539] text-black font-medium">
                <SquareLibrary className="mr-2 size-4" /> Demo
                </Button>
                <Button className="bg-primary hover:bg-[#d99539] text-black font-medium">
                <LeafIcon className="mr-2 size-4" /> About
                </Button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <Button className="bg-transparent border border-[#e6a756] text-[#e6a756] hover:bg-primary hover:text-black font-medium">
                                <ArrowRightFromLine className="size-4 mr-2" /> Login
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <LoginDialog/>
                        </DialogContent>
                    </form>
                </Dialog>
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <Button className="bg-primary hover:bg-[#d99539] text-black font-medium">
                                <UserPlus className="size-4 mr-2" /> Register
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <SignUpDialog/>
                        </DialogContent>
                    </form>
                </Dialog>
                
            </div>
            </div>

    )
}

export default TopBar;