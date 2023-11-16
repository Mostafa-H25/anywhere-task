import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// Interfaces
import { Quiz } from "../../../interfaces/Quiz";
import { Announcement } from "../../../interfaces/Announcememtn";

interface GlobalState {
  user: {
    name: string;
    isAuthenticated: boolean;
  };
  announcements: Announcement[];
  quizzes: Quiz[];
  filteredQuizzes: Quiz[];
}

const initialState: GlobalState = {
  user: {
    name: "",
    isAuthenticated: false,
  },
  announcements: [],
  quizzes: [],
  filteredQuizzes: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<boolean>) => {
      state.user.isAuthenticated = action.payload;
    },
    setAnnouncements: (state, action: PayloadAction<Announcement[]>) => {
      state.announcements = action.payload;
    },
    setQuizzes: (state, action: PayloadAction<Quiz[]>) => {
      state.quizzes = action.payload;
    },
    setFilteredQuizzes: (state, action: PayloadAction<Quiz[]>) => {
      state.filteredQuizzes = action.payload;
    },
  },
});

export const {
  authenticate,
  setAnnouncements,
  setQuizzes,
  setFilteredQuizzes,
} = globalSlice.actions;
export default globalSlice.reducer;
