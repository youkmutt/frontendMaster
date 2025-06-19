"use client";
import SampleButton from "@/app/components/SampleButton";
import PermissionService from "@/app/services/PermissionService";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const userRole = "MANAGER";

  const permission = new PermissionService(userRole);

  const handleLogout = async () => {
    console.log("Dashboard");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    router.push("/login");
  };

  return (
    <>
      {permission.canPerform("WRITE") ? (
        <button>Edit Report</button>
      ) : (
        <p>Read-Only</p>
      )}
      {permission.canPerform("DELETE") && <button>Delete Report</button>}
      <br />
      <br />
      <SampleButton
        onClick={() => {
          router.push("/downloadfile");
        }}
        text={"Download"}
      />
      <br />
      <br />
      <SampleButton onClick={handleLogout} text={"Logout"} />
      <SampleButton
        onClick={() => sessionStorage.setItem("authToken", "asdsad")}
        text={"haha"}
      />
    </>
  );
}

export default Dashboard;
