import Form from "@/components/form/form";
import { Button } from "@/components/ui/button";

const UserPage = ({ params: { userId } }: { params: { userId: string } }) => {
  console.log("userId", userId);
  if (typeof userId !== "string") {
  }
  return (
    <div>
      <h1>User {userId}</h1>
      <Button variant="destructive">Click me</Button>
      <Form name="aaa" email="a@gmail.com" password="123" />
    </div>
  );
};

export default UserPage;
