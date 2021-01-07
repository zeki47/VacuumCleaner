@navigate
Feature: Dropdown Menus

  Scenario: Modules in Alisveris
    Given the user is on the home page
    When the user clicks to Alisveris
    Then Alisveris drop down menu should have the following options:
      | Kablosuz Supurgeler         |
      | Kablolu Supurgeler          |
      | Sac Duzlestiriciler         |
      | Sac Sekillendiriciler       |
      | Sac Kurutma Makineleri      |
      | Hava Temizleyici Fanlar     |
      | Profesyonel Isletmeler Icin |
      | Yedek Parca-Aksesuar        |
      | Yedek Batarya               |