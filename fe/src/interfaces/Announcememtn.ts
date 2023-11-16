export interface Announcement {
  id: number;
  createdBy: {
    title: string;
    firstName: string;
    lastName: string;
    department: string;
    image: string;
  };
  announcement: string;
}
