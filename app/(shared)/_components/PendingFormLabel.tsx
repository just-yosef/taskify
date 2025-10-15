import React from "react";
import Loader from "./Loader";

const PendingFormLabel = ({
  action = "post",
  isSubmitting,
}: {
  action: string;
  isSubmitting: boolean;
}) => {
  return (
    <div className="flex items-center gap-1">
      {isSubmitting ? (
        <>
          {action + "ing..."}
          <Loader isChild={false} />
        </>
      ) : (
        <h4 className="capitalize"> {action} </h4>
      )}
    </div>
  );
};

export default PendingFormLabel;
