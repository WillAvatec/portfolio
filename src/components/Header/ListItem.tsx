import { PropsWithChildren } from "react";

function ListItem({
  href,
  isBubble,
  children,
}: PropsWithChildren<{ href: string; isBubble?: boolean }>) {
  const bubbleStyle = isBubble ? "pb-5" : "";
  const colorBg = isBubble ? "bg-black" : "bg-white";

  return (
    <li className={` font-normal ${bubbleStyle}`}>
      <a
        className={`px-3
        before:${colorBg}
        hover:before:${colorBg}
        relative
        link-item
        `}
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

export default ListItem;
