import Link from "next/link";

interface ItemMenuProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function ItemMenu(props: ItemMenuProps) {
  const toRenderLink = () => {
    return (
      <a
        className={`
          flex flex-col justify-center items-center 
          h-20 w-20
          text-gray-600
          dark:text-gray-200 
          ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-light  `}>{props.text}</span>
      </a>
    );
  };

  return (
    <>
      <li
        className={`
          hover:bg-gray-100 dark:hover:bg-gray-800
          cursor-pointer 
          transition duration-300 ease-in-out `}
        onClick={props.onClick}
      >
        {props.url ? (
          <Link href={props.url} legacyBehavior>
            {toRenderLink()}
          </Link>
        ) : (
          toRenderLink()
        )}
      </li>
    </>
  );
}
