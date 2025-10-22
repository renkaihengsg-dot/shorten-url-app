import { useParams } from "react-router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import ShortenService from "#/services/shorten.service";
import { loadingState } from "#/contants/recoilState";

const RedirectPage = () => {
  const setLoading = useSetRecoilState(loadingState);
  const { shortCode } = useParams();
  useEffect(() => {
    const checkShortCodeFromPath = async () => {
      if (shortCode) {
        try {
          setLoading(true);
          const result = await ShortenService.getUrl(shortCode);

          if (result?.originalUrl) {
            window.location.href = result.originalUrl;
          }
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    checkShortCodeFromPath();
  });
  return null;
};

export default RedirectPage;
