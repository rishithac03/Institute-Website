import React from "react";

const logos = [
  "https://th.bing.com/th/id/OIP.UnMREtERoqH4n6X-2wtxXQHaEK?w=302&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "https://www.bing.com/th/id/OSK.ovBxK2YaNLBPQHStIxz38EadlYG5zAps1Im1lfcgV2k?w=224&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  "data:image/webp;base64,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",
  "https://tse3.mm.bing.net/th/id/OIP.7gep0yHfFUwE_wiQABzbYAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  "data:image/webp;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56aKVJstF19TJXLKV14OXWMdJYJkT9KB29Pz4ZY0gQw&s=10",
];

const Colab = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px 0",
        background: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
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
          marginBottom: "30px",
          fontSize: "18px",
        }}
      >
        Trusted by leading colleges and universities.
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
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