import { useParams, Link } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Paper,
  Avatar,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { ArrowBack, Email, School, Cake } from "@mui/icons-material";
import { motion } from "framer-motion";

function StudentDetail({ students }) {
  const { id } = useParams();
  const student = students.find((s) => s.id === Number(id));

  if (!student)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4">Student not found</Typography>
        <Button component={Link} to="/students" sx={{ mt: 2 }}>
          Go Back
        </Button>
      </Container>
    );

  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mb: 3,
              fontSize: 40,
              fontWeight: 700,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
            }}
          >
            {initials}
          </Avatar>

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            {student.name}
          </Typography>

          <Chip
            icon={<School />}
            label={student.course}
            sx={{
              mb: 3,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              fontWeight: 600,
            }}
          />

          <Divider sx={{ my: 3 }} />

          <Box sx={{ textAlign: "left" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Email color="primary" />
              <Typography>{student.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <School color="primary" />
              <Typography>{student.course}</Typography>
            </Box>
            {student.age && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Cake color="primary" />
                <Typography>{student.age} years old</Typography>
              </Box>
            )}
          </Box>

          <Button
            component={Link}
            to="/students"
            startIcon={<ArrowBack />}
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              px: 4,
            }}
          >
            Back to Students
          </Button>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default StudentDetail;