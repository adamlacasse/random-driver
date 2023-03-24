import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../api/firebase";

export default function AppHeader() {
    const [user, loading] = useAuthState(auth);
    console.log({ loading, user });
  return (
    <div>AppHeader</div>
  )
};
