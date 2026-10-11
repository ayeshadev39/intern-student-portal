import { Typography, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Home as HomeIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "6rem", md: "10rem" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            404
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 2 }}>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
            The page you're looking for doesn't exist.
          </Typography>
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            variant="contained"
            size="large"
            sx={{
              borderRadius: 3,
              px: 4,
              py: 1.5,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              "&:hover": { transform: "translateY(-3px)" },
              transition: "all 0.3s",
            }}
          >
            Go Home
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}

export default NotFound;