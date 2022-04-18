import cx from 'classnames';

export const contrasts = {
  min: 'bg-white dark:bg-black',
  base: 'bg-white dark:bg-zinc-700',
  low: 'bg-zinc-50 dark:bg-zinc-900',
  med: 'bg-zinc-100 dark:bg-zinc-800',
  high: 'bg-zinc-200 dark:bg-zinc-700',
  max: 'bg-black dark:bg-white',
};

export const elevations = {
  0: 'shadow-none',
  1: 'shadow-sm',
  2: 'shadow-md',
  3: 'shadow-lg',
  4: 'shadow-xl',
  5: 'shadow-2xl',
};

export const Surface = ({
  className,
  bordered,
  contrast = 'base',
  elevation,
  rounded,
  ...props
}: any) => {
  // @ts-ignore
  const bg = contrasts[contrast];
  const borderClass = 'border border-zinc-300 dark:border-zinc-500';
  // @ts-ignore
  const shadowClass = elevations[elevation];
  const textColor = 'text-zinc-900 dark:text-zinc-50';
  const classes = cx(
    bg,
    textColor,
    'p-5',
    rounded && 'rounded-md',
    bordered && borderClass,
    shadowClass,
    className
  );

  return <div className={classes} {...props} />;
};

const TypographyExample = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="font-bold text-4xl">Aa</div>
      <div className="flex-1">
        <div className="flex flex-col gap-1 text-sm">
          <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <div className="opacity-70">abcdefghijklmnopqrstuvwxyz</div>
          <div className="opacity-50">0123456789!@#$%^&*()</div>
        </div>
      </div>
    </div>
  );
};
