class UserModel {
  constructor(
    public id: number,
    public name: string,
    public image: { uri: string },
  ) {}
}

export { UserModel };
