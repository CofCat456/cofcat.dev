'use clint';

import {
  type UseFloatingOptions,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  type FC,
  type PropsWithChildren,
  cloneElement,
  createContext,
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { RootPortal } from '~/components/ui/portal';
import { clsxm } from '~/lib/helper';

type FloatPopoverProps<T> = PropsWithChildren<{
  TriggerComponent: FC<T>;
  as?: keyof JSX.IntrinsicElements;
  offset?: number;
  padding?: number;
  popoverClassNames?: string;
  popoverWrapperClassNames?: string;
  to?: HTMLElement;
  trigger?: 'both' | 'click' | 'hover';
  triggerComponentProps?: T;
  type?: 'popover' | 'tooltip';
  wrapperClassName?: string;
}> &
  UseFloatingOptions;

const PopoverActionContext = createContext<{
  close: () => void;
}>(null!);

const FloatPopover = <T extends object>({
  TriggerComponent,
  as: Component = 'div',
  children,
  offset: offsetValue,
  padding,
  popoverClassNames,
  popoverWrapperClassNames,
  trigger = 'hover',
  triggerComponentProps,
  type = 'popover',
  wrapperClassName: wrapperClassNames,
  ...floatingProps
}: FloatPopoverProps<T>) => {
  const [open, setOpen] = useState(false);

  const { isPositioned, refs, strategy, x, y } = useFloating({
    middleware: floatingProps.middleware ?? [
      flip({ padding: padding ?? 20 }),
      offset(offsetValue ?? 10),
      shift(),
    ],
    placement: floatingProps.placement ?? 'bottom-start',
    strategy: floatingProps.strategy,
    whileElementsMounted: floatingProps.whileElementsMounted,
  });

  const handlePopoverDisappear = useCallback(() => {
    setOpen(false);
  }, []);

  const handlePopoverShow = useCallback(() => {
    setOpen(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    handlePopoverDisappear();
  }, [handlePopoverDisappear]);

  const listener = useMemo(() => {
    switch (trigger) {
      case 'click':
        return {
          onClick: handlePopoverShow,
        };
      case 'hover':
        return {
          onMouseOut: handlePopoverDisappear,
          onMouseOver: handlePopoverShow,
        };
      case 'both':
        return {
          onClick: handlePopoverShow,
          onMouseOut: handleMouseOut,
          onMouseOver: handlePopoverShow,
        };
    }
  }, [handleMouseOut, handlePopoverDisappear, handlePopoverShow, trigger]);

  const TriggerWrapper = createElement(
    Component,
    {
      className: clsxm('inline-block', wrapperClassNames),
      ref: refs.setReference,
      role: trigger === 'both' || trigger === 'click' ? 'button' : 'note',
      ...listener,
    },
    cloneElement(createElement(TriggerComponent, triggerComponentProps))
  );

  const actionCtxValue = useMemo(() => {
    return { close: handlePopoverDisappear };
  }, [handlePopoverDisappear]);

  useEffect(() => {
    if (refs.floating.current && open && type === 'popover') {
      refs.floating.current.focus();
    }
  }, [open, refs.floating, type]);

  if (!children) {
    return TriggerWrapper;
  }

  return (
    <>
      {TriggerWrapper}

      <AnimatePresence>
        {open && children && (
          <RootPortal>
            <motion.div
              className={clsxm(
                'float-popover',
                'relative z-[99]',
                popoverWrapperClassNames
              )}
              {...(trigger === 'hover' || trigger === 'both' ? listener : {})}
            >
              <motion.div
                animate={{ opacity: 1, translateY: '0px' }}
                className={clsxm(
                  'relative z-[2]',

                  type === 'tooltip'
                    ? `max-w-[25rem] break-all rounded-xl px-4 py-2`
                    : '',
                  popoverClassNames
                )}
                exit={{ opacity: 0, translateY: '10px' }}
                initial={{ opacity: 0, translateY: '10px' }}
                ref={refs.setFloating}
                role={type === 'tooltip' ? 'tooltip' : 'dialog'}
                style={{
                  left: x ?? '',
                  position: strategy,
                  top: y ?? '',
                  visibility: isPositioned && x !== null ? 'visible' : 'hidden',
                }}
                tabIndex={-1}
                transition={{ damping: 20, stiffness: 300, type: 'spring' }}
              >
                <PopoverActionContext.Provider value={actionCtxValue}>
                  {children}
                </PopoverActionContext.Provider>
              </motion.div>
            </motion.div>
          </RootPortal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatPopover;
