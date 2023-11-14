document.addEventListener("DOMContentLoaded", function () {
  function SendMail() {
      var params = {
          from_name: document.getElementById("fullName").value,
          email_id: document.getElementById("email_id").value,
          message: document.getElementById("message").value
      };

      // Simulate sending an email (replace this with your actual email sending code)
      console.log("Sending email:", params);

      // For the sake of the example, log the parameters instead of sending an actual email
      alert("Email Sent Successfully");
  }
});