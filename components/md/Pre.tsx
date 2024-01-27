'use client';

import clsx from 'clsx';
import {
  type ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ClipboardCheckIcon, ClipboardDataIcon } from '~/assets';
import { copyToClipboard } from '~/lib/copyToClipboard';
import { removeDuplicateNewLine } from '~/lib/removeDuplicateNewLine';

type CustomPreProps = ComponentPropsWithoutRef<'pre'>;

function CustomPre({ children, className, ...props }: CustomPreProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      await copyToClipboard(removeDuplicateNewLine(preRef.current.innerText));
      setCopied(true);
    }
  };

  return (
    <div className="group relative">
      <pre
        {...props}
        className={clsx(className, 'focus:outline-none')}
        ref={preRef}
      >
        <div className="absolute right-0 top-0 m-2 flex items-center rounded-md bg-[#282a36] dark:bg-[#262626]">
          <span
            className={clsx('hidden px-2 text-xs text-green-400 ease-in', {
              'group-hover:flex': copied,
            })}
          >
            已複製！
          </span>

          <button
            aria-label="Copy to Clipboard"
            className={clsx(
              'hidden rounded-md border bg-transparent p-2 transition ease-in focus:outline-none group-hover:flex',
              {
                'border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-gray-200/50 dark:border-gray-700 dark:hover:border-gray-400':
                  !copied,
                'border-green-400': copied,
              }
            )}
            disabled={copied}
            onClick={onClick}
            type="button"
          >
            {copied ? (
              <ClipboardCheckIcon className="text-green-400" />
            ) : (
              <ClipboardDataIcon />
            )}
          </button>
        </div>

        {children}
      </pre>
    </div>
  );
}

export default CustomPre;
