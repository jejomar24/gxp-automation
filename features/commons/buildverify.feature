Feature: Build Verification

  Scenario: Correct Build version
    Given I navigate to GoXPro Website version checker
    Then I should be able to see the correct version number "6.61.4"