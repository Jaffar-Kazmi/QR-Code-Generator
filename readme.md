# QR Code Generator

A simple QR Code Generator built with Node.js, Express, and qr-image.
It allows users to input a valid URL, generates a QR code, and provides an option to download it as a PNG file.

## Features

- Generate QR codes from any valid URL
- Input validation (ensures URL starts with http:// or https:// and ends with a valid domain like .com, .pk, etc.)
- Download generated QR code as PNG
- Responsive and clean UI with separate CSS files
- Easy to deploy on platforms like Render or Railway

## Live Demo
[Click here to try it out](https://quickqr-boz7.onrender.com)
## Project Structure

```bash
qr-code-generator/
│
├── server.js            # Main Express server
├── package.json         # Dependencies & scripts
├── package-lock.json    # Auto-generated lock file
├── .gitignore           # Ignore node_modules, env files
│
├── public/              # Frontend files
│   ├── index.html       # Homepage (form)
│   ├── style.css        # Homepage styling
│   ├── result.css       # Result page styling
│
└── README.md            # Documentation
```

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
```

### Install the dependencies
```bash
npm install
```

### Start the server
```bash
npm start
```

### Open in the browser
Go to -> http://localhost:3000

## Usage

- Enter a valid URL (e.g., https://google.com).
- Click Generate QR Code.
- The app will display the QR code.
- Click Download QR Code to save it as qrcode.png.

## Technologies Used

- Node.js (JavaScript runtime)
- Express.js (backend framework)
- qr-image (QR code generation)
- HTML, CSS, JavaScript (frontend)

## License

This project is licensed under the MIT License – feel free to use and modify it.

