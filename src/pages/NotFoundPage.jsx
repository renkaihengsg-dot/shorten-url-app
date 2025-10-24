import { Container, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      // navigate("/");
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <Container>
      <Typography variant="h2">404 Not Found :(</Typography>
      <Typography variant="body">
        Redirect to home in {countdown} seconds...
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
