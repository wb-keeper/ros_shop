"use client";
import {
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

export interface IWrappedComponentProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export function withClickOutside(
  WrappedComponent: ForwardRefExoticComponent<
    IWrappedComponentProps & RefAttributes<HTMLDivElement>
  >,
) {
  const Component = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!ref.current.contains(e.target as HTMLDivElement)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />;
  };

  return Component;
}
