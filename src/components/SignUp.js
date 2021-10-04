import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { connect, Provider } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
//redux
const SIGNUP = "SIGN-UP";
const SUBMIT = "SUBMIT";
const authReducer = (state = { login: false }, action) => {
  if (action.type == SIGNUP) {
    return { login: true };
  }
  return state;
};
const authActionReducer = (
  state = {
    authSubmit: false,
    fname: "",
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
      fname: action.fname,
      email: action.email,
      mobile: action.mobile,
      password: action.password,
      confirm_password: action.confirm_password,
    };
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
const signUpActionCreator = () => {
  return signUpAction;
};
const authSubmitActionCreator = (
  fname,
  email,
  mobile,
  password,
  confirm_password
) => {
  return {
    ...authSubmitForm,
    fname: fname,
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
    submitSignUpForm: (fname, email, mobile, password, confirm_password) => {
      dispatch(
        authSubmitActionCreator(
          fname,
          email,
          mobile,
          password,
          confirm_password
        )
      );
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
    return () => {};
  }, [store.getState().authActionReducer.authSubmit]);
  const formEl = useRef();
  return (
    <div
      className="container mb-2"
      style={{ display: "block", justifyContent: "center" }}
    >
      <Alert
        onClose={() => setShowAlert(false)}
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
          Sign in
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
