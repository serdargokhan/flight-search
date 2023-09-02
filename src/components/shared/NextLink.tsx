import Link from "next/link";
import type { ReactNode } from "react";

type NextLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    href: string;
};

export function NextLink({ children, href, ...rest }: NextLinkProps) {
    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    );
}
