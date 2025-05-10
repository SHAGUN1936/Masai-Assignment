const express = require("express");
const os = require("os");
const dns = require("dns");
const readFileContent = require("./read");

const app = express();
const PORT = 3000;

// Route 1: /test
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Route 2: /readfile
app.get("/readfile", (req, res) => {
  const data = readFileContent();
  res.send(data);
});

// Route 3: /systemdetails
app.get("/systemdetails", (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length // Bonus
  };
  res.json(systemInfo);
});

// Route 4: /getip
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).send("DNS lookup failed: " + err.message);
    }
    res.json({
      hostname: "masaischool.com",
      ipAddresses: addresses.map(addr => addr.address)
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
