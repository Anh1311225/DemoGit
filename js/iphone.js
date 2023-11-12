function save() {
    let fullname = document.getElementById('fullname').value;
    let seri = document.getElementById('seri').value;
    let market = document.getElementById('market').value;

    if (_.isEmpty(fullname)) {
        document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập tên sản phẩm';
    } else {
        document.getElementById('fullname-error').innerHTML = ' ';
    }
    if (_.isEmpty(seri)) {
        document.getElementById('seri-error').innerHTML = 'Vui lòng nhập số máy';
    } else {
        document.getElementById('seri-error').innerHTML = ' ';
    }
    if (_.isEmpty(market)) {
        document.getElementById('market-error').innerHTML = 'Vui lòng nhập thị trường sản phẩm';
    } else {
        document.getElementById('market-error').innerHTML = ' ';
    }
    if (fullname && seri && market) {
        let iphones = localStorage.getItem('iphones') ? JSON.parse(localStorage.getItem('iphones')) : [];

        iphones.push({
            fullname: fullname,
            seri: seri,
            market: market,
        });
        localStorage.setItem('iphones', JSON.stringify(iphones));
        this.renderListIphone();
    }
}

function renderListIphone() {
    let iphones = localStorage.getItem('iphones') ? JSON.parse(localStorage.getItem('iphones')) : [];

    

    if (iphones.length === 0) {
        document.getElementById('list-iphones').style.display = 'none';
        return false;
    }
    document.getElementById('list-iphones').style.display = 'block'; 
    let tableContent = ` <tr>
        <td>#</td>
        <td>Tên sản phẩm</td>
        <td>Số máy</td>
        <td>Thị trường sản phẩm</td>
    </tr>`;

    iphones.forEach((iphone, index) => {
        let iphoneId = index;
        index++;
        tableContent += ` <tr>
        <td>${index}</td>
            <td>${iphone.fullname}</td>
            <td>${iphone.seri}</td>
            <td>${iphone.market}</td>
            <td>
                <a href='#'>Edit</a> | <a href='#'onclick='deleteIphone(${iphoneId})'>Delete</a>
            </td>
        </tr>`;
    });
    document.getElementById('grid-iphones').innerHTML = tableContent;
}
function deleteIphone(id) {
    let iphones = localStorage.getItem('iphones') ? JSON.parse(localStorage.getItem('iphones')) : [];
iphones.splice(id, 1);
localStorage.setItem('iphones', JSON.stringify(iphones))
renderListIphone();


}
function editIphone(id) {
    let iphones = JSON.parse(localStorage.getItem('iphones')) || [];

    for (let i = 0; i < iphones.length; i++) {
        if (i === id) {
            // Hiển thị thông tin iPhone cần chỉnh sửa trong các trường nhập liệu
            document.getElementById('fullname').value = iphones[i].fullname;
            document.getElementById('seri').value = iphones[i].seri;
            document.getElementById('market').value = iphones[i].market;

            // Thêm một nút Save Edit để lưu thay đổi
            document.getElementById('save-button').innerHTML = `<button onclick='saveEditedIphone(${id})'>Save Edit</button>`;
            break;
        }
    }
}