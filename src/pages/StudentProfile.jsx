import React from "react";

const StudentProfile = () => {
  const studentID = window.location.pathname.split("/")[2];

  return (
    <div>
      StudentProfile
      <br />
      {studentID === "1"
        ? "Diyorbek"
        : studentID === "2"
        ? "Abbosbek"
        : studentID === "3"
        ? "Dilshodbek"
        : "Bunday student yo'q!"}
    </div>
  );
};

// Conditional rendering

export default StudentProfile;
