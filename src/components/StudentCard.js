import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Delete, Visibility, School } from "@mui/icons-material";
import { motion } from "framer-motion";

function StudentCard({ student, onDelete }) {
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const colors = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #f093fb, #f5576c)",
    "linear-gradient(135deg, #4facfe, #00f2fe)",
    "linear-gradient(135deg, #43e97b, #38f9d7)",
    "linear-gradient(135deg, #fa709a, #fee140)",
  ];
  const color = colors[student.id % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          borderRadius: 4,
          height: "100%",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              sx={{
                background: color,
                width: 60,
                height: 60,
                mr: 2,
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              {initials}
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {student.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {student.email}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
            <Chip
              icon={<School />}
              label={student.course}
              size="small"
              sx={{ background: color, color: "#fff", fontWeight: 600 }}
            />
            {student.age && (
              <Chip label={`Age: ${student.age}`} size="small" variant="outlined" />
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              component={Link}
              to={`/student/${student.id}`}
              startIcon={<Visibility />}
              variant="contained"
              fullWidth
              sx={{
                borderRadius: 3,
                background: color,
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              View
            </Button>
            <Button
              onClick={() => onDelete(student.id)}
              startIcon={<Delete />}
              variant="outlined"
              color="error"
              sx={{ borderRadius: 3, minWidth: 100 }}
            >
              Delete
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default StudentCard;