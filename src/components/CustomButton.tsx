
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends ButtonProps {
    variantType?: "primary" | "secondary"
}

export default function CustomButton({
    children,
    variantType = "primary",
    className,
    ...props
}: CustomButtonProps) {

    const baseStyle =
        "px-8 font-semibold transition-all duration-300 hover:scale-105"

    const variants = {
        primary:
            "bg-gradient-to-r from-purple-500 to-purple-800  text-white hover:shadow-xl",

        secondary:
            "bg-white border border-purple-500 text-purple-500 hover:bg-purple-700 hover:text-white hover:shadow-lg",
    }

    return (
        <Button
            className={cn(baseStyle, variants[variantType], className)}
            {...props}
        >
            {children}
        </Button>
    )
}
