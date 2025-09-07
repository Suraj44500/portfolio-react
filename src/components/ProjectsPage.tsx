// src/components/ProjectsPage.tsx
import React, { useEffect, useRef, type JSX } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Web,
  Storage,
  Cloud,
  Chat,
  Code,
  Instagram,
} from "@mui/icons-material";

type ProjectType = {
  name: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
};

const iconMap: Record<string, JSX.Element> = {
  portfolio: <Web sx={{ fontSize: 48, mb: 1 }} />,
  todo: <Storage sx={{ fontSize: 48, mb: 1 }} />,
  weather: <Cloud sx={{ fontSize: 48, mb: 1 }} />,
  chat: <Chat sx={{ fontSize: 48, mb: 1 }} />,
  instagram: <Instagram sx={{ fontSize: 48, mb: 1 }} />,
  default: <Code sx={{ fontSize: 48, mb: 1 }} />,
};

const gradients = {
  portfolio: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  todo: "linear-gradient(135deg, #f43f5e 0%, #f97316 100%)",
  chat: "linear-gradient(135deg, #16a34a 0%, #86efac 100%)",
  weather: "linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)",
  instagram:
    "linear-gradient(135deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)",
  default: "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)",
};

const ProjectCard: React.FC<{ project: ProjectType; index: number }> = ({
  project,
  index,
}) => {
  const hasImage = project.image && project.image.trim() !== "";

  // Determine icon based on project name
  const key = project.name.toLowerCase();
  let icon = iconMap.default;
  let gradient = gradients.default;

  if (key.includes("portfolio")) {
    icon = iconMap.portfolio;
    gradient = gradients.portfolio;
  } else if (key.includes("todo")) {
    icon = iconMap.todo;
    gradient = gradients.todo;
  } else if (key.includes("weather")) {
    icon = iconMap.weather;
    gradient = gradients.weather;
  } else if (key.includes("chat")) {
    icon = iconMap.chat;
    gradient = gradients.chat;
  } else if (key.includes("instagram")) {
    icon = iconMap.instagram;
    gradient = gradients.instagram;
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.12)",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(255,255,255,0.12)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            background: hasImage ? "transparent" : gradient,
          }}
        >
          {hasImage ? (
            <CardMedia
              component="img"
              image={project.image}
              alt={project.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                cursor: project.url ? "pointer" : "default",
              }}
              onClick={() => project.url && window.open(project.url, "_blank")}
            />
          ) : (
            <Box
              sx={{
                textAlign: "center",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
              <Typography variant="h6">{project.name}</Typography>
            </Box>
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {project.tags.map((tag, tagIndex) => (
              <Chip
                key={tagIndex}
                label={tag}
                size="small"
                color={
                  ["primary", "secondary", "success", "warning"][
                    tagIndex % 4
                  ] as any
                }
                variant="outlined"
              />
            ))}
          </Box>
          {project.url && (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => window.open(project.url, "_blank")}
            >
              Live Demo
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const liveProjects: ProjectType[] = [
    {
      name: "Intellios – Healthcare Website",
      description:
        "Developed an interactive story feature using react-slick and custom CSS animations to enhance UX and visual appeal.",
      tags: ["React", "CSS Animations", "react-slick"],
      image: "/Intellios.png",
      url: "https://d2akvplbz836i4.cloudfront.net/",
    },
    {
      name: "People Maketh – Company Website",
      description:
        "Built with React and Material UI for a modern, responsive interface. Developed critical workflow UI and delivered features on time.",
      tags: ["React", "Material UI", "Frontend Development"],
      image: "/PeopleMaketh.png",
      url: "https://peoplemaketh.com/",
    },
    {
      name: "EaseMyCRM – Healthcare CRM",
      description:
        "Developed a CRM platform to streamline healthcare management, including patient tracking, appointments, and analytics modules.",
      tags: ["React", "CRM", "Healthcare", "Analytics"],
      image: "/Humigy.png",
      url: "https://humigy.com/",
    },
    {
      name: "Evtaar – Team Collaboration Platform",
      description:
        "Built an all-in-one platform integrating social media, Zoom meetings, Jira tasks, and attendance tracking for seamless team collaboration.",
      tags: [
        "React",
        "Team Collaboration",
        "Zoom API",
        "Jira Integration",
        "Attendance Tracking",
      ],
      image: "/Evtaar.png",
      url: "https://staging.evtaar.com/",
    },
  ];

  const personalProjects: ProjectType[] = [
    {
      name: "Personal Portfolio",
      description:
        "Created my personal portfolio website with React, Framer Motion, and MUI to showcase my skills and projects.",
      tags: ["React", "MUI", "Framer Motion"],
      image: "/Portfolio.png",
    },
    {
      name: "Instagram Clone",
      description:
        "Developed an Instagram-like social media platform with React, Firebase, and real-time photo sharing features.",
      tags: ["React", "Firebase", "Realtime", "Social Media"],
      image: "",
    },
    {
      name: "Weather App",
      description:
        "Developed a weather forecast app using React and OpenWeather API to fetch and display live weather information for multiple cities.",
      tags: ["React", "API", "JavaScript"],
      image: "",
    },
    {
      name: "Chat App",
      description:
        "Built a real-time chat application using React and Firebase, allowing multiple users to communicate instantly.",
      tags: ["React", "Firebase", "Realtime"],
      image: "",
    },

    {
      name: "Todo App",
      description:
        "Built a full-featured Todo app with React and localStorage, implementing features like categories, priority, and deadlines.",
      tags: ["React", "JavaScript", "LocalStorage"],
      image: "",
    },
  ];

  const BackgroundParticles = () => (
    <>
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 6 + 3;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        return (
          <Box
            key={i}
            component={motion.div}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [
                Math.random() * 100,
                Math.random() * 300 - 150,
                Math.random() * 500 - 250,
              ],
              y: [
                Math.random() * 100,
                Math.random() * 300 - 150,
                Math.random() * 500 - 250,
              ],
            }}
            transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
            sx={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.5)"
                  : "rgba(99,102,241,0.4)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
          />
        );
      })}
    </>
  );

  const BackgroundShapes = () => (
    <>
      {[...Array(3)].map((_, i) => {
        const size = 150 + i * 50;
        const rotateDir = i % 2 === 0 ? 360 : -360;
        const duration = 20 + i * 5;
        return (
          <Box
            key={i}
            component={motion.div}
            animate={{ rotate: rotateDir, scale: [1, 1.2, 1] }}
            transition={{
              rotate: { duration, repeat: Infinity, ease: "linear" },
              scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            }}
            sx={{
              position: "absolute",
              top: `${10 + i * 20}%`,
              left: `${i * 30}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(99,102,241,0.08)",
              zIndex: 0,
            }}
          />
        );
      })}
    </>
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
            : "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 30%, #A5B4FC 60%, #C7D2FE 100%)",
        position: "relative",
        overflow: "hidden",
        color: "text.secondary",
        py: 8,
      }}
    >
      <BackgroundParticles />
      <BackgroundShapes />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            My Projects
          </Typography>
          <Typography
            component={motion.p}
            variant="h6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            sx={{ mb: 1, color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Here are some of the projects I've worked on
          </Typography>
        </Box>

        {/* Live Projects */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Live Projects
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Projects that are deployed and actively used
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 4, sm: 6 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
            }}
          >
            {liveProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </Box>
        </Box>

        {/* Personal Projects */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Personal Projects
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Projects I built for learning, experimentation, or fun
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: { xs: 4, sm: 6 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
            }}
          >
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
