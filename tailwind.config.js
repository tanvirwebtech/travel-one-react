module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                greenblue: {
                    DEFAULT: "#55efc4",
                    dark: "#00b894",
                },
                customGrey: {
                    DEFAULT: "#636e72",
                    light: "#b2bec3",
                    dark: "#2d3436",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
