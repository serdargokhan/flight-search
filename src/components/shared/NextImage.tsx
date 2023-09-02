import Image, { ImageProps, StaticImageData } from "next/image";
import { cn } from "@/utils";

type NextImageProps = ImageProps & {
    src: string | StaticImageData;
    alt: string;
    rootClassName?: string;
};

export function NextImage({
    src,
    alt,
    rootClassName,
    ...rest
}: NextImageProps) {
    return (
        <div className={cn("relative h-full w-full", rootClassName)}>
            <Image
                src={src}
                alt={alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                {...rest}
            />
        </div>
    );
}
