import { SignupContextProvider } from "@/context";

export default function Layout({ children }) {
  return (
    <>
      <SignupContextProvider>{children}</SignupContextProvider>
    </>
  );
}
