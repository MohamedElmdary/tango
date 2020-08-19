class StoryModel {
  constructor(
    public id: number,
    public image: { uri: string },
    public name: string,
    public fromTime: string,
  ) {}
}

export { StoryModel };
