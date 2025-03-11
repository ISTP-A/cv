import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/utils/cn"

const buttonVariants = cva(
  'w-fit h-10 px-4 flex items-center text-base rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-black text-white hover:bg-black/80',
        outline: 'bg-transparent hover:bg-gray-100/50 border',
        link: 'p-1 bg-transparent hover:underline'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
}

export const Button = (props: ButtonProps) => {
  const { className, variant, ...other } = props
  return (
    <button className={cn(buttonVariants({ variant, className }))}
      {...other}
    />
  )
}