export class MessageModel {
  constructor(public type: string, public code: number, public message?: string, public detailedMessage?: string) { }
}
