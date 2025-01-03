// script.js
document.getElementById("solve-btn").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("input-a").value);
    const b = parseFloat(document.getElementById("input-b").value);
    const c = parseFloat(document.getElementById("input-c").value);
  
    let result = "";
  
    // Kiểm tra giá trị nhập
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      result = "Vui lòng nhập đủ giá trị a, b, c!";
    } else if (a === 0) {
      result = "Đây không phải là phương trình bậc 2!";
    } else {
      const delta = b * b - 4 * a * c;
      if (delta < 0) {
        result = "Phương trình vô nghiệm.";
      } else if (delta === 0) {
        const x = -b / (2 * a);
        result = `Phương trình có nghiệm kép: x = ${x}`;
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result = `Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
      }
    }
  
    // Hiển thị kết quả
    document.getElementById("result").textContent = result;
  });
  