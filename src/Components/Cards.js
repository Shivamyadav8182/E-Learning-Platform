import React from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = ({ courses, category }) => {

  const getCourses = () => {

    if (category === "All") {

      let allCourses = [];

      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });

      return allCourses;
    }

    return courses[category] || [];
  };

  return (
    <div className="cards-container">

      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
        />
      ))}

    </div>
  );
};

export default Cards;