import { useEffect, useState } from "react";
import { Avatar, Typography, Paper, Container, Grid, Box } from "@mui/material";
import { Email, Person } from "@mui/icons-material";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md" className="mt-8">
      <Paper elevation={3} className="p-8">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} className="flex justify-center">
            <Avatar src={user.picture} alt={user.name} className="w-32 h-32" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" className="mb-4 text-gray-800 font-bold">
              {user.name}
            </Typography>
            <Box className="space-y-2">
              <Typography
                variant="body1"
                className="flex items-center text-gray-600"
              >
                <Person className="mr-2" />
                {user.given_name} {user.family_name}
              </Typography>
              <Typography
                variant="body1"
                className="flex items-center text-gray-600"
              >
                <Email className="mr-2" />
                {user.email}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Profile;
