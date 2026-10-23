const searchInput =
    document.getElementById("search");

const typeFilter =
    document.getElementById("type");

const dateFilter =
    document.getElementById("date");

const table =
    document.getElementById("transactionTable");

const rows =
    table.querySelectorAll("tbody tr");


// Search transactions

searchInput.addEventListener(
    "input",
    filterTransactions
);


// Filter by transaction type

typeFilter.addEventListener(
    "change",
    filterTransactions
);


// Filter function

function filterTransactions() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const selectedType =
        typeFilter.value;


    rows.forEach(function (row) {

        const rowText =
            row.textContent.toLowerCase();


        const transactionType =
            row.querySelector(".type");


        let matchesSearch =
            rowText.includes(searchText);


        let matchesType = true;


        if (selectedType === "credit") {

            matchesType =
                transactionType.classList.contains(
                    "credit-type"
                );

        }


        if (selectedType === "debit") {

            matchesType =
                transactionType.classList.contains(
                    "debit-type"
                );

        }


        if (matchesSearch && matchesType) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}