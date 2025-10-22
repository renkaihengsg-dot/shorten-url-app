import { useState } from "react";

const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const toggleCopy = async (val) => {
    setCopied(true);
    await navigator.clipboard.writeText(val);
    setTimeout(() => setCopied(false), 2000);
  };

  return {
    copied,
    toggleCopy,
  };
};

export default useCopy;
