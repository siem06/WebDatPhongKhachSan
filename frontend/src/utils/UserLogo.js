function stringToColor(string) {
  if (!string || typeof string !== "string" || string.length === 0) {
    // Xử lý trường hợp không có chuỗi hoặc chuỗi không hợp lệ
    return "#ccc"; // Màu mặc định
  }

  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  if (!name || typeof name !== "string" || name.length === 0) {
    // Xử lý trường hợp không có tên hoặc tên không hợp lệ
    return {
      sx: {
        bgcolor: "#000000", // Màu mặc định
      },
      children: "", // Chuỗi trống
    };
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export { stringToColor, stringAvatar };
