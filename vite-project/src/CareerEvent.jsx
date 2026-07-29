import React, { useState } from "react";
const CareerEvent = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const companyEvents = {
    2: {
      company: "TCS",
      title: "Walk-in Drive",
      location: "Hyderabad",
      time: "10:00 AM",
      role: "Java Developer",
      color: "#2563eb",
    },
    5: {
      company: "Infosys",
      title: "Hiring Event",
      location: "Bangalore",
      time: "09:30 AM",
      role: "System Engineer",
      color: "#0ea5e9",
    },
    8: {
      company: "Accenture",
      title: "Campus Walk-in",
      location: "Hyderabad",
      time: "11:00 AM",
      role: "Associate Software Engineer",
      color: "#9333ea",
    },
    12: {
      company: "Capgemini",
      title: "Recruitment Drive",
      location: "Chennai",
      time: "10:00 AM",
      role: "Software Engineer",
      color: "#059669",
    },
    15: {
      company: "Wipro",
      title: "Walk-in Drive",
      location: "Pune",
      time: "09:00 AM",
      role: "Project Engineer",
      color: "#dc2626",
    },
    18: {
      company: "Cognizant",
      title: "Off Campus",
      location: "Hyderabad",
      time: "10:30 AM",
      role: "Programmer Analyst",
      color: "#ea580c",
    },
    22: {
      company: "Deloitte",
      title: "Hiring Drive",
      location: "Hyderabad",
      time: "01:00 PM",
      role: "Analyst",
      color: "#0891b2",
    },
    26: {
      company: "Tech Mahindra",
      title: "Mega Walk-in",
      location: "Hyderabad",
      time: "10:00 AM",
      role: "Support Engineer",
      color: "#7c3aed",
    },
    29: {
      company: "HCLTech",
      title: "Graduate Hiring",
      location: "Noida",
      time: "09:30 AM",
      role: "Graduate Engineer Trainee",
      color: "#16a34a",
    },
  };

  const [selectedEvent, setSelectedEvent] = useState(null);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const monthName = new Date(
    currentYear,
    currentMonth
  ).toLocaleString("default", { month: "long" });

  const calendar = [];

  for (let i = 0; i < firstDay; i++) {
    calendar.push(<div key={"blank" + i}></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const event = companyEvents[day];

    calendar.push(
      <div
        key={day}
        onClick={() => setSelectedEvent(event || null)}
        style={{
          height: "90px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "8px",
          cursor: event ? "pointer" : "default",
          background: event ? event.color : "#fff",
          color: event ? "#fff" : "#333",
          transition: "0.3s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        }}
      >
        <strong>{day}</strong>

        {event && (
          <div
            style={{
              fontSize: "11px",
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {event.company}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "95%",
        maxWidth: "1300px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff7a00",
          marginBottom: "30px",
        }}
      >
        Career Event Calendar
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
        }}
      >
        {/* Calendar */}

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {monthName} {currentYear}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gap: "10px",
              marginBottom: "10px",
              fontWeight: "bold",
              textAlign: "center",
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gap: "10px",
            }}
          >
            {calendar}
          </div>
        </div>

        {/* Event Details */}

        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#ff7a00" }}>Event Details</h2>

          {selectedEvent ? (
            <>
              <h3>{selectedEvent.company}</h3>

              <p>
                <strong>Event :</strong> {selectedEvent.title}
              </p>

              <p>
                <strong>Role :</strong> {selectedEvent.role}
              </p>

              <p>
                <strong>Location :</strong> {selectedEvent.location}
              </p>

              <p>
                <strong>Time :</strong> {selectedEvent.time}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  background: "#ff7a00",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Apply Now
              </button>
            </>
          ) : (
            <div
              style={{
                marginTop: "30px",
                color: "#666",
                textAlign: "center",
              }}
            >
              📅 Click on a highlighted date to view the company walk-in details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerEvent;