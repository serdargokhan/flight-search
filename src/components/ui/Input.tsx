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
                "border-input focus-visible:ring-ring ring-primary-600 flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            type={type}
            ref={ref}
            {...props}
        />
    );
}

export default forwardRef(Input);
