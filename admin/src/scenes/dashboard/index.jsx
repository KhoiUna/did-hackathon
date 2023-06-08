import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { TrinsicService } from "@trinsic/trinsic";
const TRINSIC_AUTH_TOKEN =
  "CiVodHRwczovL3RyaW5zaWMuaWQvc2VjdXJpdHkvdjEvb2Jlcm9uEmcKK3Vybjp0cmluc2ljOndhbGxldHM6elJvQVB6WmRib2FmRnNTYk5YZ05uRlIiOHVybjp0cmluc2ljOmVjb3N5c3RlbXM6bGF1Z2hpbmctbmlnaHRpbmdhbGUtemh3OHd5OXJrZWo3GjCtSnVb8B_zqSRFT6LQsgmA41UsIVBRwNVYo3l6GpqL6E8Ya-_toA-WKuYSHwI-q9oiAA";

const Dashboard = () => {
  const handleClick = async () => {
    // instantiate the service with 'authToken' from the response
    const trinsic = new TrinsicService({
      authToken: TRINSIC_AUTH_TOKEN,
    });
    const infoResponse = await trinsic.wallet().getMyInfo({});

    console.log(infoResponse);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Apartments" subtitle="Pick an apartment" />
      </Box>

      <Box display="flex" alignItems="center">
        <Card sx={{ minWidth: 300, padding: "1rem" }}>
          <CardContent sx={{ padding: 0 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom>
              Chicago 100 Ashby Lane, IL
            </Typography>
            <Typography variant="h5" component="div">
              March 7-10, 2023
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Total: $1000
            </Typography>

            <img
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
              width={300}
              height={300}
              alt="house"
              src="https://images1.apartments.com/i2/NYhDHrCuXF1xRUhVXFAlb3nycHGPz5NpFcnEASHWk3c/117/image.jpg"
            />
          </CardContent>

          <CardActions sx={{ padding: 0 }}>
            <Button
              sx={{
                marginTop: "0.5rem",
                padding: "8px",
                fontWeight: "bold",
              }}
              size="large"
              onClick={handleClick}>
              <Typography color="text.primary">Verify tenant</Typography>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
