import { Outlet } from "react-router";
import { Container, Paper, styled, useMediaQuery, useTheme } from "@mui/material";

const StyledContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: theme.spacing(6),
  padding: theme.spacing(0.5, 0.5),
  maxWidth: "90%",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2.5, 2.5),
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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <StyledContainer component={isMobile ? "div" : Paper}>
      <Outlet />
    </StyledContainer>
  );
};

export default MainLayout;
