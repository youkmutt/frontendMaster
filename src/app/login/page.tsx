"use client";
import "./style.css";
import { useRouter } from "next/navigation";
import CardLogin from "./components/CardLogin";
import {
  UserApi,
  UserLoginRequestModel,
  UserDetailModel,
  UserResetPasswordRequest,
} from "@/api_main";
import { useAlert } from "@/app/context/AlertContext";
import { useLoading } from "../context/LoadingContext";

function Login() {
  const router = useRouter();
  const user_api = new UserApi();
  const { showAlert } = useAlert();
  const { setLoading } = useLoading();

  const handleLogin = async (model: UserLoginRequestModel) => {
    try {
      setLoading(true);
      await user_api.apiUserSigninPost({ body: model }).then((response) => {
        setLoading(false);
        if (response.success == true) {
          sessionStorage.removeItem("authToken");
          sessionStorage.removeItem("refreshToken");
          sessionStorage.removeItem("permission");
          sessionStorage.removeItem("menu");
          sessionStorage.removeItem("lang");
          sessionStorage.removeItem("user");

          sessionStorage.setItem(
            "authToken",
            response.data?.token?.access_token?.toString() ?? ""
          );
          sessionStorage.setItem(
            "refreshToken",
            response.data?.token?.refresh_token?.toString() ?? ""
          );
          sessionStorage.setItem("user", JSON.stringify(response.data) ?? "");
          sessionStorage.setItem(
            "permission",
            response.data?.permissions?.toString() ?? ""
          );
          sessionStorage.setItem(
            "menu",
            JSON.stringify(response.data?.menus) ?? ""
          );
          sessionStorage.setItem("lang", "th");

          const extractedData: UserDetailModel = {
            employee_id: response.data?.employee_id,
            employee_code: response.data?.employee_code,
            username: response.data?.username,
            firstName: response.data?.firstName,
            lastName: response.data?.lastName,
            email: response.data?.email,
            active_flag: response.data?.active_flag,
          };

          sessionStorage.setItem("userDetail", JSON.stringify(extractedData));

          router.push("/pages/dashboard");
        } else {
          showAlert("Invalid username or password", "error");
        }
      });
    } catch (err) {
      showAlert("Invalid username or password", "error");
    }
  };

  const forgotPassword = async (value: string) => {
    const model: UserResetPasswordRequest = {
      email: value,
    };
    try {
      setLoading(true);
      await user_api
        .apiUserRequestResetPasswordPost({ body: model })
        .then((response) => {
          setLoading(false);
          if (response.success == true) {
            showAlert(response.message ?? "OK", "info");
          } else {
            showAlert(response.message ?? "Invalid", "error");
          }
        });
    } catch (err) {
      showAlert(String(err), "error");
    }
  };

  return (
    <CardLogin
      header={
        <div className="text-900 text-2xl font-medium mb-3">
          Welcome, <span className="text-fa-primary">FA</span> Backoffice
        </div>
      }
      detail_header="Login to continue"
      onLogin={(requestData: UserLoginRequestModel) => {
        handleLogin(requestData);
      }}
      onResetPassword={function (request: string): void {
        forgotPassword(request);
      }}
    ></CardLogin>
  );
}

export default Login;
