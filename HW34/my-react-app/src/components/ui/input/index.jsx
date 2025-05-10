import React from "react";

export const Input = React.forwardRef(({ ...rest },ref) => (
    <input
    ref={ref}
      className="px-4 w-full py-2 rounded bg-white text-blue-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:[color-scheme:dark]"
      {...rest}
    />
  ));