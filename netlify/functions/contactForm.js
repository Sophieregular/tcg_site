// netlify/functions/submitForm.js
exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // const formData = JSON.parse(decodeURIComponent(event.body));
  console.log(event.body);
  // You can process the form data here (send emails, store in database, etc.)

  return {
    statusCode: 302, // Redirect
    headers: {
      Location: "/thanks-contact", // Redirect to the thank you page
    },
    body: "",
  };
};
