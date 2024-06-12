import React from "react";
import "./RecentItems.css";
export default function RecentItems() {
  return (
    <div className="recentitems-container">
      <h1 className="recentitems-header">Recent</h1>
      <label class="dropdown">
        <div class="dd-button">Filter by Date</div>

        <input type="checkbox" class="dd-input" id="test" />

        <ul class="dd-menu">
          <li>1 week ago</li>
          <li>1 month ago</li>
          <li>Earlier</li>
          <li class="divider"></li>
         
        </ul>
      </label>
    </div>
  );
}
