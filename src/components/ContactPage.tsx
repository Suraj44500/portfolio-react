import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Email,
  LinkedIn,
  WhatsApp,
  LocationOn,
  Phone,
  Description,
  Instagram,
} from "@mui/icons-material";

const InstagramIconGradient: React.FC = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <Box
      sx={{
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background:
          "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
        p: 1,
      }}
    >
      <Instagram sx={{ color: "white", fontSize: 28 }} />
    </Box>
  );
};
const ContactPage: React.FC = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated particles
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
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
            sx={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.5)"
                  : "rgba(99, 102, 241, 0.4)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
          />
        );
      })}
    </>
  );

  // Animated floating shapes
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
                  : "rgba(99, 102, 241, 0.08)",
              zIndex: 0,
            }}
          />
        );
      })}
    </>
  );

  const contactMethods = [
    {
      icon: <Email fontSize="large" />,
      label: "Email",
      href: "mailto:singhsuraj44500@gmail.com",
      text: "singhsuraj44500@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <LinkedIn fontSize="large" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suraj-singh-a735b8377",
      text: "linkedin.com/in/suraj-singh",
      color: "#0A66C2",
    },
    {
      icon: <WhatsApp fontSize="large" />,
      label: "WhatsApp",
      href: "https://wa.me/919625553534",
      text: "+91 96255 53534",
      color: "#25D366",
    },
    {
      icon: <InstagramIconGradient />,
      label: "Instagram",
      href: "https://www.instagram.com/surajrajput_018?igsh=OWMycGM4ZXp2aGFk",
      text: "@surajrajput_018",
      color: "",
    },
  ];

  const personalInfo = [
    {
      icon: <Phone />,
      label: "Phone",
      text: "+91 9625553534",
    },
    {
      icon: <LocationOn />,
      label: "Location",
      text: "Faridabad, Haryana, India",
    },
    {
      icon: <Description />,
      label: "Freelance",
      text: "Available",
      status: "success",
    },
  ];

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
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
            Get In Touch
          </Typography>

          <Typography
            component={motion.p}
            variant="h6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            sx={{
              mb: 1,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            I'm always open to discussing new opportunities, collaborations, or
            just a friendly chat.
          </Typography>

          <Typography
            component={motion.p}
            variant="body1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Feel free to reach out through any of the platforms below
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 65%" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Contact Methods
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.label}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.7 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ flex: "1 1 48%" }} // Adjust width for two items per row
                >
                  <Card
                    sx={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 3,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255,255,255,0.12)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Box
                          sx={{
                            background: method.color,
                            borderRadius: "50%",
                            width: 50,
                            height: 50,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          {React.cloneElement(method.icon, {
                            sx: { color: "white" },
                          })}
                        </Box>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          color="text.secondary"
                        >
                          {method.label}
                        </Typography>
                      </Box>
                      <Button
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                        variant="outlined"
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          color: "text.secondary",
                          borderColor: "text.secondary",
                          background: "rgba(255,255,255,0.05)",
                          "&:hover": {
                            borderColor: "rgba(255,255,255,0.5)",
                            background: "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        {method.text}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 30%" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Personal Information
            </Typography>

            <Card
              sx={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                maxWidth: { xs: "100%", sm: "400px" },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {personalInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.7 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: i === personalInfo.length - 1 ? 0 : 3,
                      }}
                    >
                      <Box
                        sx={{
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: "50%",
                          width: 40,
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2,
                        }}
                      >
                        {React.cloneElement(info.icon, {
                          sx: { color: "text.secondary" },
                        })}
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {info.label}
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {info.text}
                          {info.status && (
                            <Chip
                              label={info.text}
                              size="small"
                              color="success"
                              sx={{ ml: 1, height: 20, fontSize: "0.7rem" }}
                            />
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <Typography
                variant="body2"
                sx={{
                  mt: 3,
                  textAlign: "center",
                  opacity: 0.7,
                }}
              >
                Typically reply within 2-3 hours
              </Typography>
            </motion.div>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
