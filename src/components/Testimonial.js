// import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useState, useMemo, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddTestimonial from "../components/AddTestimonial";
const Testimonial = () => {
  const [testimonialsAvail, setTestimonials] = useState([{}]);
  const [showTestiCards, setTestiCards] = useState(false);
  var randNum = 0;
  const [testimonial_one, setSingleTestimonial] = useState({});
  const [randNums, setIntervalCust] = useState(0);
  React.useEffect(() => {
    console.log("mounted");
    const options = {
      headers: { "content-type": "json", Authorization: "my-token232hhasf" },
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
    };
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";

    axios
      .get("http://localhost/reactjs/apis/getTestimonials.php", options)
      .then((res) => {
        if (res.data.testimonials) {
          setTestimonials(res.data.testimonials);
        }
      });
    // var i = 0;

    /* return () => {
      setTestimonials([{}]); // This worked for me
    }; */
  }, []);

  useEffect(() => {
    if (testimonialsAvail.length) {
      console.log("working..");
      console.log(testimonialsAvail);

      const interval_1 = setInterval(() => {
        randNum = Math.floor(Math.random() * testimonialsAvail.length);
        setSingleTestimonial(testimonialsAvail[randNum]);
      }, 5000);

      return () => {
        console.log("cleared");
        clearInterval(interval_1);
      };
    }
  }, [testimonialsAvail]);

  useEffect(() => {
    if (Object.keys(testimonial_one) != 0) {
      console.log("not undefined" + testimonial_one);
      console.log(testimonial_one);
      setTestiCards(true);
    }
  }, [testimonial_one]);
  const submitTestimonial = (event) => {
    event.preventDefault();
    // event.stopPropegation();
    console.log(formData);

    const options = {
      headers: {
        "content-type": "multipart/json",
        Authorization: "my-token232hhasf",
      },
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
    };
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios
      .post(
        "http://localhost/reactjs/apis/sendTestimonial.php",
        formData,
        options
      )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.status == "success") {
            setTestimonials([{ ...formData }, ...testimonialsAvail]);
            alert(
              "Your tesimonial submitted successfully.Thanks for showing interest.."
            );
            event.target.reset();
          } else {
            alert(res.data.message);
          }
        }
      })
      .catch((error) => {
        alert(error);
      });
    return false;
  };
  const [formData, setFormData] = useState({});
  const setInputVals = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div
        className="container m-2"
        style={{ display: "block", justifyContent: "center" }}
      >
        
          <AddTestimonial
            handleSubmitTestimonial={submitTestimonial}
            handleInputVals={setInputVals}
          />
        
        <div className="row m-5">
          <Card style={{ width: "60rem" }}>
            <Card.Header>Testimonial</Card.Header>
            <Card.Body style={{ display: showTestiCards ? "block" : "none" }}>
              <blockquote className="blockquote mb-0 text-center">
                <p>{testimonial_one.testimonial}</p>
                <footer className="blockquote-footer">
                  {testimonial_one.first_name}
                  {" " + testimonial_one.last_name}
                </footer>
              </blockquote>
              {/* <Button className="float-left">Prev.</Button>
          <Button className="float-right">Next</Button> */}
            </Card.Body>
            <Card.Body style={{ display: !showTestiCards ? "block" : "none" }}>
              Loading...
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
