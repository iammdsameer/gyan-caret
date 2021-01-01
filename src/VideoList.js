import React from "react";
import { List } from "antd";
import data from "./utils/data";

const VideoList = () => {
  const videoSelector = (e, id) => {
    e.preventDefault();
    window.kWidget.embed({
      targetId: "player",
      wid: "_3150723",
      uiconf_id: 46922993,
      flashvars: {},
      cache_st: 1609527310,
      entry_id: id,
    });
  };
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <a href="#goto" onClick={(e) => videoSelector(e, item.id)}>
                {item.title}
              </a>
            }
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default VideoList;
