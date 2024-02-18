import Link from "next/link";
import React from "react";
import RightArrowIcon from "./icons/RightArrowIcon";

const AdminPanelLink = ({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <Link
      className="p-1 -m-1"
      href={href}
    >
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex justify-between">
        <div className="flex flex-col space-y-1.5 p-2">
          <h3 className="whitespace-nowrap tracking-tight text-lg font-medium">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs leading-none">
            {subtitle}
          </p>
        </div>
        <div className="p-2">
          <RightArrowIcon />
        </div>
      </div>
    </Link>
  );
};

export default AdminPanelLink;
