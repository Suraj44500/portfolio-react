import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  useTheme,
} from "@mui/material";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Variants } from "framer-motion";
import {
  KeyboardArrowDown,
  RocketLaunch,
  LinkedIn,
  Email,
  Code,
  DesignServices,
  WhatsApp,
} from "@mui/icons-material";
import type { Page } from "../App";
import { SiReact, SiNextdotjs } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const theme = useTheme();
  const [currentTextIndex] = useState(0);
  const [isPulsing] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
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
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
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
        {[...Array(50)].map((_, i) => {
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 20 + 10;

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
                opacity: [0, 0.7, 0],
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
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.5)",
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
          background: "rgba(255,255,255,0.07)",
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
          background: "rgba(255,255,255,0.05)",
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        animate={{
          rotate: [0, 90, 0],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: 100,
          height: 100,
          background: "rgba(255,255,255,0.04)",
          zIndex: 0,
        }}
      />
    </>
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
            : "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 30%, #A5B4FC 60%, #C7D2FE 100%)",
        position: "relative",
        overflow: "hidden",
        color: "white",
        textAlign: "center",
        px: 3,
      }}
    >
      <BackgroundParticles />
      <BackgroundShapes />

      <Box
        component={motion.div}
        style={{ y, opacity }}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1000px",
          mt: 12,
          mx: "auto",
        }}
      >
        <Box
          component={motion.div}
          sx={{
            width: 210,
            height: 210,
            borderRadius: "50%",
            mx: "auto",
            mb: 4,
            boxShadow: 6,
            background:
              "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)",
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

        {/* Heading with enhanced animation */}
        <Typography
          component={motion.h1}
          variant="h1"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 700,
            mb: 1,
            color: "text.secondary",
          }}
        >
          Hello, I'm{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
            }}
          >
            Suraj Singh
          </Box>
        </Typography>

        {/* Roles with enhanced animation */}
        <Box sx={{ height: 60, overflow: "hidden", mb: 2 }}>
          <AnimatePresence mode="wait">
            <Typography
              key={currentTextIndex}
              component={motion.p}
              variant="h4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              sx={{
                fontWeight: 300,
                fontStyle: "italic",
                color: "secondary.main",
              }}
            >
              {roles[currentTextIndex]}
            </Typography>
          </AnimatePresence>
        </Box>

        {/* About with enhanced animation */}
        <Typography
          component={motion.p}
          variant="h6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          sx={{
            mb: 4,
            fontWeight: 300,
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6,
            color: "text.secondary",
          }}
        >
          I'm a passionate developer from India with a{" "}
          <strong>B.Voc in Software Development (7.8 CGPA)</strong>. I have 2.5
          years of web development experience, working with modern technologies
          to create scalable and impactful digital solutions.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {[
            { skill: "React", icon: <SiReact /> },
            { skill: "TypeScript", icon: <Code /> },
            { skill: "React Native", icon: <MdPhoneIphone /> },
            { skill: "Next.js", icon: <SiNextdotjs /> },
            { skill: "JavaScript", icon: <Code /> },
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
                  background: "rgba(255,255,255,0.1)",
                  color: "text.secondary",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  py: 1,
                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              />
            </motion.div>
          ))}
        </Box>

        {/* Buttons with enhanced animation */}
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
              background: "linear-gradient(45deg, #6366F1, #818CF8)",
              borderRadius: 2,
              fontWeight: 600,
              boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
              "&:hover": {
                boxShadow: "0 6px 20px rgba(99, 102, 241, 0.6)",
                background: "linear-gradient(45deg, #818CF8, #A5B4FC)",
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
              color: "text.secondary",
              borderColor: "text.secondary",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.1)",
              "&:hover": {
                borderWidth: 2,
                backgroundColor: "rgba(255,255,255,0.2)",
                boxShadow: "0 4px 14px rgba(255, 255, 255, 0.2)",
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </Button>
        </Box>

        {/* Social Links with enhanced animation */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          sx={{ display: "flex", gap: 2, justifyContent: "center", pb: 10 }}
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
                color: "text.secondary",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                "&:hover": {
                  background: "rgba(255,255,255,0.2)",
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      <Box
        component={motion.div}
        animate={{ opacity: isPulsing ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 2,
          display: {
            xs: "flex",
            md: "none",
          },
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={() => setCurrentPage("about")}
        whileHover={{ scale: 1.1 }}
      >
        <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
          Learn more about me
        </Typography>
        <KeyboardArrowDown
          sx={{
            fontSize: 40,
            animation: "bounce 2s infinite",
            color: "text.secondary",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
              "40%": { transform: "translateY(-10px)" },
              "60%": { transform: "translateY(-5px)" },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
