"use client";
import React, { ReactElement } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import useMounted from "@/hooks/use-mounted";
import { ViewportContext } from "@/context/breakpoints";

type Props = {
  children: React.ReactNode;
};

const ViewPortProvider = ({ children }: Props): ReactElement | null => {
  const isMounted = useMounted();

  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const xl = useMediaQuery("(min-width: 1280px)");
  const xxl = useMediaQuery("(min-width: 1536px)");

  if (!isMounted) return null;

  return (
    <ViewportContext.Provider value={{ sm, md, lg, xl, xxl }}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewPortProvider;
