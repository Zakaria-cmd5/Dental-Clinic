import { Box, Heading, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PatientDetailPageLoading = () => {
  return (
    <Box>
      <Skeleton width="5rem" />
      <Skeleton width="5rem" />
      <Skeleton width="5rem" />
      <Skeleton width="5rem" />
      <Skeleton width="5rem" />
      <Skeleton width="5rem" />
    </Box>
  );
};

export default PatientDetailPageLoading;
