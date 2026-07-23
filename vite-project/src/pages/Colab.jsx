import React from "react";

const logos = [
  "https://picsum.photos/id/1011/200/120",
  "https://picsum.photos/id/1025/200/120",
  "https://picsum.photos/id/1035/200/120",
  "https://picsum.photos/id/1043/200/120",
  "https://picsum.photos/id/1050/200/120",
  "https://picsum.photos/id/1069/200/120",
];

const Colab = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "70px 0",
        background: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#222",
          marginBottom: "10px",
        }}
      >
        Our Collaborations
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Trusted by leading colleges and universities.
      </p>

      <div
        style={{
          display: "flex",
          gap: "70px",
          width: "max-content",
          animation: "scroll 20s linear infinite",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              height: "140px",
              background: "#fff",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={logo}
              alt="College"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Colab;