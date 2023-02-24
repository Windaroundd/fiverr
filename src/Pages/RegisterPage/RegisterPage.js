import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRegister } from "../../services/userService";
import { Button, Form, Input, message, Select } from "antd";
import { userLocalService } from "../../services/localService";
import "./styleSignup.css";
import { setUserInforSignup } from "../../redux-toolkit/SignupPage/userSliceSignup";
import { DatePicker, Space } from "antd";

export default function RegisterPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    let userSignUp = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      birthday: values.birthday,
      gender: true,
      role: values.role,
      skill: [values.skill],
      certification: [values.certification],
    };
    console.log("userSignUp: ", userSignUp);

    postRegister(userSignUp)
      .then((res) => {
        console.log("res", res);
        // send data to redux
        dispatch(setUserInforSignup(res.data.content));

        // save to Local
        userLocalService.set(res.data.content);
        //   Return to LoginPage after successful signup
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
        message.success("Đăng ký thành công");
      })
      .catch((err) => {
        console.log("err: ", err);
        message.error("Đăng ký thất bại");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;

  const onGenderChange = (value) => {
    if (value === "male") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="signup px-10 flex justify-center items-center">
      <div className="signup-container rounded">
        <div className="p-10 bg-white border rounded justify-center items-center signup-content shadow-2xl shadow-gray-500">
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
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
              <h4 className="p-5 text-3xl font-medium">Sign Up to Fiverr</h4>
            </Form.Item>

            <Form.Item
              label="Full name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input bordered={true} className="rounded" />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
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
              label="Phone number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input bordered={true} className="rounded" />
            </Form.Item>
            <Form.Item
              label="Birthday"
              name="birthday"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Space direction="vertical" size={12}>
                <DatePicker
                  bordered={true}
                  style={{
                    width: "350px",
                  }}
                />
              </Space>
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[
                {
                  required: true,
                  message: "Please input your role!",
                },
              ]}
            >
              <Input bordered={true} className="rounded" />
            </Form.Item>
            <Form.Item
              label="Skill"
              name="skill"
              rules={[
                {
                  required: true,
                  message: "Please input your skills!",
                },
              ]}
            >
              <Input bordered={true} className="rounded" />
            </Form.Item>
            <Form.Item
              label="Certification"
              name="certification"
              rules={[
                {
                  required: true,
                  message: "Please input your certification!",
                },
              ]}
            >
              <Input bordered={true} className="rounded" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="bg-green-700 text-white hover:text-white continue-btn"
                htmlType="submit"
              >
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
