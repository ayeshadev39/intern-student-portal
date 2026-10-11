import {
  TextField,
  Button,
  Stack,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonAdd } from "@mui/icons-material";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !course) {
      toast.error("Please fill all required fields!");
      return;
    }
    const newStudent = {
      id: Date.now(),
      name,
      email,
      course,
      age: age ? Number(age) : null,
    };
    setStudents([...students, newStudent]);
    toast.success("Student added successfully!");
    navigate("/students");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Add New Student
            </Typography>
          </Box>

          <Stack spacing={3}>
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />
            <TextField
              label="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              fullWidth
              required
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />
            <TextField
              label="Age (optional)"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            />

            <Button
              variant="contained"
              size="large"
              startIcon={<PersonAdd />}
              onClick={handleSubmit}
              sx={{
                borderRadius: 3,
                py: 1.5,
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                fontWeight: 600,
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
                },
                transition: "all 0.3s",
              }}
            >
              Add Student
            </Button>
          </Stack>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default AddStudent;