const express = require("express");

const cors = require("cors");

require("dotenv").config();


const authRoutes =
    require("./auth");


const app = express();


/*
=========================================
MIDDLEWARE
=========================================
*/


// Allow frontend requests

app.use(
    cors()
);


// Parse JSON request bodies

app.use(
    express.json()
);


// Parse URL encoded data

app.use(
    express.urlencoded({
        extended: true
    })
);


/*
=========================================
TEST ROUTE
=========================================
*/

app.get("/", (req, res) => {

    res.json({

        success: true,

        message:
            "State Bank of India Banking Demo API is running."

    });

});


/*
=========================================
AUTH ROUTES
=========================================
*/

app.use(
    "/api/auth",
    authRoutes
);


/*
=========================================
404 HANDLER
=========================================
*/

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message:
            "API endpoint not found."

    });

});


/*
=========================================
ERROR HANDLER
=========================================
*/

app.use(
    (err, req, res, next) => {

        console.error(err);


        res.status(500).json({

            success: false,

            message:
                "Internal server error."

        });

    }
);


/*
=========================================
START SERVER
=========================================
*/

const PORT =
    process.env.PORT || 5000;


app.listen(
    PORT,
    () => {

        console.log(
            `Server running on http://localhost:${PORT}`
        );

    }
);