import { ReactNode, Ref, forwardRef } from "react";
import { cn } from "@/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

function Button(
    { className, children, type, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>
) {
    return (
        <button
            className={cn(
                "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                className
            )}
            type={type}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
}

export default forwardRef(Button);
