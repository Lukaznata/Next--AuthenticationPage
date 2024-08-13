import useAuth from "@/src/data/hook/useAuth";
import Link from "next/link";

interface UserAvatarProps {
  className?: string;
}

export default function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth();

  return (
    <Link href="/userProfile">
      <img
        src={user?.urlImage ?? "/images/avatar.svg"}
        alt="Avatar do Usúario"
        className={`
          rounded-full cursor-pointer
          h-12 w-12
          md:h-20 md:w-20
          lg:h-28 lg:w-28
          ${props.className}
          `}
      />
    </Link>
  );
}
