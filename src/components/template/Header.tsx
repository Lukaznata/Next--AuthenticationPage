import SwitchThemeButton from "./buttons/SwitchThemeButton";
import Title from "./Title";

import useAppData from "@/src/data/hook/useAppData";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, switchTheme } = useAppData();

  return (
    <div className={`flex items-start`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center gap-2 `}>
        <SwitchThemeButton theme={theme} switchTheme={switchTheme} />
        <UserAvatar
          className={`
        border-transparent border-2 hover:border-blue-500 
        transition-colors duration-300 `}
        />
      </div>
    </div>
  );
}
