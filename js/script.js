// Downloading resume Pdf 

document.getElementById("download-btn").addEventListener("click", function() {
  fetch("Resume1.pdf")
    .then(response => response.blob())
    .then(blob => {
      // Create a temporary URL for the blob
      const url = URL.createObjectURL(blob);
      
      // Create an anchor element
      const link = document.createElement("a");
      link.href = url;
      link.download = "Resume1.pdf";
      
      // Trigger the download
      link.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
    });
});
