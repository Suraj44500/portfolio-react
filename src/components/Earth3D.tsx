import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import type { GlobeMethods } from "react-globe.gl";

const Earth3D = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const margin = 20;
  const isMobile = windowSize.width < 768;

  const cities = [
    {
      name: "Faridabad, Encrobytes",
      lat: 28.4089,
      lng: 77.3178,
      color: "#ffffff",
    },
    {
      name: "Bangalore, People Maketh",
      lat: 12.9716,
      lng: 77.5946,
      color: "#ffffff",
    },
    { name: "Dubai, Evtaar", lat: 25.2048, lng: 55.2708, color: "#ffffff" },
  ];

  const arcsData = [
    {
      startLat: cities[0].lat,
      startLng: cities[0].lng,
      endLat: cities[1].lat,
      endLng: cities[1].lng,
      color: ["#00bfff", "#00bfff"],
    },
    {
      startLat: cities[1].lat,
      startLng: cities[1].lng,
      endLat: cities[2].lat,
      endLng: cities[2].lng,
      color: ["#00bfff", "#00bfff"],
    },
  ];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;

      // LOWER altitude to make globe appear bigger
      const altitude = isMobile ? 1.5 : 1.7;
      globeEl.current.pointOfView({ lat: 20, lng: 70, altitude }, 1500);
    }
  }, [isMobile]);

  const globeWidth = windowSize.width - margin * 2;
  const globeHeight = isMobile
    ? globeWidth
    : Math.min(windowSize.height - margin * 2, 700); // bigger height

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: `${margin}px`,
        paddingRight: `${margin}px`,
        boxSizing: "border-box",
      }}
    >
      <Globe
        ref={globeEl}
        width={globeWidth}
        height={globeHeight}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="rgba(255,255,255,0.15)"
        atmosphereAltitude={0.07}
        pointsData={cities}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius={isMobile ? 0.5 : 0.6} // slightly bigger points
        pointAltitude={0.03}
        labelsData={cities}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={isMobile ? 1.5 : 1.8}
        labelDotRadius={isMobile ? 0.2 : 0.25}
        labelColor={() => "rgba(255,255,255,0.95)"}
        labelResolution={2}
        labelAltitude={0.035}
        // labelStrokeColor="rgba(0,0,0,0.6)"
        // labelStrokeWidth={0.3}
        arcsData={arcsData}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcStroke={isMobile ? 1.2 : 1.5}
        arcDashLength={0.3}
        arcDashGap={0.1}
        arcDashAnimateTime={2500}
        arcAltitude={0.035}
        enablePointerInteraction={true}
      />
    </div>
  );
};

export default Earth3D;
