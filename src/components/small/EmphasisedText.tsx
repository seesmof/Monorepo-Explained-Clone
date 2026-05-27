import React from "react";

const EmphasisedText = ({ children }: { children: React.ReactNode }) => {
  return <em className="not-italic bg-yellow-500 rounded p-1">{children}</em>;
};

export default EmphasisedText;
