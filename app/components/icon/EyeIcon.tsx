import Image from "next/image";
import { useState } from "react";

type EyeIconProps = {
  onClick: () => void;
  eyeState: boolean;
};

export default function EyeIcon({ onClick, eyeState }: EyeIconProps) {
  return (
    <div>
      {eyeState && (
        <div>
          <Image
            src={"/icons/web-icons/eyes.svg"}
            alt="eye"
            width={19}
            height={19}
            onClick={onClick}
          />
        </div>
      )}
      {!eyeState && (
        <div>
          <Image
            src={"/icons/web-icons/eyes_closed.svg"}
            alt="eye"
            width={19}
            height={19}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
}
