let nama_karyawan = [
    "Dewa",
    "Dewi",
    "Dewo"
];

function showKaryawan()
{
    let daftar_karyawan = document.getElementById("list-karyawan");
    daftar_karyawan.innerHTML = "";

    for (let i = 0; i < nama_karyawan.length; i++)
    {
        var button_edit = `<a href="#" onclick="edit_nama(${i})">Edit</a>`;
        var button_hapus = `<a href="#" onclick="hapus_nama(${i})">Hapus</a>`;
        
        daftar_karyawan.innerHTML += `<li>${nama_karyawan[i]}[${button_edit}][${button_hapus}]</li>`;
    }
}

function addKaryawan()
{
    let input = document.getElementById("nama");
    nama_karyawan.push(input.value);
    showKaryawan();
}

function edit_nama(id)
{
    let new_name = prompt("Input nama baru", nama_karyawan[id]);
    nama_karyawan[id] = new_name;
    showKaryawan();
}

function hapus_nama(id)
{
    nama_karyawan.splice(id, 1);
    showKaryawan();
}

showKaryawan();