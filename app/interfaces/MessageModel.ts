export type MessageModel =
  | {
      id: number;
      me: boolean;
      type: "text" | "voice";
      message: string;
      time: string;
    }
  | {
      id: number;
      me: boolean;
      type: "image";
      message: string[];
      time: string;
    };
