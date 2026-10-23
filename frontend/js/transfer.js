const transferForm =
    document.getElementById("transferForm");


transferForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const fromAccount =
            document.getElementById(
                "fromAccount"
            ).value;


        const receiverAccount =
            document.getElementById(
                "receiverAccount"
            ).value.trim();


        const confirmAccount =
            document.getElementById(
                "confirmAccount"
            ).value.trim();


        const amount =
            parseFloat(
                document.getElementById(
                    "amount"
                ).value
            );


        const description =
            document.getElementById(
                "description"
            ).value.trim();


        // Check sender account

        if (fromAccount === "") {

            alert(
                "Please select your account."
            );

            return;
        }


        // Check receiver account

        if (receiverAccount === "") {

            alert(
                "Please enter the receiver account number."
            );

            return;
        }


        // Basic account number validation

        if (!/^[0-9]+$/.test(receiverAccount)) {

            alert(
                "Account number should contain only numbers."
            );

            return;
        }


        // Check confirmation

        if (receiverAccount !== confirmAccount) {

            alert(
                "Receiver account numbers do not match."
            );

            return;
        }


        // Check amount

        if (isNaN(amount) || amount <= 0) {

            alert(
                "Please enter a valid amount."
            );

            return;
        }


        // Example balance

        const currentBalance = 125000;


        // Check balance

        if (amount > currentBalance) {

            alert(
                "Insufficient balance."
            );

            return;
        }


        /*
            Temporary transaction object.

            Later this will be sent to:

            POST /api/transfer
        */

        const transaction = {

            fromAccount: fromAccount,

            receiverAccount: receiverAccount,

            amount: amount,

            description: description,

            date: new Date().toISOString(),

            status: "Completed"

        };


        console.log(
            "Transaction:",
            transaction
        );


        alert(
            `₹${amount.toLocaleString("en-IN")} transferred successfully!`
        );


        // Redirect to transaction history

        window.location.href =
            "history.html";

    }
);