import Link from "next/link";
import type { SVGProps } from "react";

export const Header = () => {
  return (
    <div className="fixed right-0 left-0 w-full top-0 bg-white dark:bg-zinc-950">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2 shrink-0 ">
          <span className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-2 home-links">
            <Link
              className="text-zinc-800 dark:text-zinc-100 -translate-y-[.5px]"
              rel="noopener"
              target="_blank"
              href="https://worldslargesthackathon.devpost.com/"
            >
              <svg
                width="48px"
                height="48px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 51 21.9"
              >
                <path d="M24.1 19.3c-4.7 0-7-2.7-7-6.1s3.2-7.7 7.9-7.7 7 2.7 7 6.1-3.2 7.7-7.9 7.7Zm.2-4.3c1.6 0 2.7-1.5 2.7-3.1s-.8-2-2.2-2-2.7 1.5-2.7 3.1.8 2 2.2 2ZM37 19h-4.9l4-18.2H41l-4 18.1Z" />
                <path
                  d="M9.6 19.3c-1.5 0-3-.5-3.8-1.7L5.5 19 0 21.9.6 19 4.6.8h4.9L8.1 7.2c1.1-1.2 2.2-1.7 3.6-1.7 3 0 4.9 1.9 4.9 5.5s-2.3 8.3-7 8.3Zm1.9-7.3c0 1.7-1.2 3-2.8 3s-1.7-.3-2.2-.9l.8-3.3c.6-.6 1.2-.9 2-.9 1.2 0 2.2.9 2.2 2.2Z"
                  style={{ fillRule: "evenodd" }}
                />
                <path d="M46.1 19.3c-2.8 0-4.9-1-4.9-3.3s0-.7.1-1l1.1-4.9h-2.2l1-4.2h2.2l.8-3.6L49.7 0l-.6 2.3-.8 3.6H51l-1 4.2h-2.7l-.7 3.2v.6c0 .6.4 1.1 1.2 1.1s.6 0 .7-.1v3.9c-.5.4-1.4.5-2.3.5Z" />
              </svg>
            </Link>
            <div className="jsx-e3e12cc6f9ad5a71 w-4 text-lg text-center text-zinc-300 dark:text-zinc-600">
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-4">
              <Link
                className="flex flex-row items-center gap-2"
                href="https://worldslargesthackathon.devpost.com/rules"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-2">
                  <div className="jsx-e3e12cc6f9ad5a71 text-zinc-800 dark:text-zinc-100">
                    <svg
                      data-testid="geist-icon"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width={16}
                      style={{ color: "currentcolor" }}
                    >
                      <path
                        d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="jsx-e3e12cc6f9ad5a71 text-lg font-bold text-zinc-800 dark:text-zinc-100">
                    HACKATHON{" "}
                    <span className="jsx-e3e12cc6f9ad5a71 hidden min-[385px]:inline">
                      RULES
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </span>
        </div>
        <div className="flex flex-row items-center shrink-0 mr-4 gap-2">
          <TimeCountdownButton />
          <StarButton />
        </div>
      </div>
    </div>
  );
};

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

const TimeCountdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-calendar-clock-icon lucide-calendar-clock"
  >
    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h5" />
    <path d="M17.5 17.5 16 16.3V14" />
    <circle cx="16" cy="16" r="6" />
  </svg>
);

export function StarButton() {
  return (
    <Link
      href="https://github.com/ekaone/bolt-rules"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-300"
    >
      <Github className="size-4" />
      <span className="hidden sm:inline">GitHub</span>
    </Link>
  );
}

const TimeCountdownButton = () => (
  <Link
    href="https://bolt-hackathon-countdown.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-300"
  >
    <TimeCountdown className="size-4" />
    <span className="hidden sm:inline">Global Countdown</span>
  </Link>
);
