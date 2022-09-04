import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useStore } from "../Hooks/useStore";

export const GithubUserdetails = observer(()=>{
    const{ rootStore :{githubUserDetails},}=useStore();
    const [text,setText] = useState('');
    const onClickButton = (e: { preventDefault: () => void; }) =>{
        githubUserDetails.fetchUserDetails(text);
        e.preventDefault();

    }
    console.log(githubUserDetails)
    console.log(githubUserDetails.getUserDetails?.id)
    return(
        <div>
            <div>
                User name:{githubUserDetails.getUserDetails?.login}
                Location :{githubUserDetails.getUserDetails?.location}
            </div>
        <Form>
      <Form.Group className="mb-3" controlId="githubUser">
        <Form.Label>Search Github User</Form.Label>
        <Form.Control value={text} onChange = {(event)=>setText(event.target.value)} type="text" placeholder="enter githubUser name" />
      </Form.Group>
      <Button onClick={onClickButton} variant="primary" type="submit">
        Search User
      </Button>
    </Form>
    </div>
    )
})

