import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
export const quizzes = [
  {
    id: 0,
    icon: <AccessAlarmIcon />,
    title: "Unit 2 Quiz",
    course: "Physics 101",
    topic: "Unit 2: Motion & Forces",
    dueTo: "20 Dec 2022 - 10:00AM",
    command: "Start Quiz",
  },
  {
    id: 1,
    icon: <TaskAltIcon />,
    title: "Unit 2 Assignment",
    course: "English Literature",
    topic: "Unit 4: Hamlet",
    dueTo: "25 Dec 2017 - 09:00AM",
    command: "Solve Assignment",
  },
  {
    id: 2,
    icon: <ListAltIcon />,
    title: "Unit 2 Quiz",
    course: "Physics 101",
    topic: "Unit 1: Electricity",
    dueTo: "1 Nov 2022 - 01:00PM",
    command: "Start Quiz",
  },
];

export const announcements = [
  {
    id: 0,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      department: "Physics 101",
      image: "",
    },
    announcement:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione. Vitae velit, ab neque dolores placeat reprehenderit fugit deserunt voluptatem, ad temporibus aut autem dicta repellat necessitatibus.",
  },
  {
    id: 1,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      department: "Physics 101",
      image: "",
    },
    announcement:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione. Vitae velit, ab neque dolores placeat reprehenderit fugit deserunt voluptatem, ad temporibus aut autem dicta repellat necessitatibus.",
  },
  {
    id: 2,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      department: "Physics 101",
      image: "",
    },
    announcement:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione. Vitae velit, ab neque dolores placeat reprehenderit fugit deserunt voluptatem, ad temporibus aut autem dicta repellat necessitatibus.",
  },
];
export const messages = [
  {
    id: 0,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      image: "",
    },
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione. Vitae velit, ab neque dolores placeat reprehenderit fugit deserunt voluptatem, ad temporibus aut autem dicta repellat necessitatibus.",
  },
  {
    id: 1,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      department: "Physics 101",
      image: "",
    },
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione. Vitae velit, ab neque dolores placeat reprehenderit fugit deserunt voluptatem, ad temporibus aut autem dicta repellat necessitatibus.",
  },
  {
    id: 2,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      department: "Physics 101",
      image: "",
    },
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione. Vitae velit, ab neque dolores placeat reprehenderit fugit deserunt voluptatem, ad temporibus aut autem dicta repellat necessitatibus.",
  },
];

export const notifications = [
  {
    id: 0,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      image: "",
    },
    notification: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 1,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      department: "Physics 101",
      image: "",
    },
    notification: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    user: {
      id: 5,
      title: "Mrs",
      firstName: "Salma",
      lastName: "Ahmed",
      department: "Physics 101",
      image: "",
    },
    notification: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const sqlcode = `
INSERT INTO colige.user(title, first_name, last_name, department, image) VALUES
("mr.", "ahmed", "khaled", "physics", "https://picsum.photos/id/237/200/300" ),
("mrs.", "salma", "yehia", "chemistry", "https://picsum.photos/id/247/200/300" ),
("mr.", "khaled", "waleed", "english", "https://picsum.photos/id/235/200/300" ),
("mr.", "hussien", "ahmed", "math", "https://picsum.photos/id/132/200/300" ) ;

INSERT INTO colige.quizzes(title, course, topic, command, due, created_at, created_by) VALUES
("unit 2 quiz", "physics", "unit 2 motion", "start quiz", "2023-8-23", "2023-8-21", 1),
("unit 1 assignment", "english", "unit 1 poems", "solve assignment", "2023-8-29", "2023-9-1", 3),
("unit 10 assignment", "math", "unit 10 long division", "solve assignment", "2023-9-23", "2023-9-21", 4),
("unit 2 quiz", "chemistry", "unit 2 molecules", "start quiz", "2023-8-26", "2023-8-25", 2)
;

INSERT INTO colige.announcements(announcement, created_at, created_by) VALUES
("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione. Vitae velit, ab neque dolores placeat reprehenderit fugit deserunt voluptatem, ad temporibus aut autem dicta repellat necessitatibus.", "2023-7-30", 1),
("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus.", "2023-7-30", 2),
("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam delectus, ducimus magnam id suscipit expedita ipsum consequatur eligendi atque debitis quisquam enim accusamus nulla consequuntur vero harum voluptas fuga vel at ratione.", "2023-7-30", 4);
`;
