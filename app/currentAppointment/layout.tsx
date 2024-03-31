import React, { PropsWithChildren } from "react";

const CurrentAppointmentLayout = ({ children }: PropsWithChildren) => {
  return <div className="p-5">{children}</div>;
};

export default CurrentAppointmentLayout;
