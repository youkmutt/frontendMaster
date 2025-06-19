"use client";
import { Configuration, TokenModelBaseResponseModel } from "@/api_main";

const customFetch: typeof fetch = async (url, options = {}) => {
  let tokenStorage = sessionStorage.getItem("authToken");

  const headers = new Headers(options.headers);
  if (tokenStorage) {
    headers.set("Authorization", `Bearer ${tokenStorage}`);
  }
  //   const isAbsoluteUrl = (inputUrl: string) => /^https?:\/\//i.test(inputUrl);

  //   if (!isAbsoluteUrl(url.toString())) {
  if (headers.get("Headers-Type") === "upload") {
    //   url = `${process.env.NEXT_PUBLIC_API_URL_IMG}${url}`;
    headers.delete("Headers-Type");
  } else {
    //   url = `${process.env.NEXT_PUBLIC_BASE_API_URL}${url}`;
    headers.set("Accept", "application/json");
  }
  //   }
  let response = await fetch(url, { ...options, headers });

  if (response.status === 401 && !url.toString().includes("refreshtoken")) {
    let refresh_token = sessionStorage.getItem("refreshToken");

    if (!refresh_token) {
      sessionStorage.clear();
      window.location.href = "/";
      return response;
    }

    try {
      const refreshResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/refreshtoken`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenStorage}`,
          },
          body: JSON.stringify({ refresh_token: refresh_token }),
        }
      );

      const tokenData = await refreshResponse.json();

      if (!tokenData.success) {
        sessionStorage.clear();
        window.location.href = "/";
        return response;
      }
      sessionStorage.setItem("authToken", tokenData.data.access_token);
      sessionStorage.setItem("refreshToken", tokenData.data.refresh_token);

      headers.set("Authorization", `Bearer ${tokenData.data.access_token}`);
      response = await fetch(url, { ...options, headers }); // ✅ retry here
    } catch (refreshError) {
      console.log(refreshError);
      sessionStorage.clear();
      window.location.href = "/";
      return response;
    }
  }

  return response; // ✅ always return a valid Response object
};

export const apiConfig = new Configuration({
  fetchApi: customFetch,
});
