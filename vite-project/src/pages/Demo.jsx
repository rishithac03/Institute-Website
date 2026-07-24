import React, { useRef } from "react";

const DemoPage = () => {
  const videoRef = useRef(null);

  const handleStart = () => {
    videoRef.current.play();
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 20px 50px rgba(0,0,0,.4)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            marginBottom: "10px",
            fontSize: "40px",
          }}
        >
          OfferEra Demo Session
        </h1>

        <p
          style={{
            color: "#d1d5db",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          Click Start to watch the demo and Stop to end it.
        </p>

        <video
          ref={videoRef}
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "4px solid #ff7a00",
            boxShadow: "0 10px 25px rgba(255,122,0,.4)",
          }}
        >
          <source
            src="https://www.pexels.com/download/video/6929050/"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleStart}
            style={{
              padding: "15px 35px",
              background: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            ▶ Start Demo
          </button>

          <button
            onClick={handleStop}
            style={{
              padding: "15px 35px",
              background: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            ⏹ Stop Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;