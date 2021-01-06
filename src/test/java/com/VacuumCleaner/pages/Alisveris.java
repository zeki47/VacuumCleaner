package com.VacuumCleaner.pages;

import com.VacuumCleaner.Utilities.ConfigurationReader;
import com.VacuumCleaner.Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Alisveris extends BasePage  {

        public Alisveris(){
            PageFactory.initElements(Driver.get(),this);
        }


        @FindBy(xpath = "//a[@data-toggle-content-opens='header__dropdown--15']")
        public WebElement urunler;


        }
