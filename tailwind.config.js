/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#111b47",
                primaryColorLight: "#37447e",
                primaryHeadingColor: "#091133",
                primaryTextColorDark: "#505f98",
                primaryTextColorLight: "#6f7cb2",
                footerColor: "#e7ecff",
                blackColor: "#000",
                whiteColor: "#fff",
                normalTextColor: "#5d6970",
                footerTextColor: "#939EA4",
                borderColor: "#CDD1D4"
            },
        },
    },
    plugins: [],
};

// command to run this
//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch