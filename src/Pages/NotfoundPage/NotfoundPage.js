import React from "react";
import bg_notfoundpage from "../../assets/121935-404-not-found.json";
import Lottie from "lottie-react";

export default function NotfoundPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-900">
      <Lottie animationData={bg_notfoundpage} />
    </div>
  );
}
