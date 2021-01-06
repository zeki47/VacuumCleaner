$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/alisveris.feature");
formatter.feature({
  "name": "Alisveris",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "buying a cleaner",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addproduct"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on alisveris page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.VacuumCleaner.StepDefinitions.alisverisstep_defs.the_user_is_on_alisveris_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "and the user chooses any product",
  "keyword": "And "
});
formatter.match({
  "location": "com.VacuumCleaner.StepDefinitions.alisverisstep_defs.and_the_user_chooses_any_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user inputs the info",
  "keyword": "When "
});
formatter.match({
  "location": "com.VacuumCleaner.StepDefinitions.alisverisstep_defs.the_user_inputs_the_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user buys a product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.VacuumCleaner.StepDefinitions.alisverisstep_defs.the_user_buys_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.VacuumCleaner.Utilities.Driver.closeDriver(Driver.java:68)\r\n\tat com.VacuumCleaner.StepDefinitions.Hooks.tearDown(Hooks.java:24)\r\n",
  "status": "failed"
});
});