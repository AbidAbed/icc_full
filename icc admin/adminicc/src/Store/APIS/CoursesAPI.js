import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const CoursesAPI = createApi({
  reducerPath: "Courses",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints(builder) {
    return {
      getCourses: builder.query({
        query: () => {
          return {
            url: "/courses",
            method: "GET",
          };
        },
      }),
      postCourse: builder.mutation({
        query: (data) => {
          return {
            url: "/courses",
            method: "POST",
            credentials: "include",
            body: { ...data },
          };
        },
      }),
      deleteCourse: builder.mutation({
        query: (data) => {
          return {
            url: "/courses",
            method: "DELETE",
            credentials: "include",
            body: { id: data },
          };
        },
      }),
      getStudentRegCourses: builder.query({
        query: (data) => {
          console.log(data);
          return {
            url: "/regcourses",
            method: "GET",
            credentials: "include",
            params: { student_id: data },
          };
        },
      }),
      putCourses: builder.mutation({
        query: (data) => {
          return {
            url: "/courses",
            method: "PUT",
            credentials: "include",
            body: { ...data },
          };
        },
      }),
      deleteDropStudentCourse: builder.mutation({
        query: (data) => {
          return {
            url: "/course",
            method: "DELETE",
            credentials: "include",
            body: { ...data },
          };
        },
      }),
      postStudentCourse: builder.mutation({
        query: (data) => {
          return {
            url: "/course",
            method: "POST",
            credentials: "include",
            body: { ...data },
          };
        },
      }),
    };
  },
});
export { CoursesAPI };
export const {
  useGetCoursesQuery,
  usePostCourseMutation,
  useDeleteCourseMutation,
  useGetStudentRegCoursesQuery,
  usePutCoursesMutation,
  usePostStudentCourseMutation,
  useDeleteDropStudentCourseMutation,
} = CoursesAPI;
