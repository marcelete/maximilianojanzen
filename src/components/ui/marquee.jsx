import React from 'react';

export function Marquee({
  className = '',
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  const marqueeRef = React.useRef(null);

  return (
    <div
      {...props}
      ref={marqueeRef}
      className={`
        group flex overflow-hidden p-2
        ${vertical ? 'flex-col' : 'flex-row'}
        gap-4
        ${className}
      `}
    >
      {React.useMemo(
        () => (
          <>
            {Array.from({ length: repeat }, (_, i) => (
              <div
                key={i}
                className={`
                  flex shrink-0 justify-around gap-4
                  ${vertical ? 'flex-col animate-marquee-vertical' : 'flex-row animate-marquee'}
                  ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}
                  ${reverse ? '[animation-direction:reverse]' : ''}
                `}
              >
                {children}
              </div>
            ))}
          </>
        ),
        [repeat, children, vertical, pauseOnHover, reverse],
      )}
    </div>
  );
}
