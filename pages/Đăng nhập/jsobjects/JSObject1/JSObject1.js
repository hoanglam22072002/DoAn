export default {
  Button1onClick () {
    // Trigger the checkLoginQuery with the email and password from the input fields
    Query1.run()
      .then((response) => {
        // If the response has data, it means the user exists
        if (response.length > 0) {
          // User is authenticated, login successful
          showAlert('Login successful!', 'success');
					storeValue("isLoggedIn", true);
          storeValue("currentUser", response[0]);
					
          
          // Redirect to the dashboard (or any other page you want to navigate to)
          navigateTo('Home');
        } else {
          // If no user is found, show an error message
          showAlert('Invalid email or password', 'error');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the query execution
        showAlert('An error occurred. Please try again later.', 'error');
      });
  }
	
};
