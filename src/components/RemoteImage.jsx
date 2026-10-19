import { useState } from "react";

// Online image that quietly disappears (or uses a fallback) if it fails to load.
export default function RemoteImage({ src, fallback, alt, ...rest }) {
  const [current, setCurrent] = useState(src);
  if (!current) return null;
  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      onError={() => setCurrent(current !== fallback ? fallback : "")}
      {...rest}
    />
  );
}
