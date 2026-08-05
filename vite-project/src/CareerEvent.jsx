import React, { useState, useEffect } from "react";

const CareerEvent = () => {
  // Navigation state (0 = current month, -1 = prev month, 1 = next month, etc.)
  const [monthOffset, setMonthOffset] = useState(0);

  // Derive target month and year relative to today
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const currentMonth = targetDate.getMonth();
  const currentYear = targetDate.getFullYear();

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 768;

  // Key format: "YYYY-M-D" (e.g. "2026-8-15" for August 15, 2026)
  const companyEvents = {
    // Current Month Events
    [`${today.getFullYear()}-${today.getMonth() + 1}-2`]: { company: "TCS", title: "Walk-in Drive", location: "Hyderabad", time: "10:00 AM", role: "Java Developer", color: "#2563eb" },
    [`${today.getFullYear()}-${today.getMonth() + 1}-5`]: { company: "Infosys", title: "Hiring Event", location: "Bangalore", time: "09:30 AM", role: "System Engineer", color: "#0ea5e9" },
    [`${today.getFullYear()}-${today.getMonth() + 1}-12`]: { company: "Capgemini", title: "Recruitment Drive", location: "Chennai", time: "10:00 AM", role: "Software Engineer", color: "#059669" },
    [`${today.getFullYear()}-${today.getMonth() + 1}-18`]: { company: "Cognizant", title: "Off Campus", location: "Hyderabad", time: "10:30 AM", role: "Programmer Analyst", color: "#ea580c" },
    [`${today.getFullYear()}-${today.getMonth() + 1}-26`]: { company: "Tech Mahindra", title: "Mega Walk-in", location: "Hyderabad", time: "10:00 AM", role: "Support Engineer", color: "#7c3aed" },

    // Previous Month Events
    [`${new Date(today.getFullYear(), today.getMonth() - 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() - 1, 1).getMonth() + 1}-4`]: { company: "Amazon", title: "SDE Drive", location: "Hyderabad", time: "09:00 AM", role: "SDE I", color: "#ff9900" },
    [`${new Date(today.getFullYear(), today.getMonth() - 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() - 1, 1).getMonth() + 1}-10`]: { company: "Microsoft", title: "Campus Hiring", location: "Noida", time: "10:00 AM", role: "Cloud Engineer", color: "#00a4ef" },
    [`${new Date(today.getFullYear(), today.getMonth() - 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() - 1, 1).getMonth() + 1}-15`]: { company: "Wipro", title: "Walk-in Drive", location: "Pune", time: "09:00 AM", role: "Project Engineer", color: "#dc2626" },
    [`${new Date(today.getFullYear(), today.getMonth() - 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() - 1, 1).getMonth() + 1}-22`]: { company: "Deloitte", title: "Hiring Drive", location: "Hyderabad", time: "01:00 PM", role: "Analyst", color: "#0891b2" },

    // Next Month Events
    [`${new Date(today.getFullYear(), today.getMonth() + 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() + 1, 1).getMonth() + 1}-3`]: { company: "Google", title: "Step Intern / FTE", location: "Bangalore", time: "10:00 AM", role: "Software Engineer", color: "#ea4335" },
    [`${new Date(today.getFullYear(), today.getMonth() + 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() + 1, 1).getMonth() + 1}-9`]: { company: "Accenture", title: "Campus Walk-in", location: "Hyderabad", time: "11:00 AM", role: "Associate Software Engineer", color: "#9333ea" },
    [`${new Date(today.getFullYear(), today.getMonth() + 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() + 1, 1).getMonth() + 1}-17`]: { company: "Oracle", title: "Direct Interview", location: "Hyderabad", time: "10:00 AM", role: "Database Engineer", color: "#c74634" },
    [`${new Date(today.getFullYear(), today.getMonth() + 1, 1).getFullYear()}-${new Date(today.getFullYear(), today.getMonth() + 1, 1).getMonth() + 1}-25`]: { company: "HCLTech", title: "Graduate Hiring", location: "Noida", time: "09:30 AM", role: "Graduate Engineer Trainee", color: "#16a34a" },
  };

  const [selectedEvent, setSelectedEvent] = useState(null);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });

  const handleMonthChange = (direction) => {
    setMonthOffset((prev) => prev + direction);
    setSelectedEvent(null); // Clear active selection when changing months
  };

  const calendar = [];

  // Blank slots before Day 1
  for (let i = 0; i < firstDay; i++) {
    calendar.push(
      <div key={"blank" + i} style={{ aspectRatio: "1", width: "100%" }}></div>
    );
  }

  // Active days in month
  for (let day = 1; day <= daysInMonth; day++) {
    const eventKey = `${currentYear}-${currentMonth + 1}-${day}`;
    const event = companyEvents[eventKey];

    calendar.push(
      <div
        key={day}
        onClick={() => setSelectedEvent(event || null)}
        style={{
          aspectRatio: "1",
          width: "100%",
          boxSizing: "border-box",
          border: "1px solid #ddd",
          borderRadius: isMobile ? "6px" : "12px",
          padding: isMobile ? "3px" : "8px",
          cursor: event ? "pointer" : "default",
          background: event ? event.color : "#fff",
          color: event ? "#fff" : "#333",
          transition: "0.2s ease-in-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}
      >
        <strong style={{ fontSize: isMobile ? "10px" : "14px", lineHeight: "1" }}>
          {day}
        </strong>

        {event && (
          <div
            style={{
              fontSize: isMobile ? "8px" : "11px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.2",
            }}
            title={event.company}
          >
            {event.company}
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ width: "95%", maxWidth: "1300px", margin: isMobile ? "15px auto" : "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#ff7a00",
          marginBottom: isMobile ? "15px" : "30px",
          fontSize: isMobile ? "20px" : "32px",
        }}
      >
        Career Event Calendar
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: isMobile ? "10px" : "25px",
          alignItems: "start",
        }}
      >
        {/* Calendar Card */}
        <div
          style={{
            background: "#fff",
            padding: isMobile ? "10px" : "20px",
            borderRadius: isMobile ? "10px" : "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          {/* Calendar Header with Nav Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: isMobile ? "10px" : "20px",
            }}
          >
            <button
              onClick={() => handleMonthChange(-1)}
              style={{
                background: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: isMobile ? "4px 8px" : "8px 14px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: isMobile ? "11px" : "14px",
                color: "#374151",
              }}
            >
              &larr; {isMobile ? "Prev" : "Previous"}
            </button>

            <h2
              style={{
                margin: 0,
                fontSize: isMobile ? "13px" : "20px",
                textAlign: "center",
              }}
            >
              {monthName} {currentYear}
            </h2>

            <button
              onClick={() => handleMonthChange(1)}
              style={{
                background: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: isMobile ? "4px 8px" : "8px 14px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: isMobile ? "11px" : "14px",
                color: "#374151",
              }}
            >
              {isMobile ? "Next" : "Next"} &rarr;
            </button>
          </div>

          {/* Weekday headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
              gap: isMobile ? "3px" : "8px",
              marginBottom: "8px",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: isMobile ? "9px" : "13px",
              color: "#555",
            }}
          >
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          {/* Calendar Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
              gap: isMobile ? "3px" : "8px",
            }}
          >
            {calendar}
          </div>
        </div>

        {/* Event Details Panel */}
        <div
          style={{
            background: "#fff",
            borderRadius: isMobile ? "10px" : "15px",
            padding: isMobile ? "12px" : "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#ff7a00", marginTop: 0, fontSize: isMobile ? "14px" : "22px" }}>
            Event Details
          </h2>

          {selectedEvent ? (
            <div style={{ fontSize: isMobile ? "11px" : "14px", lineHeight: "1.5" }}>
              <h3 style={{ margin: "5px 0 10px 0", fontSize: isMobile ? "13px" : "18px" }}>
                {selectedEvent.company}
              </h3>
              <p style={{ margin: "4px 0" }}>
                <strong>Event:</strong> {selectedEvent.title}
              </p>
              <p style={{ margin: "4px 0" }}>
                <strong>Role:</strong> {selectedEvent.role}
              </p>
              <p style={{ margin: "4px 0" }}>
                <strong>Location:</strong> {selectedEvent.location}
              </p>
              <p style={{ margin: "4px 0" }}>
                <strong>Time:</strong> {selectedEvent.time}
              </p>
              <button
                style={{
                  marginTop: "12px",
                  width: "100%",
                  background: "#ff7a00",
                  color: "#fff",
                  border: "none",
                  padding: isMobile ? "8px" : "12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: isMobile ? "11px" : "14px",
                }}
              >
                Apply Now
              </button>
            </div>
          ) : (
            <div
              style={{
                marginTop: isMobile ? "10px" : "20px",
                color: "#666",
                textAlign: "center",
                fontSize: isMobile ? "10px" : "14px",
              }}
            >
              📅 Click on a highlighted date to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerEvent;