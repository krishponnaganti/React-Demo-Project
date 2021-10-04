import { Toast, ToastContainer } from "react-bootstrap";
import {useState} from 'react';
const Welcome=()=>{
    const [show,setShow]=useState(true);
    return (
      <>
        <ToastContainer position="middle-center">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={9000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Welcome</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>Hello, visitor! hope you are doing great.. Please check my page..</Toast.Body>
          </Toast>
        </ToastContainer>
      </>
    );
}
export default Welcome