export interface Tech {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
  description: string;
  icon: string; // icons.ts এর key নাম (react, vue, ...)
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
}