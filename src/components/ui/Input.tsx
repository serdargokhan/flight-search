import { Ref, forwardRef } from "react";
import { cn } from "@/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(
    { className, type, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
) {
    return (
        <input
            className={cn(
                "flex h-10 w-full rounded-md border-2 px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:border-2 focus-visible:border-primary-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            type={type}
            ref={ref}
            {...props}
        />
    );
}

export default forwardRef(Input);
