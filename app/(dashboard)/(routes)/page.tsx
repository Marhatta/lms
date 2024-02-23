import { UserButton } from "@clerk/nextjs";

const App = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default App;
