import { Outlet } from "react-router";
import { Container, Paper, styled } from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: theme.spacing(6),
  padding: theme.spacing(2.5, 2.5),
  maxWidth: "90%",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "60%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "35%",
  },
  // "& h1": {
  //   marginBottom: theme.spacing(2),
  //   fontSize: "var(--font-xlarge)",
  // },
  // [theme.breakpoints.up("sm")]: {
  //   "& h1": {
  //     fontSize: "var(--font-xxlarge)",
  //   },
  // },
}));

const MainLayout = () => {
  return (
    <StyledContainer component={Paper}>
      <Outlet />
    </StyledContainer>
  );
};

export default MainLayout;
