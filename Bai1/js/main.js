window.addEventListener('load', function() {
    let masv = this.prompt("Nhap ma so SV")
    let Ten = this.prompt("Nhap ten")
    let Lop = this.prompt("Nhap lop")
    let table = this.document.querySelector("#tableInfor")
    let tr = this.document.createElement("tr")
    let col1 = this.document.createElement("td")
    let col2 = this.document.createElement("td")
    let col3 = this.document.createElement("td")
    col1.innerText = masv
    col2.innerText = Ten
    col3.innerText = Lop
    tr.appendChild(col1)
    tr.appendChild(col2)
    tr.appendChild(col3)
    table.appendChild(tr)
});