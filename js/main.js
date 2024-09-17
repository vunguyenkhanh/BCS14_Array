let arrayNumber = [];
let arraySoThuc = [];

function getElement(id) {
  return document.getElementById(id);
}

function laySo() {
  let n = Number(getElement('nhapSo').value);
  arrayNumber.push(n);
  getElement('inSo').innerHTML = `Mảng đã nhập là: ${arrayNumber.join(', ')}`;
}

function tinhTongDuong() {
  let tong = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      tong += arrayNumber[i];
    }
  }
  getElement('inTongDuong').innerHTML = `Tổng số dương là: ${tong}`;
}

function demSoDuong() {
  let count = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      count++;
    }
  }
  getElement('inSoDuong').innerHTML = `Có ${count} số dương trong mảng`;
}

function timSoNhoNhat() {
  getElement('inSoNhoNhat').innerHTML = `Số nhỏ nhất trong mảng là: ${Math.min(
    ...arrayNumber,
  )}`;
}

function timSoDuongNhoNhat() {
  let arraySoDuong = [];
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      arraySoDuong.push(arrayNumber[i]);
    }
  }
  if (arraySoDuong.length > 0) {
    getElement(
      'inSoDuongNhoNhat',
    ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${Math.min(
      ...arraySoDuong,
    )}`;
  } else {
    getElement(
      'inSoDuongNhoNhat',
    ).innerHTML = `Không có số dương nào trong mảng`;
  }
}

function timSoChanCuoiCung() {
  let soChanCuoiCung = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 == 0) {
      soChanCuoiCung = arrayNumber[i];
    }
  }
  getElement(
    'inSoChanCuoiCung',
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${soChanCuoiCung}`;
}

function doiCho() {
  let viTri1 = Number(getElement('nhapSo1').value);
  let viTri2 = Number(getElement('nhapSo2').value);
  let temp = arrayNumber[viTri1];
  arrayNumber[viTri1] = arrayNumber[viTri2];
  arrayNumber[viTri2] = temp;
  getElement(
    'inDoiCho',
  ).innerHTML = `Mảng sau khi đổi chỗ là: ${arrayNumber.join(', ')}`;
}

function sapXepTangDan() {
  getElement(
    'inSapXepTang',
  ).innerHTML = `Mảng sau khi sắp xếp tăng dần là: ${arrayNumber
    .sort((a, b) => a - b)
    .join(', ')}`;
}

function timSoNguyenToDauTien() {
  let soNguyenTo = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] < 2) {
      continue;
    }
    let flag = true;
    for (let j = 2; j <= Math.sqrt(arrayNumber[i]); j++) {
      if (arrayNumber[i] % j == 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      soNguyenTo = arrayNumber[i];
      break;
    }
  }
  if (soNguyenTo == 0) {
    getElement(
      'inSoNguyenToDauTien',
    ).innerHTML = `Không có số nguyên tố nào trong mảng`;
  } else {
    getElement(
      'inSoNguyenToDauTien',
    ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenTo}`;
  }
}

function laySoThuc() {
  let soThuc = Number(getElement('nhapSoThuc').value);
  arraySoThuc.push(soThuc);
  getElement('inSoThuc').innerHTML = `Mảng đã nhập là: ${arraySoThuc.join(
    ', ',
  )}`;
}

function timSoNguyen() {
  let count = 0;
  for (let i = 0; i < arraySoThuc.length; i++) {
    if (Number.isInteger(arraySoThuc[i])) {
      count++;
    }
  }
  getElement('inSoNguyen').innerHTML = `Có ${count} số nguyên trong mảng`;
}

function soSanhSo() {
  let soDuong = 0;
  let soAm = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > 0) {
      soDuong++;
    } else if (arrayNumber[i] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    getElement('inSoSanhSo').innerHTML = `Số dương > số âm`;
  } else if (soDuong < soAm) {
    getElement('inSoSanhSo').innerHTML = `Số dương < số âm`;
  } else {
    getElement('inSoSanhSo').innerHTML = `Số dương = số âm`;
  }
}