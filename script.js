const searchbar = document.getElementById("searchbar");
const searchInput = document.getElementById("searchInput");

searchbar.addEventListener("click", () => {
  searchbar.classList.add("active");
  searchInput.focus();
});

// For map the data

document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      projectName: "Travel app design",
      customer: "Jacob Jones",
      sentDate: "28 Oct 2022",
      Amount: "$ 240.90",
      status: "SENT",
    },
    {
      projectName: "UX Research for Event management app",
      customer: "Wade Warren",
      sentDate: "18 Oct 2022",
      Amount: "$ 120.00",
      status: "DRAFT",
    },
    {
      projectName: "Redesign - Food delivery app",
      customer: "Annette Black",
      sentDate: "15 Oct 2022",
      Amount: "$ 351.00",
      status: "PAID",
    },
    {
      projectName: "Web App - Online Learning",
      customer: "Cameron Williamson",
      sentDate: "15 Oct 2022",
      Amount: "$ 240.90",
      status: "REJECTED",
    },
    {
      projectName: "Railway web casestudy",
      customer: "Robert Fox",
      sentDate: "13 Oct 2022",
      Amount: "$ 153.00",
      status: "PAID",
    },
  ];

  const tbody = document.querySelector("#dataTable tbody");

  const rows = data.map((d) => {
    return `
        <tr>
          <td>${d.projectName}</td>
          <td>${d.customer}</td>
          <td>${d.sentDate}</td>
          <td>${d.Amount}</td>
          <td>${d.status}</td>
          
        </tr>
      `;
  });

  // Append the rows to the table body
  tbody.innerHTML = rows.join("");
});


// For Popup form

function openPopup() {
    document.getElementById('overlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
  }