import { ReactNode, Ref, forwardRef } from "react";
import { cn } from "@/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: ReactNode;
};

function Label(
    { className, children, ...props }: LabelProps,
    ref: Ref<HTMLLabelElement>
) {
    return (
        <label
            className={cn(
                "select-none text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </label>
    );
}

export default forwardRef(Label);
