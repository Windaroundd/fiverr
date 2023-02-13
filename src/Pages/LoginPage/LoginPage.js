import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { postLogin } from "../../service/userService";
import { useNavigate } from "react-router-dom";
import { setUserInfoLogin } from "../../redux-toolkit/userSliceLogin";
import { useDispatch } from "react-redux";
import { userLocalService } from "../../service/localService";

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
    <div className="w-screen h-screen flex justify-evenly items-center">
      <div className="container px-10">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
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
            <h4 className="p-5">Sign In to Fiverr</h4>
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
            <Input />
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
              className="bg-green-700 text-white hover:text-white"
              htmlType="submit"
            >
              Continue
            </Button>
          </Form.Item>
          <Checkbox>Remember me</Checkbox>
        </Form>
        <div className="flex">
          <p>Not a member yet?</p>
          <button className="text-green-700">Join now</button>
        </div>
      </div>
    </div>
  );
}
