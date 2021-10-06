import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { connect, Provider } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import axios from "axios";
//redux
const SIGNUP = "SIGN-UP";
const SUBMIT = "SUBMIT";
const RESET = "RESET";
const authReducer = (state = { login: false }, action) => {
  if (action.type == SIGNUP) {
    return { login: true };
  }
  return state;
};
const authActionReducer = (
  state = {
    authSubmit: false,
    first_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  },
  action
) => {
  if (action.type == SUBMIT) {
    console.log(action);

    return {
      authSubmit: true,
      first_name: action.first_name,
      email: action.email,
      mobile: action.mobile,
      password: action.password,
      confirm_password: action.confirm_password,
    };
  }
  if (action.type == RESET) {
    return { authSubmit: false };
  }
  return state;
};
const rootReducer = combineReducers({ authReducer, authActionReducer });
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const signUpAction = {
  type: SIGNUP,
};
const authSubmitForm = {
  type: SUBMIT,
};
const authReset = {
  type: RESET,
};
const signUpActionCreator = () => {
  return signUpAction;
};

const authSubmitActionCreator = (
  first_name,
  email,
  mobile,
  password,
  confirm_password
) => {
  return {
    ...authSubmitForm,
    first_name: first_name,
    email: email,
    mobile: mobile,
    password: password,
    confirm_password: confirm_password,
  };
};
console.log("render");
//middleware action creator
// const handleAsync=()=>{
//     return (dispatch)=>{
//        console.log("IN");
//         dispatch(signUpActionCreator());
//         setTimeout(() => {
//             console.log("working async operation");
//              dispatch(
//                authSubmitActionCreator(
//                  "Ganesh",
//                  "krishponnaganti@gmail.com",
//                  "9052040609"
//                )
//              );
//         }, 5000);
//     }
// }
store.subscribe(() => {
  console.log("Logging whenever action dispatched/performed");
  console.log(store.getState());

  // const statusReduxAction = store.getState().authActionReducer;
});
const mapStateToProps = (state) => {
  return { formFields: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetReduxState: () => {
      dispatch(authReset);
    },
    submitSignUpForm: (
      first_name,
      email,
      mobile,
      password,
      confirm_password
    ) => {
      const url = "http://localhost/reactjs/apis/addRegistration.php";
      const data = { first_name, email, mobile, password, confirm_password };
      const options = {
        header: { "content-type": "multipart/json", Authorization: "my-token" },
        xsrfCookieName: "XSRF-TOKEN1",
        xsrfHeaderName: "X-XSRF-TOKEN2",
      };
      axios.post(url, data, options).then((res) => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.status == "success") {
            // alert("you are registered successfully..");
            dispatch(
              authSubmitActionCreator(
                first_name,
                email,
                mobile,
                password,
                confirm_password
              )
            );
          } else {
            alert(res.data.message);
          }
        }
      });
    },
  };
};
// store.dispatch(signUpActionCreator());
// store.dispatch(authSubmitActionCreator("Ganesh","krishponnaganti@gmail.com","9052040609"));
// store.dispatch(handleAsync());
// console.log('working.. ');

//
const SignUp = (props) => {
  // const [formVals, handleSubmitSignin] = useState({});
  // console.log("start");
  // console.log(props);
  // console.log("end");
  // console.log(useLocation());
  const [inputVals, handleInputChange] = useState({});
  const [formValid, setValidation] = useState({ isValid: true });
  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitSignUpForm(
      inputVals.first_name,
      inputVals.email,
      inputVals.mobile,
      inputVals.password,
      inputVals.confirm_password
    );
  };
  const handleChange = (event) => {
    handleInputChange({
      ...inputVals,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    // console.log(inputVals);
    if (inputVals.password != inputVals.confirm_password) {
      setValidation({ isValid: false });
    } else {
      setValidation({ isValid: true });
    }
  }, [inputVals.confirm_password, inputVals.password]);

  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    setShowAlert(true);
    formEl.current.reset();
    console.log("resetting..");
  }, [store.getState().authActionReducer.authSubmit]);

  useEffect(() => {
    return () => {
      props.resetReduxState(); //redux state clean up
      console.log("resetting redux state...");
    };
  }, []);

  const setStatusAlert = () => {
    props.resetReduxState(); //redux state clean up
    setShowAlert(false);
  };
  const formEl = useRef();

  return (
    <div
      className="container m-2"
      style={{ display: "block", justifyContent: "center" }}
    >
      <Alert
        onClose={() => setStatusAlert()}
        dismissible
        variant="success"
        style={{
          display:
            store.getState().authActionReducer.authSubmit && showAlert
              ? "block"
              : "none",
        }}
      >
        {store.getState().authActionReducer.authSubmit
          ? "Success! You have registered with me.Please login to post blog.."
          : ""}
      </Alert>
      <Form
        onSubmit={(event) => handleSubmit(event)}
        className="m-1"
        style={{ width: "50%" }}
        ref={formEl}
      >
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            required
            onChange={(event) => handleChange(event)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            onChange={(event) => handleChange(event)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            maxLength="10"
            pattern="^[6-9][0-9]{9}$"
            required
            onChange={(event) => handleChange(event)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            onChange={(event) => handleChange(event)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm_password"
            required
            onChange={(event) => handleChange(event)}
          ></Form.Control>
          <Form.Text>
            {formValid.isValid
              ? ""
              : "Password and confirm password should be same"}
          </Form.Text>
        </Form.Group>
        <Button type="submit" disabled={!formValid.isValid}>
          Sign up
        </Button>
      </Form>
      {/* {inputVals.password} -{inputVals.confirm_password} */}
    </div>
  );
};
const ContainerRedux = connect(mapStateToProps, mapDispatchToProps)(SignUp);
const AppWrapper = (props) => {
  // console.log(props);
  return (
    <>
      <Provider store={store}>
        <ContainerRedux />
      </Provider>
    </>
  );
};
export default AppWrapper;
