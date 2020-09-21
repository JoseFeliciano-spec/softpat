import React from "react";
import "./PreAuth.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function PreAuth() {
  return (
    <div className="pre-auth">
      <CircularProgress className="pre-auth__spinner" />
    </div>
  );
}
