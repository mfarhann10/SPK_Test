const variantData = [
  {
    varian: "Dewasa",
    subVarian: ["Kamtibmas", "Lantas", "PBB", "Tpktp"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 3,
      XL: 0,
      "2XL": 1,
      "3XL": 0,
      "4XL": 0,
      "5XL": 0,
      "Custom 1": 0,
    },
    subtotal: 4,
    total: 4,
  },
  {
    varian: "Kaos",
    subVarian: ["Hitam", "Putih"],
    sizes: {
      XS: 1,
      S: 2,
      M: 3,
      L: 4,
      XL: 5,
      "2XL": 0,
      "3XL": 0,
      "4XL": 0,
      "5XL": 0,
      "Custom 1": 1,
    },
    subtotals: [20, 15],
    total: 35,
  },
];

// Function untuk generate tabel variant
function generateVariantTable() {
  const tbody = document.getElementById("variantTableBody");
  let grandTotal = 0;

  variantData.forEach((item) => {
    const subVarianCount = item.subVarian.length;

    item.subVarian.forEach((sub, index) => {
      const row = document.createElement("tr");

      // Varian (rowspan)
      if (index === 0) {
        row.innerHTML += `<td rowspan="${subVarianCount}" class="align-middle fw-bold">${item.varian}</td>`;
      }

      // Sub Varian
      row.innerHTML += `<td>${sub}</td>`;

      // Kolom size
      row.innerHTML += `
                        <td>${item.sizes.XS}</td>
                        <td>${item.sizes.S}</td>
                        <td>${item.sizes.M}</td>
                        <td>${item.sizes.L}</td>
                        <td>${item.sizes.XL}</td>
                        <td>${item.sizes["2XL"]}</td>
                        <td>${item.sizes["3XL"]}</td>
                        <td>${item.sizes["4XL"]}</td>
                        <td>${item.sizes["5XL"]}</td>
                        <td>${item.sizes["Custom 1"]}</td>
                    `;

      // Subtotal → per sub varian
      const subTotalPerVarian = item.subtotals ? item.subtotals[index] : 0;
      row.innerHTML += `<td>${subTotalPerVarian}</td>`;

      // Total → merge, ditampilkan hanya sekali
      if (index === 0) {
        row.innerHTML += `
                            <td rowspan="${subVarianCount}" class="align-middle fw-bold">${item.total}</td>
                        `;
      }

      tbody.appendChild(row);
    });

    grandTotal += item.total;
  });

  // Row total keseluruhan
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
                <td colspan="12" class="text-end"><strong>TOTAL KESELURUHAN:</strong></td>
                <td colspan="2"><strong>${grandTotal}</strong></td>
            `;
  totalRow.style.backgroundColor = "#e9ecef";
  tbody.appendChild(totalRow);
}

// Generate table saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  generateVariantTable();
  generateMaterials();
  generateBordirDetails();
});
