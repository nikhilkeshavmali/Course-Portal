const express = require("express");
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");

// Static files (if any)
app.use(express.static("public"));

// Given data
const courses = [
  { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
  { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
  { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 },
];

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Course Portal",
    courses: courses,
    totalCourses: courses.length,
  });
});

app.get("/courses", (req, res) => {
  res.render("courses", {
    title: "All Courses",
    courses: courses,
  });
});

app.get("/course/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);
  if (course) {
    res.render("course-details", {
      title: course.name,
      course: course,
    });
  } else {
    res.status(404).send("Course not found");
  }
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
