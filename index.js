const prompt = require("prompt-sync")();

// ===== INPUT ANGKA =====
function getNumber(message) {
  let num;
  do {
    num = prompt(message);
    if (num.trim() === "" || isNaN(num)) {
      console.log("Input harus berupa angka!");
    }
  } while (num.trim() === "" || isNaN(num));

  return parseFloat(num);
}

// ===== INPUT OPERATOR =====
function getOperator() {
  const operators = ["+", "-", "*", "/", "%", "**"];
  let op;

  do {
    op = prompt("Masukan operasi (+, -, *, /, %, **): ");
    if (!operators.includes(op)) {
      console.log("Operator tidak valid!");
    }
  } while (!operators.includes(op));

  return op;
}

// ===== PERHITUNGAN =====
function calculate(a, b, op) {
  if ((op === "/" || op === "%") && b === 0) {
    return "Tidak terdefinisi";
  }

  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    case "%": return a % b;
    case "**": return a ** b;
    default: return "Operasi tidak valid";
  }
}

console.log("== Kalkulator Sederhana ==");

while (true) {
  const a = getNumber("Masukan angka pertama: ");
  const b = getNumber("Masukan angka kedua: ");
  const op = getOperator();

  const hasil = calculate(a, b, op);

  console.log(`\nHasil: ${a} ${op} ${b} = ${hasil}`);

  console.log("\n== Analisis Hasil ==");

  if (typeof hasil === "number") {
    console.log("Tipe Data: number");
    console.log("Boolean:", Boolean(hasil));

    const bilangan =
      hasil > 0 ? "Positif" :
      hasil < 0 ? "Negatif" : "Nol";

    const isInteger = Number.isInteger(hasil);

    console.log("Struktur:", isInteger ? "Bulat" : "Desimal");
    console.log("Tanda:", bilangan);

    if (isInteger) {
      if (hasil === 0) {
        console.log("Kesimpulan: Bilangan Nol");
      } else {
        console.log(
          "Kesimpulan:",
          hasil % 2 === 0 ? `Genap ${bilangan}` : `Ganjil ${bilangan}`
        );
      }
    } else {
      console.log(`Kesimpulan: Pecahan ${bilangan}`);
    }

  } else {
    console.log("Operasi gagal:", hasil);
  }

  const keluar = prompt("\nTekan Enter untuk lanjut, ketik (y) untuk keluar: ");
  if (keluar.toLowerCase() === "y") break;
}

console.log("Program selesai.");
