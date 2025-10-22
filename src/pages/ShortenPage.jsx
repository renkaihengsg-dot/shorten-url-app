import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Container, styled, Box, Typography, Grid, Paper } from "@mui/material";

import { ShortenForm, ShortenResult } from "#/components";
import ShortenService from "#/services/shorten.service";
import { loadingState } from "#/contants/recoilState";
import appConfig from "#/configs/app.config";

const StyledContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: theme.spacing(6),
  padding: theme.spacing(6),
  "& h1": {
    marginBottom: theme.spacing(2),
    fontSize: "var(--font-xlarge)",
  },
  [theme.breakpoints.up("sm")]: {
    "& h1": {
      fontSize: "var(--font-xxlarge)",
    },
  },
}));

const ShortenPage = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const setLoading = useSetRecoilState(loadingState);

  const handleShortenUrl = async (url) => {
    setLoading(true);
    try {
      if (typeof url !== "string") {
        throw new Error("Invalid URL.");
      }

      const result = await ShortenService.shortenLink(url);
      if (result) {
        const { shortCode } = result;
        const shortUrl = `${window.location.origin}/${shortCode}`;
        setOriginalUrl(url);
        setShortUrl(shortUrl);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyShortUrl = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
    } catch (err) {
      console.error("failed to copy", err);
    }
  };

  console.log("appconfig: ", appConfig.apiBaseUrl);

  return (
    <StyledContainer component={Paper} maxWidth="sm">
      <Grid container direction="column" spacing={8}>
        <Grid size={{ xs: 12 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h1">Shorten your Long Links </Typography>
            <ShortenForm onShortenUrl={handleShortenUrl} />
          </Box>
        </Grid>
        {shortUrl ? (
          <Grid size={{ xs: 12 }}>
            <ShortenResult
              originalUrl={originalUrl}
              shortUrl={shortUrl}
              onCopyShortUrl={handleCopyShortUrl}
            />
          </Grid>
        ) : null}
      </Grid>
    </StyledContainer>
  );
};

export default ShortenPage;
