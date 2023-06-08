import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import { client } from "../../lib/oidcClient";
import { useEffect, useState } from "react";

const Verified = () => {
  const [credentialSubject, setCredentialSubject] = useState("");

  useEffect(() => {
    const handleCallback = () => {
      const url = window.location.toString();

      client
        .processSigninResponse(url)
        .then(function (response) {
          setCredentialSubject(
            JSON.stringify(response.vp_token.credentialSubject)
          );
        })
        .catch(function (err) {
          console.error(err);
        });
    };
    handleCallback();
  }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Apartments" subtitle="Pick an apartment" />
      </Box>
      <Box display="flex" alignItems="center">
        <Card
          sx={{
            width: 350,
            height: 500,
            overflow: "auto",
            padding: "1rem",
            background: "#dcffdc",
          }}>
          <CardContent sx={{ padding: 0 }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom>
              Chicago 100 Ashby Lane, IL
            </Typography>
            <Typography variant="h4" sx={{ mb: 1.5 }} color="text.primary">
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
              size="large">
              <Typography color="text.primary">Verified</Typography>
            </Button>
          </CardActions>

          {credentialSubject && (
            <Box
              sx={{
                p: 1,
                background: "silver",
                overflow: "auto",
                borderRadius: "10px",
              }}>
              <code>{credentialSubject}</code>
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default Verified;
