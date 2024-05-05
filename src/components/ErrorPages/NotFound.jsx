import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box>
        <Typography variant="h1" color="#1976d2">
            404
        </Typography>
        <Typography variant="h6" color="white">
            The page you’re looking for doesn’t exist.
        </Typography>
        <Link to="/home">
            <Button
            variant="contained"
            sx={{
                backgroundColor: "#1976d2",
                marginTop: "10px",
                "&:hover": { backgroundColor: "#1976d2" },
            }}
            >
            Back Home
            </Button>
        </Link>
    </Box>
  )
}

export default NotFound;