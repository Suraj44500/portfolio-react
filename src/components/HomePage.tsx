import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import type { Variants } from "framer-motion";
import {
  RocketLaunch,
  LinkedIn,
  Email,
  Code,
  DesignServices,
  WhatsApp,
} from "@mui/icons-material";
import type { Page } from "../App";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import Earth3D from "./Earth3D";

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const theme = useTheme();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Auto-rotate roles text
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Text reveal animation
  const textReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  // Background particles component
  const BackgroundParticles = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMouseX(e.clientX / window.innerWidth - 0.5);
        setMouseY(e.clientY / window.innerHeight - 0.5);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
      <>
        {[...Array(30)].map((_, i) => {
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 20 + 10;
          const size = Math.random() * 6 + 2;

          return (
            <Box
              key={i}
              component={motion.div}
              animate={{
                x: [
                  `${initialX}%`,
                  `${initialX + mouseX * 20}%`,
                  `${initialX}%`,
                ],
                y: [
                  `${initialY}%`,
                  `${initialY + mouseY * 20}%`,
                  `${initialY}%`,
                ],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                background: alpha(theme.palette.primary.main, 0.3),
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />
          );
        })}
      </>
    );
  };

  // Animated background shapes
  const BackgroundShapes = () => (
    <>
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: alpha(theme.palette.secondary.main, 0.07),
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        }}
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: alpha(theme.palette.primary.main, 0.05),
          zIndex: 0,
        }}
      />
    </>
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)"
            : "linear-gradient(135deg, #f8f9ff 0%, #e6e9ff 30%, #d6dbff 60%, #e6e9ff 100%)",
        position: "relative",
        color: "text.primary",
        textAlign: "center",
        px: 3,
      }}
    >
      <BackgroundParticles />
      <BackgroundShapes />

      <Box
        component={motion.div}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1000px",
          mt: 12,
          mx: "auto",
        }}
      >
        {/* Profile Image */}
        <Box
          component={motion.div}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            mx: "auto",
            mb: 4,
            boxShadow: 3,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            padding: "4px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "white",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/Media.jpeg"
              alt="Suraj Singh"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Heading */}
        <Typography
          component={motion.h1}
          variant="h1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 700,
            mb: 1,
            color: "text.primary",
          }}
        >
          Hello, I'm{" "}
          <Box
            component="span"
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
            }}
          >
            Suraj Singh
          </Box>
        </Typography>

        {/* Roles */}
        <Box sx={{ height: 60, overflow: "hidden", mb: 3 }}>
          <AnimatePresence mode="wait">
            <Typography
              key={currentTextIndex}
              component={motion.p}
              variant="h5"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              sx={{
                fontWeight: 400,
                color: "text.secondary",
              }}
            >
              {roles[currentTextIndex]}
            </Typography>
          </AnimatePresence>
        </Box>

        {/* About */}
        <Typography
          component={motion.p}
          variant="body1"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          sx={{
            mb: 4,
            fontWeight: 300,
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.7,
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          I'm a passionate developer from India with a{" "}
          <strong>B.Voc in Software Development (7.8 CGPA)</strong>. I have 2.5
          years of web development experience, working with modern technologies
          to create scalable and impactful digital solutions.
        </Typography>

        {/* Skills */}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 5,
          }}
        >
          {[
            { skill: "React", icon: <SiReact /> },
            { skill: "TypeScript", icon: <SiTypescript /> },
            { skill: "React Native", icon: <MdPhoneIphone /> },
            { skill: "Next.js", icon: <SiNextdotjs /> },
            { skill: "JavaScript", icon: <SiJavascript /> },
            { skill: "UI/UX", icon: <DesignServices /> },
            { skill: "Material UI", icon: <Code /> },
          ].map((item, i) => (
            <motion.div
              key={item.skill}
              custom={i}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              <Chip
                icon={item.icon}
                label={item.skill}
                sx={{
                  background: alpha(theme.palette.primary.main, 0.1),
                  color: "text.primary",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  py: 1,
                  "&:hover": {
                    background: alpha(theme.palette.primary.main, 0.2),
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              />
            </motion.div>
          ))}
        </Box>

        {/* Buttons */}
        <Box
          component={motion.div}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 6,
          }}
        >
          <Button
            component={motion.button}
            variant="contained"
            size="large"
            onClick={() => setCurrentPage("projects")}
            startIcon={<RocketLaunch />}
            sx={{
              px: 4,
              py: 1.5,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: 2,
              fontWeight: 600,
              boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
              "&:hover": {
                boxShadow: `0 6px 20px ${alpha(
                  theme.palette.primary.main,
                  0.6
                )}`,
                background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </Button>
          <Button
            component={motion.button}
            variant="outlined"
            size="large"
            onClick={() => setCurrentPage("contact")}
            startIcon={<Email />}
            sx={{
              px: 4,
              py: 1.5,
              borderWidth: 2,
              borderRadius: 2,
              color: "text.primary",
              borderColor: "primary.main",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              background: alpha(theme.palette.background.paper, 0.7),
              "&:hover": {
                borderWidth: 2,
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                boxShadow: `0 4px 14px ${alpha(
                  theme.palette.primary.main,
                  0.2
                )}`,
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </Button>
        </Box>

        {/* Social Links */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            pb: 10,
            mb: { xs: 1 },
          }}
        >
          {[
            {
              icon: <WhatsApp />,
              href: "https://wa.me/919625553534",
              label: "WhatsApp",
            },
            {
              icon: <LinkedIn />,
              href: "https://www.linkedin.com/in/suraj-singh-a735b8377",
              label: "LinkedIn",
            },
            {
              icon: <Email />,
              href: "mailto:singhsuraj44500@gmail.com",
              label: "Email",
            },
          ].map((social, i) => (
            <IconButton
              key={i}
              href={social.href}
              target="_blank"
              component={motion.a}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.6 + i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                color: "primary.main",
                background: alpha(theme.palette.background.paper, 0.7),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                backdropFilter: "blur(10px)",
                "&:hover": {
                  background: alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
      <Earth3D/>
    </Box>
  );
};

export default HomePage;
