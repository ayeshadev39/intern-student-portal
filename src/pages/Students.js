import { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Grid,
  TextField,
  Box,
  Container,
  InputAdornment,
  CircularProgress,
  Chip,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { toast } from "react-toastify";
import StudentCard from "../components/StudentCard";

function Students({ students, setStudents }) {
  const [search, setSearch] = useState("");
  const [apiStudents, setApiStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setApiStudents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
    toast.error("Student deleted!");
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 3,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        All Students
      </Typography>

      <TextField
        fullWidth
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      {filteredStudents.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h5" color="text.secondary">
            No students yet
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add your first student to get started!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredStudents.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.id}>
              <StudentCard student={s} onDelete={deleteStudent} />
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          🌐 Dummy Users (from API)
        </Typography>

        {loading ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {apiStudents.map((u) => (
              <Grid item xs={12} sm={6} md={4} key={u.id}>
                <StudentCard
                  student={{
                    id: u.id + 1000,
                    name: u.name,
                    email: u.email,
                    course: u.company.name,
                  }}
                  onDelete={() => toast.info("API users cannot be deleted")}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default Students;