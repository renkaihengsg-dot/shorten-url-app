import { Backdrop, CircularProgress } from "@mui/material";
import { loadingState } from "../contants/recoilState";
import { useRecoilValue } from "recoil";

const LoadingBackdrop = () => {
  const isLoading = useRecoilValue(loadingState);
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingBackdrop;
