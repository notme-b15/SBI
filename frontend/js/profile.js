const editBtn =
    document.getElementById("editBtn");

const saveBtn =
    document.getElementById("saveBtn");

const cancelBtn =
    document.getElementById("cancelBtn");


const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const dob =
    document.getElementById("dob");

const address =
    document.getElementById("address");


const profileName =
    document.getElementById("profileName");

const profileAvatar =
    document.getElementById("profileAvatar");


/*
    Store original values.

    These are only temporary frontend values.
*/

let originalData = {

    fullName: fullName.value,

    email: email.value,

    phone: phone.value,

    dob: dob.value,

    address: address.value

};


/* =========================
   ENABLE EDITING
========================= */

editBtn.addEventListener("click", function () {

    fullName.disabled = false;

    email.disabled = false;

    phone.disabled = false;

    dob.disabled = false;

    address.disabled = false;


    editBtn.style.display = "none";

    saveBtn.style.display = "inline-block";

    cancelBtn.style.display = "inline-block";

});


/* =========================
   SAVE PROFILE
========================= */

saveBtn.addEventListener("click", function () {

    const name =
        fullName.value.trim();

    const emailValue =
        email.value.trim();

    const phoneValue =
        phone.value.trim();


    /* Validate name */

    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    /* Validate email */

    if (!emailValue.includes("@")) {

        alert("Please enter a valid email address.");

        return;
    }


    /* Validate phone */

    if (!/^[0-9]{10}$/.test(phoneValue)) {

        alert(
            "Please enter a valid 10-digit phone number."
        );

        return;
    }


    /*
        Update profile header
    */

    profileName.textContent = name;


    /*
        Update avatar
    */

    profileAvatar.textContent =
        name.charAt(0).toUpperCase();


    /*
        Save current values
    */

    originalData = {

        fullName: fullName.value,

        email: email.value,

        phone: phone.value,

        dob: dob.value,

        address: address.value

    };


    disableFields();


    alert(
        "Profile updated successfully!"
    );

});


/* =========================
   CANCEL EDIT
========================= */

cancelBtn.addEventListener("click", function () {

    fullName.value =
        originalData.fullName;

    email.value =
        originalData.email;

    phone.value =
        originalData.phone;

    dob.value =
        originalData.dob;

    address.value =
        originalData.address;


    disableFields();

});


/* =========================
   DISABLE FIELDS
========================= */

function disableFields() {

    fullName.disabled = true;

    email.disabled = true;

    phone.disabled = true;

    dob.disabled = true;

    address.disabled = true;


    editBtn.style.display = "inline-block";

    saveBtn.style.display = "none";

    cancelBtn.style.display = "none";

}


/* =========================
   CHANGE PASSWORD
========================= */

const changePasswordBtn =
    document.getElementById(
        "changePasswordBtn"
    );


changePasswordBtn.addEventListener(
    "click",
    function () {

        alert(
            "Password change functionality will be connected to the backend later."
        );

    }
);


/* =========================
   TWO FACTOR AUTHENTICATION
========================= */

const twoFactorBtn =
    document.getElementById(
        "twoFactorBtn"
    );


twoFactorBtn.addEventListener(
    "click",
    function () {

        alert(
            "Two-factor authentication will be implemented when the backend authentication system is added."
        );

    }
);