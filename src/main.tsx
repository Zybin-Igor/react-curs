// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Test from "./components/Test/Test";

import App from "./components/App/App";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <App /> // ✅ Правильно
);

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// const jsxMarkup = (
//   <div>
//     <img src="./images/Jackie_Chan.png" alt="jackie" width={320} />
//     <p>
//       This is <strong>JSX (JavaScript XML)</strong>- and yes, you really get
//       used to it
//     </p>
//   </div>
// );

// const getMyVar = () => 10;
// const Component = () => {
//   return (
//     <div>
//       <img src="../public/images/Jackie_Chan.png" alt="jackie" width={320} />
//       {/* ... */}
//       <p>HTML in JS? What kind of black magic is this?</p>
//       <p>
//         This is <strong>JSX (JavaScript XML)</strong>- and yes, you really get
//         used to it
//       </p>
//       <p>{getMyVar()}</p>
//     </div>
//   );
// };

// createRoot(document.getElementById("root") as HTMLDivElement).render(jsxMarkup);
// createRoot(document.getElementById("root") as HTMLDivElement).render(
//   Component()
// );
// createRoot(document.getElementById("root") as HTMLDivElement).render(
//   <Component /> // ✅ Правильно
// );

// createRoot(document.getElementById("root") as HTMLDivElement).render(
//   <Test /> // ✅ Правильно
// );
