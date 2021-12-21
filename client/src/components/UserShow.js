import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "semantic-ui-react";

const UserShow = () => {

  const params = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        let response = await axios.get(`/api/users/${params.id}`);
        setUser(response.data);
      } catch (err) {
        alert("error occurred getting user");
      }
    };

    getUser();
  },[])

return (
  <div>
<p>User Show Here</p>
<p>Email: {user.email}</p>
<p>Password: ******* </p>
<Link to={`/users/${params.id}/posts`}>Posts</Link>
</div>
);
};

export default UserShow;