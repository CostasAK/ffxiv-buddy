import { useToggle } from "@uidotdev/usehooks";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { MINUTE } from "../constants/time";
import { cn } from "../utils/cn";
import { formatTime } from "../utils/format-time";

function useLocalTime() {
  const [on, toggle] = useToggle();

  useEffect(() => {
    const timer = setTimeout(
      () => {
        toggle();
      },
      MINUTE - (Date.now() % MINUTE),
    );

    return () => clearTimeout(timer);
  }, [on, toggle]);

  return formatTime();
}

function useEorzeanTime() {
  const [on, toggle] = useToggle();

  const eorzeanFactor = 144 / 7;

  useEffect(() => {
    const timer = setTimeout(
      () => {
        toggle();
      },
      (MINUTE - ((Date.now() * eorzeanFactor) % MINUTE)) / eorzeanFactor,
    );

    return () => clearTimeout(timer);
  }, [on, toggle, eorzeanFactor]);

  return formatTime(Date.now() * eorzeanFactor, true);
}

function SubFooter({ className, children }) {
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

SubFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

function LabeledTime({ children, label = "", pad = false }) {
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

LabeledTime.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  pad: PropTypes.bool,
};

export default function Footer() {
  const localTime = useLocalTime();
  const eorzeanTime = useEorzeanTime();

  return (
    <footer className="flex flex-col text-sm">
      <SubFooter className="bg-zinc-600 tabular-nums">
        <LabeledTime label="ET" pad>
          {eorzeanTime}
        </LabeledTime>
        <LabeledTime label="LT" pad>
          {localTime}
        </LabeledTime>
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
