'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import { parseDate, relativeTimeFromNow } from '~/lib/dateTime';

export const RelativeTime: React.FC<{
  date: Date | number | string;
  displayAbsoluteTimeAfterDay?: number;
}> = (props) => {
  const [relative, setRelative] = useState<string>(
    relativeTimeFromNow(props.date)
  );

  const { displayAbsoluteTimeAfterDay = 29 } = props;

  useEffect(() => {
    setRelative(relativeTimeFromNow(props.date));
    const timer = setInterval(() => {
      setRelative(relativeTimeFromNow(props.date));
    }, 1000);

    if (
      Math.abs(dayjs(props.date).diff(new Date(), 'd')) >
      displayAbsoluteTimeAfterDay
    ) {
      clearInterval(timer);
      setRelative(parseDate(props.date, 'YYYY 年 M 月 D 日'));
    }
    return () => {
      clearInterval(timer);
    };
  }, [props.date, displayAbsoluteTimeAfterDay]);

  return <>{relative}</>;
};
