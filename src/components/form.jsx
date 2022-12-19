import Input from "../components/input";
import { useState } from "react";
import Button from "../components/button";

function Form() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  return (
    <div>
      <form action="" method="post">
        <Input placeholder="email" name="email" type="text" />
        <Input placeholder="Password" name="password" type="password" />
        {!isUserRegistered && (
          <Input
            placeholder="Confirm Password"
            name="password"
            type="password"
          />
        )}
        <Button className="login-button" type="submit">
          {!isUserRegistered ? "Register" : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default Form;
