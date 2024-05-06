import { Box, Container, Paper, Typography } from "@mui/material";

const Contact = () => {
    return (
        <Container>
            <Paper
                sx={{
                    height: "300px",
                    width: "100%",
                    marginTop: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid #1976d2"
                }}
                elevation="8"
            >
                <Box sx={{ height: "50px" }}>
                    <Typography
                        variant="h4"
                        color="#1976d2"
                        sx={{ textTransform: "uppercase", textAlign: "center", fontWeight: "bold" }}
                    >
                        Welcome to Contact Page
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default Contact;
