Feature: Admin Login

  Scenario: Successful login
    Given I navigate to GoXPro Website
    And select "GXP" as authentication
    When I log in with username "jason508" and password "jjjjjjjj"
    And I click the MAD button
    Then I should be on the admin dashboard