import React, { ReactNode } from "react";
import "./ResponsiveGrid.css";

interface ResponsiveGridItemProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  order?: number;
  hidden?: boolean;
  auto?: boolean;
  children: ReactNode;
}

const ResponsiveGridItem: React.FC<ResponsiveGridItemProps> = ({
  xs = 12,
  sm,
  md,
  lg,
  xl,
  order,
  hidden,
  auto,
  children,
}) => {
  return (
    <div
      className={`
        col-span-xs-${auto ? "auto" : xs}
        ${sm ? `col-span-sm-${sm}` : ""}
        ${md ? `col-span-md-${md}` : ""}
        ${lg ? `col-span-lg-${lg}` : ""}
        ${xl ? `col-span-xl-${xl}` : ""}
        ${hidden ? "hidden-xs" : ""}
        ${order ? `order-${order}` : ""}
      `}
    >
      {children}
    </div>
  );
};

export default ResponsiveGridItem;
