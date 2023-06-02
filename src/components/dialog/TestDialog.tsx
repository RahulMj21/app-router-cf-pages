import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog";
import CustomButton from "../ui/CustomButton";

const TestDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2 w-full justify-end">
                    <DialogClose asChild>
                        <CustomButton variant="outline">Close</CustomButton>
                    </DialogClose>
                    <DialogClose asChild>
                        <CustomButton>Confirm</CustomButton>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TestDialog;
