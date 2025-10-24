import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Typography, Grid, Box, Alert, AlertTitle } from "@mui/material";

import { ShortenForm, ShortenResult } from "#/components";
import ShortenService from "#/services/shorten.service";
import { loadingState } from "#/contants/recoilState";

const ShortenPage = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const setLoading = useSetRecoilState(loadingState);

  const reset = () => {
    setOriginalUrl("");
    setShortUrl("");
  };

  const handleShortenUrl = async (url) => {
    setLoading(true);
    reset();
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
      console.log("error: ", err);
      alert("Fail to shorten your long link");
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

  return (
    <Grid container direction="column" spacing={8}>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "var(--font-xlarge)",
                sm: "var(--font-xxlarge)",
              },
              marginBottom: 2,
            }}
          >
            Shorten your Long Links{" "}
          </Typography>
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
  );
};

export default ShortenPage;
