import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Paper,
  LinearProgress,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  People,
  PersonAdd,
  School,
  TrendingUp,
  EmojiEvents,
  CalendarToday,
  ArrowForward,
  CheckCircle,
  Speed,
  AutoAwesome,
} from "@mui/icons-material";
import { motion } from "framer-motion";

function Home({ students }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Text color: dark mode mein white, light mode mein dark
  const textColor = isDark ? "#fff" : "#1e293b";
  const subTextColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.7)";
  const cardBg = isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.7)";
  const cardBorder = isDark
    ? "rgba(255,255,255,0.2)"
    : "rgba(255,255,255,0.8)";

  // ---------- DATA ----------
  const totalStudents = students.length;

  const courseCount = students.reduce((acc, s) => {
    acc[s.course] = (acc[s.course] || 0) + 1;
    return acc;
  }, {});

  const COLORS = ["#667eea", "#f093fb", "#4facfe", "#43e97b", "#fa709a"];

  const recentStudents = [...students].slice(-3).reverse();

  const avgAge =
    students.filter((s) => s.age).length > 0
      ? Math.round(
          students.filter((s) => s.age).reduce((a, s) => a + s.age, 0) /
            students.filter((s) => s.age).length
        )
      : 0;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stats = [
    {
      label: "Total Students",
      value: totalStudents,
      icon: <People />,
      color: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
      label: "Courses",
      value: Object.keys(courseCount).length,
      icon: <School />,
      color: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
    {
      label: "Average Age",
      value: avgAge,
      icon: <TrendingUp />,
      color: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
    {
      label: "Active",
      value: totalStudents,
      icon: <CheckCircle />,
      color: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
  ];

  const features = [
    {
      icon: <Speed />,
      title: "Fast & Responsive",
      desc: "Built with React + Material UI for lightning-fast performance.",
    },
    {
      icon: <AutoAwesome />,
      title: "Modern Design",
      desc: "Glassmorphism, animations, and gradient colors throughout.",
    },
    {
      icon: <CheckCircle />,
      title: "Easy Management",
      desc: "Add, view, and delete students with just a few clicks.",
    },
    {
      icon: <EmojiEvents />,
      title: "Best Practices",
      desc: "Clean code, proper folder structure, and reusable components.",
    },
  ];

  return (
    <Box sx={{ minHeight: "90vh", py: 4 }}>
      <Container maxWidth="lg">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              mb: 4,
              borderRadius: 5,
              background: cardBg,
              backdropFilter: "blur(20px)",
              border: `1px solid ${cardBorder}`,
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <Chip
                  icon={<CalendarToday sx={{ fontSize: 16 }} />}
                  label={today}
                  sx={{
                    mb: 2,
                    background: isDark
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(99,102,241,0.15)",
                    color: isDark ? "#fff" : "#6366f1",
                    fontWeight: 500,
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    color: textColor,
                    lineHeight: 1.2,
                  }}
                >
                  Welcome to{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Intern Student Portal
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mb: 3, color: subTextColor, fontWeight: 400 }}
                >
                  Manage your students effortlessly with a modern, beautiful,
                  and powerful dashboard.
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    component={Link}
                    to="/add"
                    variant="contained"
                    size="large"
                    startIcon={<PersonAdd />}
                    sx={{
                      borderRadius: 4,
                      px: 4,
                      py: 1.5,
                      background:
                        "linear-gradient(135deg, #667eea, #764ba2)",
                      color: "#fff",
                      fontWeight: 700,
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 15px 40px rgba(99,102,241,0.4)",
                      },
                      transition: "all 0.3s",
                    }}
                  >
                    Add Student
                  </Button>
                  <Button
                    component={Link}
                    to="/students"
                    variant="outlined"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      borderRadius: 4,
                      px: 4,
                      py: 1.5,
                      color: isDark ? "#fff" : "#6366f1",
                      borderColor: isDark ? "#fff" : "#6366f1",
                      borderWidth: 2,
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: isDark ? "#fff" : "#6366f1",
                        bgcolor: isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(99,102,241,0.1)",
                      },
                      transition: "all 0.3s",
                    }}
                  >
                    View All
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: 180,
                      height: 180,
                      mx: "auto",
                      background: isDark
                        ? "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))"
                        : "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(118,75,162,0.1))",
                      backdropFilter: "blur(20px)",
                      border: `3px solid ${
                        isDark ? "rgba(255,255,255,0.3)" : "rgba(99,102,241,0.3)"
                      }`,
                      fontSize: 80,
                    }}
                  >
                    🎓
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        {/* STATS */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    background: stat.color,
                    color: "#fff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <CardContent sx={{ textAlign: "center", py: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: "rgba(255,255,255,0.25)",
                        width: 60,
                        height: 60,
                        mx: "auto",
                        mb: 1.5,
                      }}
                    >
                      {stat.icon}
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* COURSE DISTRIBUTION + RECENT STUDENTS */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: cardBg,
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${cardBorder}`,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: textColor }}
                >
                  📊 Course Distribution
                </Typography>
                {Object.keys(courseCount).length > 0 ? (
                  Object.keys(courseCount).map((course, i) => (
                    <Box key={course} sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          sx={{ color: textColor, fontWeight: 500 }}
                        >
                          {course}
                        </Typography>
                        <Typography
                          sx={{ color: textColor, fontWeight: 700 }}
                        >
                          {courseCount[course]}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={(courseCount[course] / totalStudents) * 100}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          background: isDark
                            ? "rgba(255,255,255,0.2)"
                            : "rgba(0,0,0,0.1)",
                          "& .MuiLinearProgress-bar": {
                            background: COLORS[i % COLORS.length],
                            borderRadius: 5,
                          },
                        }}
                      />
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{ color: textColor, textAlign: "center", py: 4 }}
                  >
                    No data
                  </Typography>
                )}
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: cardBg,
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${cardBorder}`,
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: textColor }}
                  >
                    ⭐ Recent Students
                  </Typography>
                  <Button
                    component={Link}
                    to="/students"
                    size="small"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: isDark ? "#e0e7ff" : "#6366f1",
                      textTransform: "none",
                    }}
                  >
                    View All
                  </Button>
                </Box>

                {recentStudents.length > 0 ? (
                  recentStudents.map((s) => {
                    const initials = s.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase();
                    return (
                      <Box key={s.id}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", py: 1.5 }}
                        >
                          <Avatar
                            sx={{
                              background:
                                "linear-gradient(135deg, #667eea, #764ba2)",
                              mr: 2,
                              fontWeight: 700,
                            }}
                          >
                            {initials}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography
                              sx={{ fontWeight: 600, color: textColor }}
                            >
                              {s.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: subTextColor }}
                            >
                              {s.email}
                            </Typography>
                          </Box>
                          <Chip
                            label={s.course}
                            size="small"
                            sx={{
                              background:
                                "linear-gradient(135deg, #667eea, #764ba2)",
                              color: "#fff",
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                        <Divider
                          sx={{
                            borderColor: isDark
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.1)",
                          }}
                        />
                      </Box>
                    );
                  })
                ) : (
                  <Typography
                    sx={{ color: textColor, textAlign: "center", py: 4 }}
                  >
                    No students yet
                  </Typography>
                )}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: textColor,
                textAlign: "center",
              }}
            >
              ✨ Why Choose Us?
            </Typography>
            <Typography
              sx={{
                color: subTextColor,
                textAlign: "center",
                mb: 4,
              }}
            >
              Everything you need to manage students in one place
            </Typography>

            <Grid container spacing={3}>
              {features.map((f, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <motion.div whileHover={{ y: -8 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        background: cardBg,
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${cardBorder}`,
                        height: "100%",
                        textAlign: "center",
                        transition: "all 0.3s",
                        "&:hover": {
                          background: isDark
                            ? "rgba(255,255,255,0.25)"
                            : "rgba(255,255,255,0.9)",
                          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          mx: "auto",
                          mb: 2,
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                        }}
                      >
                        {f.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, color: textColor }}
                      >
                        {f.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: subTextColor }}
                      >
                        {f.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 5,
              background: isDark
                ? "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))"
                : "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(118,75,162,0.1))",
              backdropFilter: "blur(20px)",
              border: `1px solid ${cardBorder}`,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: textColor, mb: 1 }}
            >
              🚀 Ready to Get Started?
            </Typography>
            <Typography sx={{ color: subTextColor, mb: 3 }}>
              Add your first student and start managing today!
            </Typography>
            <Button
              component={Link}
              to="/add"
              variant="contained"
              size="large"
              startIcon={<PersonAdd />}
              sx={{
                borderRadius: 4,
                px: 5,
                py: 1.5,
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff",
                fontWeight: 700,
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(99,102,241,0.4)",
                },
                transition: "all 0.3s",
              }}
            >
              Add Student Now
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home;