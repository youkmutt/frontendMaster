"use client";
import { useRouter } from "next/navigation";
import SampleButton from "../../components/SampleButton";
import { ApiFilesV2FileNameGetRequest, FilesApi } from "@/api_url";

import { ExporterControllerApi, DownloadFileRequest } from "@/api_jasper";
import { useState } from "react";

function DownloadFile() {
  const router = useRouter();
  const file_api = new FilesApi();
  const jasper_api = new ExporterControllerApi();
  const [requestData1, setRequestData1] =
    useState<ApiFilesV2FileNameGetRequest>({
      fileName: "logo_asys.png",
      filePath: "2025/06",
    });
  const [requestData2, setRequestData2] = useState<DownloadFileRequest>({
    filename: "report_reconcile.pdf",
  });

  const downloadFile = async () => {
    try {
      await file_api.apiFilesV2FileNameGet(requestData1).then((res) => {
        console.log("file_api");
        console.log(res);

        const url = window.URL.createObjectURL(new Blob([res]));
        const filename = requestData1.fileName || "downloaded_file.pdf"; // Use the filename from requestData2 or a default
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); // Set the download attribute with the desired filename

        // Append to the document body, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the Object URL to free up memory
        window.URL.revokeObjectURL(url);
      });
    } catch (err) {
      console.error("API error:", err);
    }
  };

  const jasperDownload = async () => {
    try {
      await jasper_api.downloadFile(requestData2).then((res) => {
        console.log("jasper_api");
        console.log(res);

        const url = window.URL.createObjectURL(new Blob([res]));
        const filename = requestData2.filename || "downloaded_file.pdf"; // Use the filename from requestData2 or a default
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); // Set the download attribute with the desired filename

        // Append to the document body, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoke the Object URL to free up memory
        window.URL.revokeObjectURL(url);
      });
    } catch (err) {
      console.error("API error:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <SampleButton onClick={downloadFile} text={"Dowload File"} />
      <br />
      <br />
      <SampleButton onClick={jasperDownload} text={"Dowload Jasper"} />
      <br />
      <br />
      <SampleButton
        onClick={() => {
          router.push("/dashboard");
        }}
        text={"Dashboard"}
      />
      <br />
      <br />
      <SampleButton
        onClick={() => {
          sessionStorage.removeItem("authToken");
          router.push("/login");
        }}
        text={"Logout"}
      />
    </div>
  );
}

export default DownloadFile;
