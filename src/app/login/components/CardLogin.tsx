"use client";
import React, { useState, type ReactNode, KeyboardEvent } from "react"; // Import ReactNode
import SampleButton from "@/app/components/SampleButton";
import { UserLoginRequestModel } from "@/api_main";
import ToggleButtonGroup from "@/app/components/ToggleButtonGroup";
import InputTextLogin from "./InputTextLogin";
import ForgotPassword from "@/app/components/ForgotPassword";
import { Dialog } from "primereact/dialog";

interface CardLoginProps {
  header: ReactNode;
  detail_header: string;
  onLogin: (requestData: UserLoginRequestModel) => void;
  onResetPassword: (request: string) => void;
}

interface StateOption {
  label: string;
  value: number;
}

const CardLogin: React.FC<CardLoginProps> = ({
  header,
  detail_header,
  onLogin,
  onResetPassword,
}) => {
  const [count, setCount] = useState(0);
  const [signInValidate, setSignInValidate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stateOptions: StateOption[] = [
    { label: "Standard", value: 1 },
    { label: "LDAP", value: 2 },
  ];
  const [requestData, setRequestData] = useState<UserLoginRequestModel>({});
  const [forgotPassword, setForgotPassword] = useState<string>();

  const handleStateSelect = (label: string, value: number) => {
    console.log("Selected authentication type label:", label);
    console.log("Selected authentication type value:", value);
  };

  const handleForgotPasswordClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetPasswordSubmit = (email: string) => {
    onResetPassword(email);
    handleCloseModal();
  };

  const validateLogin = async () => {
    setSignInValidate((signInValidate) => (signInValidate = true));

    if (!requestData.username || !requestData.password) {
      !requestData.username
        ? (requestData.username = "")
        : requestData.username;
      !requestData.password
        ? (requestData.password = "")
        : requestData.password;
    } else {
      onLogin(requestData);
    }
  };

  return (
    <div className="flex bg-login-gradient justify-center font-sans min-h-screen">
      <div className="flex flex-col-reverse justify-self-center justify-center overflow-hidden w-2/5 max-w-screen-sm">
        <div className="font-jamjuree bg-white border rounded-[53px] p-8">
          <div className="text-center mb-5">
            <div className="text-900 text-2xl font-medium mb-3">{header}</div>
            <span className="text-gray-600 font-medium">{detail_header}</span>
          </div>
          <div className="mb-3 font-jamjuree-normal text-gray-900">
            <div className="justify-left items-left">
              <div className="row">
                <div className="flex justify-center items-center my-4">
                  <ToggleButtonGroup
                    options={stateOptions}
                    defaultSelected={1}
                    onSelect={handleStateSelect}
                  />
                </div>
                <div className="justify-left items-left px-6">
                  <InputTextLogin
                    label={"Username"}
                    placeholder="Username"
                    validator={requestData.username == "" && signInValidate}
                    validate_txt="กรุณากรอกข้อมูล Username"
                    onChange={(value) => {
                      setRequestData((prev) => ({
                        ...prev,
                        username: value,
                        password: prev.password,
                      }));
                    }}
                    onEnter={validateLogin}
                  />
                </div>
                <div className="justify-left items-left my-4 px-6">
                  <InputTextLogin
                    type="password"
                    label={"Password"}
                    placeholder="Password"
                    validator={requestData.password == "" && signInValidate}
                    validate_txt="กรุณากรอกข้อมูล Password"
                    onChange={(value) => {
                      setRequestData((prev) => ({
                        ...prev,
                        username: prev.username,
                        password: value,
                      }));
                    }}
                    onEnter={validateLogin}
                  />
                </div>
                <div className="justify-left items-left my-4 px-6">
                  <ForgotPassword
                    onClick={handleForgotPasswordClick}
                  ></ForgotPassword>
                  <Dialog
                    visible={isModalOpen}
                    style={{ width: "40%" }}
                    onHide={() => setIsModalOpen(false)}
                    modal
                  >
                    <div className="row">
                      <div className="justify-left items-left px-6">
                        <InputTextLogin
                          label={"Email"}
                          placeholder="Email"
                          validator={forgotPassword == ""}
                          validate_txt="กรุณากรอกข้อมูล Email"
                          onChange={(value) => {
                            setForgotPassword(value);
                          }}
                          onEnter={() => {
                            handleResetPasswordSubmit(forgotPassword ?? "");
                          }}
                        />
                      </div>

                      <div className="flex justify-center items-center my-4">
                        <SampleButton
                          onClick={() =>
                            handleResetPasswordSubmit(forgotPassword ?? "")
                          }
                          text={"Send"}
                        />
                      </div>
                    </div>
                  </Dialog>
                </div>

                <div className="flex justify-center items-center  px-6">
                  <SampleButton
                    onClick={() => {
                      validateLogin();
                    }}
                    text={"Login"}
                    additional_class={"w-full"}
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mt-8 px-6">
                <p className="text-right read-the-docs">or sign in with</p>
              </div>
              <div className="flex justify-center items-center mt-2 mb-8">
                <SampleButton
                  onClick={() => setCount((count) => count + 1)}
                  text={"Login with SSO : " + count.toString()}
                />
              </div>
            </div>
          </div>
          <p className="text-right read-the-docs">version v1.0.01</p>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
