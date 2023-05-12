const data = { url: window.location.href, vehicle: objDataLayer.vehicle, store: objDataLayer.dealer }
async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3000/ads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
postJSON(data)

