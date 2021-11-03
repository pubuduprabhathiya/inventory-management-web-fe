import { Fragment } from "react";
import StudentDashboard from "../UI/StudentDashboard";
import Header from "./Header";

const StudentLayout = (props)=>{
    return (
    <Fragment>
      <Header socket={props.socket}/>
      <main>
        <StudentDashboard/>
        {props.children}
      </main>
    </Fragment>
  );
}

export default StudentLayout;