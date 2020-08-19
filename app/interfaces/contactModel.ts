class ContactModel {
  constructor(
    public id: number,
    public name: string,
    public message: string,
    public time: string,
    public messageNo: number,
    public image: { uri: string },
    public online: boolean,
  ) {}
}

export { ContactModel };
