document.addEventListener('DOMContentLoaded', function() {
    const produkList = document.querySelector('.produk-list');

    // Data produk (ini bisa diambil dari backend)
    const produk = [
        { id: 1, nama: 'yogurth', harga: 5000 },
    ];

    produk.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('produk-item');
        div.innerHTML = `
            <h3>${item.nama}</h3>
            <p>Rp ${item.harga}</p>
        `;
        produkList.appendChild(div);
    });
});

function addToCart(id) {
    alert('Produk dengan ID ' + id + ' telah ditambahkan ke keranjang.');
}