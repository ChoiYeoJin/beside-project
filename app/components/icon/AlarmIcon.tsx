import { useUserStore } from "@/store/UserStore";
import Image from "next/image";
import Link from "next/link";

type AlarmIconType = "left" | "right";

type AlarmIconProps = {
  alarmIconType: AlarmIconType;
};

export default function AlarmIcon({ alarmIconType }: AlarmIconProps) {
  const showAlarm = useUserStore((state) => state.showAlarm);

  return (
    <div>
      <Link href="/alarm">
        {alarmIconType === "left" && (
          <div className="absolute right-[64px] top-[18px]">
            <Image src={"/icons/bell.svg"} alt="alarm" width={24} height={24} />
            {showAlarm && (
              <div className="w-1 h-1 bg-[#FF5C5C] rounded-full absolute right-0 top-0"></div>
            )}
          </div>
        )}

        {alarmIconType === "right" && (
          <div className="absolute right-[24px] top-[18px]">
            <Image src={"/icons/bell.svg"} alt="alarm" width={24} height={24} />
            {showAlarm && (
              <div className="w-1 h-1 bg-[#FF5C5C] rounded-full absolute right-0 top-0"></div>
            )}
          </div>
        )}
      </Link>
    </div>
  );
}
