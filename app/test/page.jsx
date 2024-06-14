"use client";

import { useFormState } from "react-dom";
import { handleSubmit } from "@/lib/actions";
import SubmitButton from "./submit-button";
import TestAlert from "./alert";
import { useEffect, useState } from "react";

export default function Test() {
  const [formState, formAction] = useFormState(handleSubmit, {
    message: null,
  });

  const [isPending, setIsPending] = useState(false);

  return (
    <div>
      <form action={formAction}>
        <input type="text" name="test"></input>

        <SubmitButton />
      </form>

      {isPending ? null : (
        <TestAlert message={formState.message} setIsPending={setIsPending} />
      )}
    </div>
  );
}

// import { Suspense } from "react";

// function LoadedComponent() {
//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content text-center">
//         <div className="max-w-md">
//           <h1 className="text-5xl font-bold">Hello there</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//           <button className="btn btn-primary">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function FallbackComponent() {
//   return (
//     <div className="w-dvw h-dvh flex justify-center items-center">
//       <span className="loading loading-spinner loading-lg"></span>
//     </div>
//   );
// }

// async function AsyncComponent() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return <LoadedComponent />;
// }

// export default function Test() {
//   return (
//     <div>
//       <h1>Test Page</h1>
//       <Suspense fallback={<FallbackComponent />}>
//         <AsyncComponent />
//       </Suspense>
//     </div>
//   );
// }
