export class Userquote {
    public upvotes:number
    public downvotes:number
    public Date:Date
    constructor(public name:string, public author:string, public quote:string){
      this.upvotes=0
      this.downvotes=0
      this.Date= new Date()
      }
}
