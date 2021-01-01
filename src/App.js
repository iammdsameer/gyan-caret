import React from "react";
import "antd/dist/antd.less";
import "./styles/App.less";

export default function App() {
  return (
    <div className="App">
      {/* <script src="https://cdnapisec.kaltura.com/p/3150723/sp/315072300/embedIframeJs/uiconf_id/46922993/partner_id/3150723"></script> */}
      <div id="kaltura_player_1609524333"></div>
      <script>
        {window.kWidget.embed({
          targetId: "kaltura_player_1609524333",
          wid: "_3150723",
          uiconf_id: 46922993,
          flashvars: {},
          cache_st: 1609524333,
          entry_id: "1_4rr82e1h"
        })}
      </script>
    </div>
  );
}
