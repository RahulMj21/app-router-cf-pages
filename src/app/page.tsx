import TestAccordion from "@/components/accordion/TestAccordion";
import TestDialog from "@/components/dialog/TestDialog";
import CustomButton from "@/components/ui/CustomButton";

export const runtime = "edge";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-5 p-24">
            <CustomButton>Radha Radha</CustomButton>
            <CustomButton variant="outline">Radha Radha</CustomButton>
            <div className="w-[20rem] px-2 border-2 rounded-md">
                <TestAccordion />
            </div>
            <TestDialog />
        </main>
    );
}
