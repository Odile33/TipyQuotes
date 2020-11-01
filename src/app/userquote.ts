export class Userquote {
    public upvotes:number
    public downvotes:number
    public Date:Date
    constructor(public username:string,  public quote:string, public author:string){
      this.upvotes=0
      this.downvotes=0
      this.Date= new Date()
      }
}
