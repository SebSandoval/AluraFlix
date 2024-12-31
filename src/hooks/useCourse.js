import { useEffect, useState } from "react";
import { coursesInitial } from "../db/db";

const useCourses = () => {
  const initialCourses = () => {
    const coursesDb = coursesInitial;
    const localStorageCourses = localStorage.getItem("courses");
    if (localStorageCourses) {
      return JSON.parse(localStorageCourses);
    } else {
      localStorage.setItem("courses", JSON.stringify(coursesDb));
      return coursesDb;
    }
  };

  const [courses, setCourses] = useState(initialCourses);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const groupByCategory = (courses) => {
    return courses.reduce((acc, course) => {
      if (!acc[course.category]) {
        acc[course.category] = [];
      }
      acc[course.category].push(course);
      return acc;
    }, {});
  };

  const groupedCourses = groupByCategory(courses);

  const addCourse = (course) => {
    const lastId = courses.length > 0 ? courses[courses.length - 1].id : 0;
    setCourses([...courses, (course = { ...course, id: lastId + 1 })]);
    localStorage.setItem("courses", JSON.stringify(courses));
  };

  const deleteCourse = (id) => {
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);
    localStorage.setItem("courses", JSON.stringify(courses));
  };

  const updateCourse = (course) => {
    const index = courses.findIndex((c) => c.id === course.id);
    const newCourses = [...courses];
    newCourses[index] = course;
    setCourses(newCourses);
    localStorage.setItem("courses", JSON.stringify(courses));
  };

  return { courses, setCourses, groupedCourses, addCourse, deleteCourse, updateCourse };
};

export { useCourses };
