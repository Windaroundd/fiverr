import React from "react";
import "./CardDescription.scss";

export default function CardDescription() {
  return (
    <div id="cartAbout">
      <header>
        <h2 className="section-title">About This Gig</h2>
      </header>
      <div className="description-wrapper">
        <span style={{ fontSize: 0 }} />
        <div className="description-content" data-impression-collected="true">
          <p>I will do professional video editing and post</p>
          <br />
          <p>
            Please contact me before placing your order. This will help avoid
            cancellations.
          </p>
          <br />
          <p>
            I am a professional video editor. I have been doing professional
            video editing for more than 10 years. Each my order is individual. I
            will take into account all your requirements and wishes.
          </p>
          <br />
          <p>
            Each my client is 100% satisfied. This can be seen in the reviews in
            my profile. Only five stars! How to order?{" "}
          </p>
          <ul>
            <li>✔️ Write a message with your requirements and wishes.</li>
            <li>
              ✔️ Provide footage and as detailed instructions as possible (I
              will help you if necessary)
            </li>
            <li>
              ✔️ After agreeing on all the requirements, I can formulate the
              exact cost of the order.
            </li>
            <li>
              ✔️ If you are satisfied with the price, we will proceed with the
              order. I have a lot of experience editing videos in themes:{" "}
            </li>
            <li>✔️ YouTube Videos </li>
            <li>✔️ Wedding Videos</li>
            <li>✔️ Gaming Montages / Gameplays</li>
            <li>✔️ Game Playthroughs </li>
            <li>✔️ Vlogs</li>
            <li>✔️ Travel Videos </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
