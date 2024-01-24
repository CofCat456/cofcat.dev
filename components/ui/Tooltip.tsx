'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  useState,
} from 'react';

const { Portal, Provider, Root, Trigger } = TooltipPrimitive;

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    className={clsx(
      'z-50 overflow-hidden rounded-md bg-gradient-to-b from-zinc-50/50 to-white/95 px-3 py-1.5 text-xs font-medium text-zinc-900 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/95 dark:text-zinc-200 dark:ring-white/10',
      className
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export const Tooltip = {
  Content: TooltipContent,
  Portal,
  Provider,
  Root,
  Trigger,
} as const;

type ElegantTooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export function ElegantTooltip({ children, content }: ElegantTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip.Provider delayDuration={0.2} disableHoverableContent>
      <Tooltip.Root onOpenChange={setOpen} open={open}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content asChild>
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.96 }}
                >
                  {content}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
