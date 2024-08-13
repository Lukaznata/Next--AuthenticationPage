import { SunIcon, MoonIcon } from "../../icons";

interface SwitchThemeButtonProps {
  theme?: string;
  switchTheme?: () => void;
}

export default function SwitchThemeButton(props: SwitchThemeButtonProps) {
  return props.theme === "" ? (
    <div
      onClick={props.switchTheme}
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-orange-600
        w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`
            flex items-center justify-center
            bg-white text-orange-600
            w-6 h-6 rounded-full
            `}
      >
        {SunIcon(18)}
      </div>

      <div
        className={`
            hidden lg:flex items-center ml-2
            text-white
            font-semibold
            `}
      >
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.switchTheme}
      className={`
        hidden sm:flex items-center justify-end
        cursor-pointer
        bg-gradient-to-r from-gray-500 to-gray-900
        w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`
            hidden lg:flex items-center mr-2
            text-gray-300
            font-semibold
            `}
      >
        <span className="text-sm">Escuro</span>
      </div>

      <div
        className={`
            flex items-center justify-center
            bg-black text-yellow-300
            w-6 h-6 rounded-full
            `}
      >
        {MoonIcon(18)}
      </div>
    </div>
  );
}
