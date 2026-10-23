const express = require("express");

const supabase = require("./supabase");


const router = express.Router();


/*
=========================================
REGISTER
=========================================
*/

router.post("/register", async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            phone
        } = req.body;


        // Basic validation

        if (
            !name ||
            !email ||
            !password ||
            !phone
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Name, email, password and phone are required."

            });

        }


        if (password.length < 6) {

            return res.status(400).json({

                success: false,

                message:
                    "Password must contain at least 6 characters."

            });

        }


        /*
        Create user using Supabase Auth
        */

        const {
            data,
            error
        } = await supabase.auth.admin.createUser({

            email: email,

            password: password,

            email_confirm: true,

            user_metadata: {

                name: name,

                phone: phone

            }

        });


        if (error) {

            return res.status(400).json({

                success: false,

                message: error.message

            });

        }


        /*
        Return user information

        DO NOT return the password.
        */

        res.status(201).json({

            success: true,

            message:
                "Account created successfully.",

            user: {

                id: data.user.id,

                email: data.user.email,

                name: name,

                phone: phone

            }

        });


    } catch (error) {

        console.error(
            "Registration error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Internal server error."

        });

    }

});


/*
=========================================
LOGIN
=========================================
*/

router.post("/login", async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message:
                    "Email and password are required."

            });

        }


        /*
        Sign in using Supabase Auth
        */

        const {
            data,
            error
        } = await supabase.auth.signInWithPassword({

            email: email,

            password: password

        });


        if (error) {

            return res.status(401).json({

                success: false,

                message:
                    "Invalid email or password."

            });

        }


        /*
        Return authentication information
        */

        res.json({

            success: true,

            message:
                "Login successful.",

            access_token:
                data.session.access_token,

            refresh_token:
                data.session.refresh_token,

            user: {

                id: data.user.id,

                email: data.user.email

            }

        });


    } catch (error) {

        console.error(
            "Login error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Internal server error."

        });

    }

});


/*
=========================================
GET CURRENT USER
=========================================
*/

router.get("/user", async (req, res) => {

    try {

        const authHeader =
            req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({

                success: false,

                message:
                    "Authorization token required."

            });

        }


        const token =
            authHeader.replace(
                "Bearer ",
                ""
            );


        /*
        Verify the user's JWT.
        */

        const {
            data,
            error
        } = await supabase.auth.getUser(
            token
        );


        if (error || !data.user) {

            return res.status(401).json({

                success: false,

                message:
                    "Invalid or expired token."

            });

        }


        res.json({

            success: true,

            user: {

                id: data.user.id,

                email: data.user.email,

                metadata:
                    data.user.user_metadata

            }

        });


    } catch (error) {

        console.error(
            "User verification error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Internal server error."

        });

    }

});


/*
=========================================
LOGOUT
=========================================
*/

router.post("/logout", async (req, res) => {

    /*
        In this architecture, the frontend
        should remove its stored session/token.

        Supabase access tokens are JWTs and
        are normally handled client-side.
    */

    res.json({

        success: true,

        message:
            "Logout successful."

    });

});


module.exports = router;