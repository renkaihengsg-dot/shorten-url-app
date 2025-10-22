import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  styled,
  Box,
  InputAdornment,
} from "@mui/material";
import { shortenSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "columm",
  alignItems: "center",
  gap: 2,
  mt: 2,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "center",
  },
  "& button": {
    height: "100%",
    my: 0,
  },
}));

const ShortenForm = ({ onShortenUrl }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      url: "",
    },
    resolver: yupResolver(shortenSchema),
  });

  const onSubmit = async (data) => {
    await onShortenUrl(data.url);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledBox>
          <Controller
            name="url"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                error={errors.url ? true : false}
                helperText={errors.url?.message}
                fullWidth
                margin="normal"
                variant="outlined"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                label="Enter your link here"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          type="submit"
                          variant="contained"
                          size={"large"}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
        </StyledBox>
      </form>
    </Container>
  );
};

export default ShortenForm;
