Feature: Verify the login page of the xyz bank
    Background: user should navigate to url
        Given User shoud open the bank using valid url
        Then User should validate the application
    Scenario Outline: Verify the Bank Manager login
        When user should click on the Bank Manager Login
        Then user should click on Add customer
        Then Enter the userfname "<Firstname>"
        And  Enter the userlastname "<Lastname>"
        And  Enter the userpostcode "<Postalcode>"
        Then user should  click on Add customer Button
        And user shoud go to Home

        Examples:
            | Firstname | Lastname | Postalcode |
            | Raju      | Yadav    | 455676     |

    Scenario: Verify Customer Login
        When user should click on customer login
        And user should click on yourname
        Then user shoud select the name
        And user should login successfull
