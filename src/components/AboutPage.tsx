import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  LinearProgress,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  DesignServices,
  Storage,
  Psychology,
  EmojiEvents,
  School,
  Work,
  Circle,
} from "@mui/icons-material";
import type { Variants } from "framer-motion";

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedItems, setAnimatedItems] = useState(false);
  const MotionBox = motion(Box);
  const MotionChip = motion(Chip);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skillCategories = [
    { id: "frontend", label: "Frontend", icon: <DesignServices /> },
    { id: "backend", label: "Backend", icon: <Storage /> },
    { id: "soft", label: "Soft Skills", icon: <Psychology /> },
  ];

  const skillsData = {
    frontend: [
      { name: "React", level: 90 },
      { name: "React Native", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Material-UI", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
    backend: [
      { name: "Nest.js", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "RESTful APIs", level: 90 },
    ],
    soft: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 85 },
      { name: "Agile Methodology", level: 80 },
      { name: "Project Management", level: 75 },
      { name: "Mentoring", level: 80 },
    ],
  };

  const experiences = [
    {
      role: "Frontend Developer intern",
      company: "Encrobytes",
      period: "sep 2023 - jun 2024 | Faridabad, IN",
      achievements: [
        "Developed responsive web pages using React and MUI",
        "Implemented reusable components and optimized frontend performance",
        "Collaborated with backend developers to integrate REST APIs",
        "Participated in code reviews and agile sprint meetings to improve project delivery",
      ],
    },
    {
      role: "Senior Frontend Developer",
      company: "People Maketh",
      period: "jul 2024 - jun 2025 | Bangalore, IN",
      achievements: [
        "Worked on 3 projects from scratch till production deployment",
        "Created reusable components used across multiple projects",
        "Collaborated with a team of 5+ frontend developers ensuring smooth delivery",
      ],
    },
    {
      role: "Senior Frontend Developer",
      company: "Evtaar",
      period: "Jun 2025 - Present | United Arab Emirates",
      achievements: [
        "Building an all-in-one B2B platform for businesses",
        "Designed and implemented reusable frontend components for multiple modules",
        "Collaborated with a team of 10+ frontend and backend developers to deliver scalable solutions",
        "Integrated dashboards, analytics, and workflow management tools into the platform",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Voc (Software Development)",
      institution: "Maharishi Dayanand University",
      period: "2022 - 2025 | Haryana, India",
      details: "Graduated with 7.8 CGPA in Software Development",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Pal Progressive Sr. Sec. School",
      period: "2020 - 2022 | Haryana, India",
      details: "Completed with 81% marks in Commerce stream",
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Pal Progressive Sr. Sec. School",
      period: "2019 - 2020 | Haryana, India",
      details: "Completed with 70% marks in Commerce stream",
    },
  ];

  const certifications = [
    { name: "Software Engineering", issuer: "Encrobytes", year: "2023" },
    {
      name: "The Complete JavaScript Course: From Zero to Expert!",
      issuer: "Udemy",
      year: "2022",
    },
  ];

  const bubbles = [
    {
      top: "-10%",
      right: "-5%",
      size: 300,
      color: alpha(theme.palette.primary.main, 0.05),
      rotate: 360,
      duration: 30,
      scale: [1, 1.1, 1],
    },
    {
      bottom: "-10%",
      left: "-5%",
      size: 400,
      color: alpha(theme.palette.secondary.main, 0.05),
      rotate: -360,
      duration: 40,
      scale: [1, 1.2, 1],
    },
    {
      top: "20%",
      left: "10%",
      size: 150,
      color: alpha(theme.palette.primary.main, 0.08),
      rotate: 360,
      duration: 50,
      scale: [1, 1.15, 1],
    },
    {
      bottom: "30%",
      right: "20%",
      size: 200,
      color: alpha(theme.palette.secondary.main, 0.07),
      rotate: -360,
      duration: 35,
      scale: [1, 1.1, 1],
    },
    {
      top: "40%",
      right: "40%",
      size: 100,
      color: alpha(theme.palette.primary.main, 0.06),
      rotate: 360,
      duration: 45,
      scale: [1, 1.05, 1],
    },
    {
      top: "10%",
      right: "60%",
      size: 120,
      color: alpha(theme.palette.secondary.main, 0.04),
      rotate: 360,
      duration: 50,
      scale: [1, 1.08, 1],
    },
    {
      bottom: "20%",
      left: "50%",
      size: 180,
      color: alpha(theme.palette.primary.main, 0.05),
      rotate: -360,
      duration: 40,
      scale: [1, 1.12, 1],
    },
    {
      top: "50%",
      left: "20%",
      size: 90,
      color: alpha(theme.palette.secondary.main, 0.06),
      rotate: 360,
      duration: 55,
      scale: [1, 1.07, 1],
    },
    {
      bottom: "5%",
      right: "70%",
      size: 140,
      color: alpha(theme.palette.primary.main, 0.05),
      rotate: -360,
      duration: 60,
      scale: [1, 1.1, 1],
    },
    {
      top: "30%",
      right: "30%",
      size: 80,
      color: alpha(theme.palette.secondary.main, 0.03),
      rotate: 360,
      duration: 45,
      scale: [1, 1.05, 1],
    },
    {
      top: "60%",
      left: "60%",
      size: 130,
      color: alpha(theme.palette.primary.main, 0.07),
      rotate: -360,
      duration: 50,
      scale: [1, 1.09, 1],
    },
    {
      bottom: "40%",
      right: "10%",
      size: 160,
      color: alpha(theme.palette.secondary.main, 0.05),
      rotate: 360,
      duration: 35,
      scale: [1, 1.1, 1],
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        py: 8,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
            : "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 30%, #A5B4FC 60%, #C7D2FE 100%)",
      }}
    >
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          animate={{ rotate: bubble.rotate, scale: bubble.scale }}
          transition={{
            rotate: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: bubble.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "absolute",
            top: bubble.top,
            bottom: bubble.bottom,
            left: bubble.left,
            right: bubble.right,
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            background: bubble.color,
            zIndex: 0,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial="hidden"
          animate={animatedItems ? "visible" : "hidden"}
          variants={fadeIn}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #2563eb, #7c3aed)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              mt: 3,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 800, mx: "auto", mb: 4, color: "text.secondary" }}
          >
            I am a dedicated full-stack developer with a passion for building
            robust and scalable applications. With over 2.5 years of experience,
            I specialize in creating seamless digital experiences that combine
            aesthetic appeal with technical excellence.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              mb: 6,
            }}
          >
            {[
              { value: "2+", label: "Years Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "15+", label: "Technologies" },
            ].map((stat, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 50%", md: "1 1 25%" },
                }}
              >
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 2,
                      background: alpha(theme.palette.primary.main, 0.03),
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      borderRadius: 4,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Typography variant="h3" color="primary" fontWeight={700}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </MotionBox>

        <Box component={motion.div} variants={fadeIn} sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ mb: 4, fontWeight: 600, color: "text.secondary" }}
          >
            Skills & Expertise
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 5,
            }}
          >
            {skillCategories.map((category) => (
              <MotionChip
                key={category.id}
                icon={category.icon}
                label={category.label}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "filled" : "outlined"}
                color={activeCategory === category.id ? "primary" : "default"}
                sx={{
                  px: 2,
                  py: 2,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-2px)", boxShadow: 2 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {skillsData[activeCategory as keyof typeof skillsData].map(
              (skill, index) => (
                <MotionBox
                  key={index}
                  variants={slideInLeft}
                  initial="hidden"
                  animate={animatedItems ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  sx={{
                    flex: { xs: "1 1 100%", md: "1 1 48%" },
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography variant="h6">{skill.name}</Typography>
                    <Typography variant="h6">{skill.level || 70}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level || 70}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 4,
                        background:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(45deg, #4ade80, #22d3ee)"
                            : "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                      },
                    }}
                  />
                </MotionBox>
              )
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: 4,
            mb: 8,
          }}
        >
          {/* Experience Column */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" } }}>
            <motion.div variants={slideInLeft}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mb: 4, fontWeight: 600, color: "text.secondary" }}
              >
                Experience
              </Typography>
              <Box>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    initial="hidden"
                    animate={animatedItems ? "visible" : "hidden"}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        mb: 3,
                        p: 3,
                        background: alpha(theme.palette.background.paper, 0.7),
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${alpha(
                          theme.palette.primary.main,
                          0.1
                        )}`,
                        borderRadius: 4,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: "primary.main",
                            mr: 2,
                            width: 40,
                            height: 40,
                          }}
                        >
                          <Work />
                        </Avatar>
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {exp.role}
                          </Typography>
                          <Typography variant="subtitle1" color="primary">
                            {exp.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {exp.period}
                          </Typography>
                        </Box>
                      </Box>
                      <List dense>
                        {exp.achievements.map((achievement, i) => (
                          <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <Circle
                                sx={{ fontSize: 8, color: "primary.main" }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={achievement} />
                          </ListItem>
                        ))}
                      </List>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Education Column */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" } }}>
            <motion.div variants={slideInRight}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ mb: 4, fontWeight: 600, color: "text.secondary" }}
              >
                Education
              </Typography>
              <Box>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    initial="hidden"
                    animate={animatedItems ? "visible" : "hidden"}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        mb: 3,
                        p: 3,
                        background: alpha(theme.palette.background.paper, 0.7),
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${alpha(
                          theme.palette.secondary.main,
                          0.1
                        )}`,
                        borderRadius: 4,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                        <Avatar
                          sx={{
                            bgcolor: alpha(theme.palette.secondary.main, 0.1),
                            color: "secondary.main",
                            mr: 2,
                            width: 40,
                            height: 40,
                          }}
                        >
                          <School />
                        </Avatar>
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {edu.degree}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="secondary.main"
                          >
                            {edu.institution}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {edu.period}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mt: 1, fontStyle: "italic" }}
                          >
                            {edu.details}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mb: 4, fontWeight: 600, color: "text.secondary" }}
          >
            Certification
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: 3,
              justifyContent: "space-between",
            }}
          >
            {certifications.map((cert, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 100%",
                  maxWidth: { xs: "100%", md: "48%" },
                }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      background: alpha(theme.palette.background.paper, 0.7),
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(
                        theme.palette.success.main,
                        0.1
                      )}`,
                      borderRadius: 4,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      width: "100%",
                    }}
                  >
                    <EmojiEvents
                      color="success"
                      sx={{ fontSize: 40, mb: 2, mx: "auto" }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {cert.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.issuer}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="success.main"
                      sx={{ mt: 1 }}
                    >
                      {cert.year}
                    </Typography>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
