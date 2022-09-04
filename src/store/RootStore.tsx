import { CountStore } from "./CountStore";
import { GithubUserdetailsStore } from "./GithubUserdetailsStore";

export interface IRootStore{
    countStore:CountStore;
    githubUserDetails:GithubUserdetailsStore;
}

export class RootStore implements IRootStore{
    countStore:CountStore;
    githubUserDetails:GithubUserdetailsStore;

    constructor(){
        this.countStore= new CountStore(this);
        this.githubUserDetails = new GithubUserdetailsStore(this);
    }

}