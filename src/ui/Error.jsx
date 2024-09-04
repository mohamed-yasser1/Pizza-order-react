import LinkButton from "./LinkButton";

function NotFound({ msg = "" }) {
  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-center space-y-2 px-3 py-8">
      <h1 className="text-red-500">Something went wrong 😢</h1>
      <p className="text-red-500">{msg}</p>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
    </div>
  );
}

export default NotFound;
