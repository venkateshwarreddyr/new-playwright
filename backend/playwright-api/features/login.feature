Feature: Login

  Scenario: User enters invalid credentials and fails to log in
    Given the user is on the login page
    When the user enters an invalid username and password
    And the user clicks on the "Login" button
    Then an error message "Invalid username or password" should be displayed
    And the user should remain on the login page
    # Optionally, check if the login fields are cleared or retain the entered data
    # And the login fields should be cleared
    # Or the login fields should retain the entered data
