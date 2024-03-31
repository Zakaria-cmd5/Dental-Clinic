import React, { PropsWithChildren } from "react";

const AppointmentLayout = ({ children }: PropsWithChildren) => {
  return <div className="p-5">{children}</div>;
};

export default AppointmentLayout;
