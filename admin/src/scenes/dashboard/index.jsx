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
import { Toaster, toast } from "react-hot-toast";

const APARTMENT_ADDRESS = "Chicago 100 Ashby Lane, IL";

const Dashboard = () => {
  const handleClick = async () => {
    // instantiate the service with 'authToken' from the response
    const trinsic = new TrinsicService({
      authToken: 'TRINSIC_AUTH_TOKEN',
    });

    const issueRequest = {
      templateId:
        "https://schema.trinsic.cloud/laughing-nightingale-zhw8wy9rkej7/tenants-vc-for-homey",
      valuesJson: JSON.stringify({
        name: "Khoi Nguyen",
        email: "thorwaitson@gmail.com",
        apartmentAddress: APARTMENT_ADDRESS,
      }),
    };

    const issueResponse = await trinsic
      .credential()
      .issueFromTemplate(issueRequest);

    toast.success("Successfully issued VC");

    await trinsic.credential().send({
      email: "thorwaitson@gmail.com",
      documentJson: issueResponse.documentJson,
      sendNotification: true,
    });
  };

  return (
    <Box m="20px">
      <Toaster />

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Tenants" subtitle="" />
      </Box>

      <Box display="flex" alignItems="center">
        <Card sx={{ minWidth: 300, padding: "1rem" }}>
          <CardContent sx={{ padding: 0 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom>
              {APARTMENT_ADDRESS}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="h4" component="div">
              Tenant: Khoi Nguyen
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
              <Typography color="text.primary">Issue VC to Khoi</Typography>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
