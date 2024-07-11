import { ReactNode } from "react";
import { MINUTE } from "../constants/time";
import { useSyncedInterval } from "../hooks/use-synced-interval";
import { cn } from "../utils/cn";
import { formatTime } from "../utils/format-time";

type SubFooterProps = {
  className: string | string[];
  children: ReactNode;
};

function SubFooter({ className, children }: SubFooterProps) {
  return (
    <div
      className={cn(
        [
          "flex",
          "flex-row",
          "flex-wrap",
          "justify-center",
          "text-center",
          "gap-y-1",
          "gap-x-8",
          "p-2",
        ],
        className,
      )}
    >
      {children}
    </div>
  );
}

type LabeledTimeProps = {
  children: ReactNode;
  label: string;
  pad: boolean;
};

function LabeledTime({ children, label = "", pad = false }: LabeledTimeProps) {
  const time = String(children);

  if (!/^\d{1,2}:\d{2}$/.test(time)) return null;

  return (
    <div className="tabular-nums">
      {label && (
        <>
          <b>{label}</b>{" "}
        </>
      )}
      {pad && time.length < 5 && "0"}
      {children}
    </div>
  );
}

const EorzeanTime = () => {
  const eorzeanTimeFactor = 144 / 7;

  const eorzeanTime = formatTime(
    useSyncedInterval(MINUTE / eorzeanTimeFactor) * eorzeanTimeFactor,
    true,
  );

  return (
    <LabeledTime label="ET" pad>
      {eorzeanTime}
    </LabeledTime>
  );
};

const LocalTime = () => {
  const localTime = formatTime(useSyncedInterval(MINUTE));

  return (
    <LabeledTime label="LT" pad>
      {localTime}
    </LabeledTime>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col text-sm">
      <SubFooter className="bg-zinc-600 tabular-nums">
        <EorzeanTime />
        <LocalTime />
      </SubFooter>
      <SubFooter className="bg-zinc-700">
        <div>Made by CostasAK</div>
        <div>Support me</div>
        <div>Discord</div>
        <div>Source</div>
      </SubFooter>
      <SubFooter className="bg-zinc-800 text-neutral-400">
        <div>© SQUARE ENIX CO., LTD. All Rights Reserved.</div>
        <div>
          FINAL FANTASY is a registered trademark of Square Enix Holdings Co.,
          Ltd.
        </div>
        <div>All material used under license.</div>
      </SubFooter>
    </footer>
  );
}
