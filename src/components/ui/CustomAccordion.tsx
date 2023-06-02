"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import cn from "@/libs/cn";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
    ElementRef<typeof AccordionPrimitive.Item>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <AccordionPrimitive.Item
            ref={ref}
            className={cn("border-b", className)}
            {...props}
        />
    );
});

AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export const AccordionTrigger = forwardRef<
    ElementRef<typeof AccordionPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
    return (
        <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    "w-full flex items-center justify-between hover:underline py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDown />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = forwardRef<
    ElementRef<typeof AccordionPrimitive.Content>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
    return (
        <AccordionPrimitive.Content
            ref={ref}
            className={cn(
                "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                className
            )}
            {...props}
        >
            {children}
        </AccordionPrimitive.Content>
    );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
