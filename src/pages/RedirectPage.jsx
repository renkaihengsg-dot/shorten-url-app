import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Box, Typography } from "@mui/material";

import ShortenService from "#/services/shorten.service";
import { loadingState } from "#/contants/recoilState";

const RedirectPage = () => {
  const setLoading = useSetRecoilState(loadingState);
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkShortCodeFromPath = async () => {
      if (shortCode) {
        try {
          setLoading(true);
          const result = await ShortenService.getUrl(shortCode);

          if (!result?.originalUrl) {
            navigate("/notfound");
          }

          window.location.href = result.originalUrl;
        } catch (err) {
          console.error(err);
          navigate("/notfound");
        } finally {
          setLoading(false);
        }
      }
    };

    checkShortCodeFromPath();
  });
  return (
    <Typography component={Box} variant="body1">
      Redirecting...
    </Typography>
  );
};

export default RedirectPage;
