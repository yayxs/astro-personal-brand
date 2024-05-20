import { cn } from '~/utils/cls'

type Props = {
  className?: string
}
export const MdxComponents = {
  h1: ({ className, ...props }: Props) => {
    return (
      <h1
        className={cn(
          'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
          className,
        )}
        {...props}
      />
    )
  },
}
