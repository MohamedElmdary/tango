class CallModal {
  constructor(
    public id: number,
    public name: string,
    public image: { uri: string },
    public type: "Voice" | "Video",
    public byYou: boolean,
    public fromDate: string,
  ) {}
}

export { CallModal };
