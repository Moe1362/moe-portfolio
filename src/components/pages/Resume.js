import React from "react";
import resume from "../../assets/MoeResume.pdf";
import downloadImg from "../../assets/download.png";
const styles = {
  h1: {
    fontSize: "40px",
    margin: "20px auto", // Center horizontally
    color: "rgb(66, 4, 126)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  resumepage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
  },
  button: {
    fontSize: "40px",
    margin: "20px auto", // Center horizontally
    background: "#E2D58B",
    color: "#664E4C",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
  },
  skillList: {
    margin: "0 auto", // Center horizontally
  },
  skillListTitle: {
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
    color: "#664E4C",
    margin: "10px",
  },
  skillListItems: {
    listStyleType: "none",
    margin: "10px",
  },
  skillListItem: {
    fontFamily: "Verdana, sans-serif",
    fontSize: "18px",
    color: "#664E4C",
    marginBottom: "10px",
  },
};

const handleDownload = () => {
  // Replace 'path/to/pdf/file.pdf' with the actual path to your PDF file
  const fileUrl = resume;

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = fileUrl;
  link.target = "_blank"; // Open the PDF file in a new tab
  link.download = "Mohammad Abbasi.pdf"; // Set the default file name

  // Trigger the download by programmatically clicking the link
  link.click();
};

export default function Resume() {
  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "MySql",
    "MongoDB",
    "Apollo GraphQL",
  ];
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Redux"];
  return (
    <div style={styles.resumepage}>
      <h1 className="text-center" style={styles.h1}>
        Resume
      </h1>
      <button style={styles.button} onClick={handleDownload}>
        Download Resume{" "}
        <span>
          {" "}
          <img src={downloadImg} />
        </span>
      </button>
      <div style={styles.skillList}>
        <div>
          <h2 style={styles.skillListTitle}>Back-end Skills:</h2>
          <ul style={styles.skillListItems}>
            {backendSkills.map((skill, index) => (
              <li key={index} style={styles.skillListItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 style={styles.skillListTitle}>Front-end Skills:</h2>
          <ul style={styles.skillListItems}>
            {frontendSkills.map((skill, index) => (
              <li key={index} style={styles.skillListItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
