import { useEffect } from "react";

const useClickOutside = (ref, callback, loading = false) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target) && !loading) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, loading]);
};

export default useClickOutside;
