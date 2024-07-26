Feature: Beta scenarios

  Scenario Outline: Verify basic scenarios on beta flow
    Given That the user tries get credit offer with the alliance: "<environment>", "<allienceCode>"
    When The user answers the questions: "<firstQuestion>", "<secondQuestion>", "<thirdQuestion>", "<fourthQuestion>",  "<fifthQuestion>"
    And The user answers the PEP questions: "<firstPepQuestion>", "<secondPepQuestion>", "<thirdPepQuestion>", "<fourthPepQuestion>", "<fifthPepQuestion>"
    And The user enter his assets and the incomes: "<assets>", "<incomes>"
    And The user enter the his data: "<documentNumber>", "<expeditionDocumentDate>", "<phoneNumber>", "<email>",  "<OTP>"
    And I verify the OTP on the final screen
    Then I should see a confirmation message

 Examples:
      | environment   | allienceCode     | firstQuestion                               | secondQuestion    | thirdQuestion          | fourthQuestion             | fifthQuestion                          | firstPepQuestion | secondPepQuestion | thirdPepQuestion | fourthPepQuestion | fifthPepQuestion | assets   | incomes    | documentNumber   | expeditionDocumentDate | phoneNumber      | email                         | OTP        |
      | dev            | CY00123456       | Tengo un negocio o soy independiente        | Sí, propio        | Pesca Marítima         | De 5 a 10 empleados        | Entre $35.001.000 y $83.279.000        | No               | No                | No               | No                | No               | 9000000  | 2000000    | 1023026417       | 01-01-2001             | 3176530947       | andres1478963250@gmail.com    | 000000     |