import { Container, TextField, InputAdornment, Button } from "@mui/material";
import { useCopy } from "../hooks";

const ShortenResult = ({ originalUrl, shortUrl }) => {
  const { copied, toggleCopy } = useCopy();
  return (
    <Container>
      <TextField
        disabled
        fullWidth
        margin="normal"
        variant="outlined"
        label="Your long URL"
        value={originalUrl}
      />
      <TextField
        disabled
        fullWidth
        margin="normal"
        variant="outlined"
        label="Your shorten URL"
        value={shortUrl}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  size={"large"}
                  onClick={() => toggleCopy(shortUrl)}
                  color={copied ? "success" : "primary"}
                >
                  {copied ? "Copied" : "Copy"}
                </Button>
              </InputAdornment>
            ),
          },
        }}
      />
    </Container>
  );
};

export default ShortenResult;
