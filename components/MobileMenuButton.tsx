import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

interface MobileMenuButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button className="absolute right-2 top-2 p-2" onClick={onClick}>
      <FontAwesomeIcon icon={faBars as IconDefinition} className="text-4xl" />
    </button>
  );
}
