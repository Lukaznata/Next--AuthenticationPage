import {
  HomeIcon,
  SettingsIcon,
  BellIcon,
  LogoutIcon,
} from "@/src/components/icons/index";

import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

import useAuth from "@/src/data/hook/useAuth";

export default function SideMenu() {
  const { toLogout } = useAuth();

  return (
    <aside
      className={`
        flex flex-col
        bg-gray-200 
        dark:bg-gray-900 
      `}
    >
      <div
        className={` 
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemMenu url="/" text="Início" icon={HomeIcon} />
        <ItemMenu url="/settings" text="Ajustes" icon={SettingsIcon} />
        <ItemMenu url="/notifications" text="Novidades" icon={BellIcon} />
      </ul>

      <ul className="flex">
        <ItemMenu
          text="Sair"
          icon={LogoutIcon}
          onClick={toLogout}
          className={`
            text-red-600 dark:text-red-400
            hover:text-white dark:hover:text-white
            hover:bg-red-400
              transition duration-300 ease-in-out `}
        />
      </ul>
    </aside>
  );
}
