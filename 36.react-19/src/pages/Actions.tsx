import { Dispatch, SetStateAction, useActionState, useState, useTransition } from "react";
import { updateName } from "@/services/user";
import DemoBox from "@/components/DemoBox";

const Actions = () => {
  return (
    <div>
      <h1>Actions</h1>
      <p>Handle pending and error with useState():</p>
      <DemoBox>
        <UpdateName />
      </DemoBox>

      <p>Handle pending and error with Transition API:</p>
      <DemoBox>
        <UpdateNameWithTransition />
      </DemoBox>

      <p>Handle pending and error with useActionState:</p>
      <DemoBox>
        <UpdateNameWithActionState />
      </DemoBox>
    </div>
  );
};

function UpdateName() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    }

    setError(null);
    alert("Saved successfully!");
  };

  return (
    <div>
      <input className="" value={name} onChange={(event) => setName(event.target.value)} />
      <button className="ml-2" onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Updating..." : "Update"}
      </button>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}

function UpdateNameWithTransition() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }

      alert("Saved successfully!");
    });
  };

  return (
    <div>
      <input className="" value={name} onChange={(event) => setName(event.target.value)} />
      <button className="ml-2" onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Updating..." : "Update"}
      </button>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}
function UpdateNameWithActionState() {
  const [name, setName] = useState("");

  return <ChangeName name={name} setName={setName} />;
}

const ChangeName = ({ name, setName }: { name: string; setName: Dispatch<SetStateAction<string>> }) => {
  const [error, submitAction, pending] = useActionState(async (prevState: unknown, formData: FormData) => {
    const error = await updateName(formData.get("name") as string);

    if (error) return error;

    alert("Saved successfully!");
    return null;
  }, null);

  return (
    <form action={submitAction}>
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" className="ml-2" disabled={pending}>
        {pending ? "Updating..." : "Update"}
      </button>
      {error && <p className="text-red-400">{error}</p>}
    </form>
  );
};

export default Actions;
