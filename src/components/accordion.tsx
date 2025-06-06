// import React, { useState, useRef, useEffect } from "react";
// import { ChevronDownIcon } from "lucide-react";

// type AccordionProps = {
//   children: React.ReactNode;
//   className?: string;
//   bgColor?: string;
//   borderColor?: string;
//   textColor?: string;
// };

// const Accordion: React.FC<AccordionProps> = ({
//   children,
//   className = "",
//   bgColor = "white",
//   borderColor = "gray-300",
//   textColor = "black",
// }) => {
//   return (
//     <div
//       //   className={`border rounded-md ${className}`}
//       className={` ${className}`}
//       style={{ backgroundColor: bgColor, borderColor, color: textColor }}
//     >
//       {children}
//     </div>
//   );
// };

// type AccordionItemProps = {
//   title: string;
//   children: React.ReactNode;
//   className?: string;
//   bgColor?: string;
//   borderColor?: string;
//   textColor?: string;
// };

// const AccordionItem: React.FC<AccordionItemProps> = ({
//   title,
//   children,
//   className = "",
//   bgColor = "white",
//   borderColor = "border-gray-500",
//   textColor = "black",
// }) => {
//   const [open, setOpen] = useState(false);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState("0px");

//   useEffect(() => {
//     if (contentRef.current) {
//       setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
//     }
//   }, [open]);

//   return (
//     <div
//       className={`border-b ${borderColor} ${className}`}
//       //   style={{ borderColor }}
//     >
//       <button
//         className="flex justify-between w-full p-4 text-left text-sm font-medium rounded-md hover:opacity-50 transition-all"
//         style={{ backgroundColor: bgColor, color: textColor }}
//         onClick={() => setOpen(!open)}
//       >
//         {title}
//         <ChevronDownIcon
//           className={`size-4 transition-transform duration-200 ${
//             open ? "rotate-180" : ""
//           }`}
//           style={{ color: textColor }}
//         />
//       </button>

//       <div
//         ref={contentRef}
//         style={{
//           height: height,
//           transition: "height 0.2s ease-in-out",
//           overflow: "hidden",
//           backgroundColor: bgColor,
//           color: textColor,
//         }}
//       >
//         <div className="p-4 text-sm bg-transparent rounded-sm">{children}</div>
//       </div>
//     </div>
//   );
// };

// export { Accordion, AccordionItem };

import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "lucide-react";

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  children,
  className = "",
  bgColor = "bg-white",
  textColor = "text-black",
}) => {
  return (
    <div
      className={`rounded-md shadow-md  ${bgColor} ${textColor} ${className}`}
    >
      {children}
    </div>
  );
};

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  className = "",
  bgColor = "bg-white",
  borderColor = "border-gray-500",
  textColor = "text-black",
}) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <div className={`border-b ${borderColor} ${className}`}>
      <button
        className={`flex justify-between w-full p-4 text-left text-sm font-medium rounded-md hover:opacity-70 transition-all hover:cursor-pointer ${bgColor} ${textColor}`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDownIcon
          className={`size-4 transition-transform duration-200 ease-in-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-[height] duration-200 ease-in-out ${bgColor} ${textColor}`}
        style={{ height }}
      >
        <div className={`p-4 text-sm ${bgColor} ${textColor}`}>{children}</div>
      </div>
    </div>
  );
};

export { Accordion, AccordionItem };
