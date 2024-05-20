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
  h2: ({ className, ...props }: Props) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: Props) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: Props) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: Props) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: Props) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: Props) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: Props) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: Props) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: Props) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  p: ({ className, ...props }: Props) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
}
