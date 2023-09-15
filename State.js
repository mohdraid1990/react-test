
import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: any;
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(URL);
      const users = await response.json();
      setUser(users[Math.floor(Math.random() * users.length)]);
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <h1>user </h1>
      {user && (
        <ul>
          <li>name: {user.name}</li>
          <li>email: {user.email}</li>
          <li>number: {user.phone}</li>
          <li>website: {user.website}</li>
          <li>company: {user.company.name}</li>
        </ul>
      )}
    </div>
  );
};

export default App;
}



            
                 

       
                    


