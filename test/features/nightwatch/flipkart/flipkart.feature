Feature: flipkart Search
    Scenario: Verify Search results
        Given I open flipkart home page
        When I search for "Iphone"
        Then Verify "APPLE iPhone" is displayed in results
