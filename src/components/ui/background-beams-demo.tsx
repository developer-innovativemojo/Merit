// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const BackgroundBeamsMine = React.memo(
//   ({ className }: { className?: string }) => {
//     return (
//       <div
//         className={cn(
//           "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]",
//           className
//         )}
//       >
//         <motion.div
//           className="absolute inset-0"
//           animate={{ opacity: [0.2, 0.6, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           <svg
//             className="pointer-events-none absolute z-0 h-full w-full"
//             width="100%"
//             height="100%"
//             viewBox="0 0 696 316"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
//               stroke="white"
//               strokeWidth="2"
//               strokeOpacity="0.4"
//             />
//           </svg>
//         </motion.div>
//       </div>
//     );
//   }
// );
