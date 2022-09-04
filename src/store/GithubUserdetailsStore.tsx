import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export interface IUserDetials{
  id:number,
  name:string,
  url:string,
  location:string,
  login:string
}
export class GithubUserdetailsStore{
    userDetails:IUserDetials = {} as IUserDetials;
    rootStore:IRootStore
    constructor(rootStore:IRootStore){
        makeObservable(this,{
          userDetails:observable,
          fetchUserDetails:action,
          getUserDetails:computed
        })
        this.rootStore = rootStore;
    }
    async fetchUserDetails(userName:string){
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      this.userDetails = response?.data;
    }
    get getUserDetails(){
      return this.userDetails;
    }
}