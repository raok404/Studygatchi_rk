import "bootstrap/dist/css/bootstrap.min.css";
import "./GooberMenu.css";
import { ReactNode } from "react";

interface Props {
  topBoxContent: ReactNode;
  bottomBoxContent: ReactNode;
}

export default function GooberMenu({
  topBoxContent,
  bottomBoxContent
}: Props) {
  const gooberName = "Goober";

  return (
    <div className="card bCard" style={{ width: "400px" }}>
      <div
        className="card-header"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <text>{gooberName}</text>
        <text
          style={{
            fontSize: 12,
            marginTop: "auto",
            marginLeft: "auto",
          }}
        >
          <text style={{ paddingRight: 10 }}>Money</text>
          <text>Settings</text>
        </text>
      </div>
      <div className="card-body">
        { topBoxContent }
      </div>
      <div
        className="card-footer"
        style={{
          height: 400,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            position: "absolute",
            top: 0,
            transformStyle: "preserve-3d",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <text style={{ padding: "10px" }}>{gooberName}</text>
        </div>
        { bottomBoxContent }
        
      </div>
    </div>
  );
}
