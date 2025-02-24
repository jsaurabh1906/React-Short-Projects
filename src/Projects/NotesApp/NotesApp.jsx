import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Notes from "./Notes";

const NotesApp = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <Header />
      <Notes />
      <Footer />
    </div>
  );
};

export default NotesApp;
