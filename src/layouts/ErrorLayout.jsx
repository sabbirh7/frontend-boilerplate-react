import { Box } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ErrorLayout = ({ component, pageTitle }) => {
    return (
        <HelmetProvider>
            {pageTitle && (
                <Helmet defer={false}>
                    <title>My App || {pageTitle}</title>
                </Helmet>
            )}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    textAlign: "center",
                    backgroundColor: "black"
                }}
            >
                {component}
            </Box>
        </HelmetProvider>
    );
};

export default ErrorLayout;
