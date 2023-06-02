import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/CustomAccordion";

const TestAccordion = () => {
    return (
        <Accordion type="multiple">
            <AccordionItem value="Radha">
                <AccordionTrigger>Shyam</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, voluptatem et veritatis a ex cumque odio
                    inventore velit nostrum explicabo!
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hello">
                <AccordionTrigger>Shyam</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, voluptatem et veritatis a ex cumque odio
                    inventore velit nostrum explicabo!
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Radhe">
                <AccordionTrigger />
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, voluptatem et veritatis a ex cumque odio
                    inventore velit nostrum explicabo!
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default TestAccordion;
