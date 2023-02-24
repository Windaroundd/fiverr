import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { postLogin } from "../../services/userService";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserInfoLogin } from "../../redux-toolkit/LoginPage/userSliceLogin";
import { useDispatch } from "react-redux";
import { userLocalService } from "../../services/localService";
import "./LoginPage.css";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    postLogin(values)
      .then((res) => {
        // send data to redux
        dispatch(setUserInfoLogin(res.data.content));
        // save in Local
        userLocalService.set(res.data.content);
        //   Return to Homepage after successful login
        setTimeout(() => {
          navigate("/");
        }, 1000);
        message.success("Đăng nhập thành công");
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-page px-10 flex justify-center items-center box-border hover:box-content">
      <div className="login-content p-10 bg-white border rounded justify-center items-center shadow-2xl shadow-gray-500">
        <div className="box-border hover:box-content">
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item>
              <h4 className="p-5 text-3xl font-medium">Sign In to Fiverr</h4>
            </Form.Item>
            <Form.Item
              label="Username"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email or username!",
                },
              ]}
            >
              <Input bordered={true} className="rounded" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="bg-green-700 text-white hover:text-white continue-signin"
                htmlType="submit"
              >
                Continue
              </Button>
            </Form.Item>
            <Checkbox>Remember me</Checkbox>
          </Form>
        </div>

        <Form.Item>
          <NavLink to="/signup">
            <p>Not a member yet?</p>
            <button className="text-green-700">Join now</button>
          </NavLink>
        </Form.Item>
        <div className="flex"></div>
      </div>
    </div>
  );
}
