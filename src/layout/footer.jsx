import PropTypes from "prop-types";
import { cn } from "../utils/cn";

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

export default function Footer() {
  return (
    <footer className="flex flex-col text-sm">
      <SubFooter className="bg-zinc-600">
        <div>Made by CostasAK</div>
        <div>Support me</div>
        <div>Source</div>
      </SubFooter>
      <SubFooter className="bg-zinc-700 text-neutral-400">
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
