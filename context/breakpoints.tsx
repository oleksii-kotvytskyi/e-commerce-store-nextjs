"use client";

import React from "react";

type ViewportContextProviderType = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
};

export const ViewportContext = React.createContext<ViewportContextProviderType>(
  {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  }
);
