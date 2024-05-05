import { Box, Container, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetJsonPlaceHolderPostQuery } from "../../features/testing/testApi";
import { getPosts, setPosts } from "../../features/testing/testSlice";

const Home = () => {
    const { data, isLoading } = useGetJsonPlaceHolderPostQuery();
    const posts = useSelector(getPosts);
    console.log("🚀 ~ Home ~ posts:", posts);
    const dispatch = useDispatch();
    console.log(import.meta.env.BASE_URL, "import.meta.env.BASE_URL");

    useEffect(() => {
        if (!isLoading && data) {
            dispatch(setPosts(data));
        }
    }, [data]);

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
                        Welcome to Home Page
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default Home;
