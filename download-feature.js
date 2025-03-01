document.addEventListener("DOMContentLoaded", function () {
  const fileList = [
    {
      name: "Microsoft Website",
      path: "https://www.microsoft.com/en-us/",
      isDownloadable: false,
    },
    {
      name: "Apple Website",
      path: "https://www.apple.com/",
      isDownloadable: false,
    },
    {
      name: "Samsung Website",
      path: "https://www.samsung.com/us/",
      isDownloadable: false,
    },
  ];

  const fileSection = document.querySelector(".files ul");
  fileList.forEach((file) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = file.path;
    link.textContent = file.name;

    if (!file.isDownloadable) {
      link.setAttribute("target", "_blank"); // Open websites in a new tab
    } else {
      link.setAttribute("download", ""); // Only apply download for actual files
    }

    listItem.appendChild(link);
    fileSection.appendChild(listItem);
  });
});
