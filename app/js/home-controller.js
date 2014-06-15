'use strict';

/* Controllers */

angular.module('kivame.home.controllers', [])
  .controller('HomeController', ['$scope', 'KivaService', function($scope, KivaService) {

        // CONSTANTS
        $scope.ITEMS_PER_SLIDE = 4;

        // ATTRIBUTES
        $scope.kivalist = null;
        $scope.counter = 0
        $scope.apiReturn = [
            {
                "funded_amount":25,"funded_percentage":7.142857142857142,"borrower_name":"Leonida","image":"Leonida","long_description":"Leonida works hard to support her family. Leonida is married and has a food vending business in the Philippines. She requested a 15,000 PHP loan through NWTF to purchase additional ingredients like meat, spices, vegetables, milk, sugar, etc. Leonida has been in this business for 36 years now. In the future, Leonida would like to save enough money so that she could afford to send her children to college and expand her business.","loan_amount":350,"country_code":"PH","country":"Philippines","short_description":"to purchase additional ingredients like meat, spices, vegetables, milk, sugar, etc.","id":723007},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Mariyom","image":"Mariyom","long_description":"Mariyom (in the photo), age 54, is a widow with two sons and one daughter. One of her children is married, another one is a gas station attendant and another attends school. She lives in a Phnom Penh suburb.\r\n \r\nMariyom sells grilled beef and chicken in front of the garment factory. She wants her daughter who is attending school to use her tailoring skills after class. Hence, she decided to apply for a loan in order to buy a sewing machine for her.\r\n","loan_amount":200,"country_code":"KH","country":"Cambodia","short_description":"To buy a sewing machine for her daughter.  ","id":723011},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Paterna","image":"Paterna","long_description":"Paterna is a married woman with seven children. She is a very hard working entrepreneur. Paterna is 40 years old and has three children who are currently in school.\r\n\r\nShe has a general store business in the Philippines. Paterna requested a PHP 14,000 loan through NWTF to purchase more groceries to sell.\r\n\r\nShe has been in this business for 12 years. In the future, Paterna would like to save enough money so she can afford to send her children to college.\r\n","loan_amount":325,"country_code":"PH","country":"Philippines","short_description":"to purchase more groceries to sell in her general store","id":722999},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Gloria","image":"Gloria","long_description":"Gloria is a hardworking entrepreneur who has a buy-and-sell rice business in the Philippines. She is borrowing 18,000 PHP through NWTF to buy sacks of rice to resell for her business. <br /><br />Gloria has been in this business for four years. She earns more income from food vending. She has been sustaining her business activities through her own efforts with the help of the loans from NWTF. She dreams to save enough money so that she could afford to send her children to college in the future.","loan_amount":425,"country_code":"PH","country":"Philippines","short_description":"to buy sacks of rice to resell for her business.","id":723003},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Leonila","image":"Leonila","long_description":"Leonila is a hardworking mom who makes a living farming; she owns a mango farm and earns a good income with her husband. Leonila started the business five years ago. She starts overseeing the farm early in the morning when her husband is busy with his work; they work together more often on weekends. She borrowed a new loan from GDMPC to buy fertilizer and organic pesticides for mango production. She is determined to have a better future.","loan_amount":250,"country_code":"PH","country":"Philippines","short_description":"to buy fertilizer and organic pesticides for mango production.","id":722993},{
                "funded_amount":25,"funded_percentage":5,"borrower_name":"Mak","image":"Mak","long_description":"Mak, 40, lives with her husband and three children in a small village of the Preah Sdach District in Prey Veng Province. She has worked in agribusiness for more than ten years in order to meet the needs of her children who are enrolling in school. Working in the framing business with her husband, Mak is able to make a net income of 3 USD per day to meet her family’s daily expenditures.<br /><br />Currently, Mak is applying for a 500 USD loan, which is her first loan, to buy a solar energy system to supply energy to her household. She hopes that, with the loan, she can provide a comfortable lifestyle for all of her children. Finally, she is grateful for the loan granted through HKL which has a much lower interest rate than usual for this kind of loan product.","loan_amount":500,"country_code":"KH","country":"Cambodia","short_description":"to buy a solar energy system.","id":723004},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Godilla","image":"Godilla","long_description":"As a married parent of five children, Godilla works hard to support her family. She has a buy-and-sell fruits business in the Philippines and also earns additional income from raising pigs. Godilla is borrowing 5,000 PHP through NWTF to purchase additional fruits to resell for her buy-and-sell fruits business.<br /><br />Godilla has been sustaining her business activities through her past two loans from NWTF. She hopes that her hard work will help her to attain her dream to save enough money to buy farmland.","loan_amount":125,"country_code":"PH","country":"Philippines","short_description":"to purchase additional fruits to resell.","id":722995},{
                "funded_amount":25,"funded_percentage":4.3478260869565215,"borrower_name":"Rosita","image":"Rosita","long_description":"Rosita is a hardworking entrepreneur who has a motorcycle transport business in the Philippines. \r\n\r\nShe is borrowing PHP 25,000 through NWTF to buy spare parts for the maintenance of her motorcycle transport business.\r\n\r\nRosita has been in this business for one year. She earns more income from raising chickens.\r\n\r\nShe successfully paid back her previous loan and now she requested an additional loan to further build her business.\r\n\r\nRosita has been sustaining her business activities through her own efforts with the help of the loans from NWTF. She dreams of saving enough to provide a secure future for her family.\r\n","loan_amount":575,"country_code":"PH","country":"Philippines","short_description":"to buy spare parts to maintain her motorcycle","id":723000},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Mara","image":"Mara","long_description":"Mara, age 35, is a silk weaver while her husband works for a factory that produces cigarettes. She lives on an island of Mekong River, about fifteen kilometers from Phnom Penh. She has been married since 2007 and has two children, one son and one daughter. One of her children attends school, and another one is still young. <br /><br />Mara hopes to continue her weaving business, so she decided to apply for a loan to buy silk material for her weaving business.","loan_amount":200,"country_code":"KH","country":"Cambodia","short_description":"to buy silk material for her weaving business.","id":723006},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Marivic","image":"Marivic","long_description":"Marivic is a hardworking entrepreneur who has a rice farming business in the Philippines. She is borrowing 30,000 PHP through NWTF to buy fertilizers and other farm supplies for her rice farming business. Marivic has been in this business for 19 years. Marivic earns more income from food vending. She successfully paid back her previous loan and now requested an additional loan to further build her business.<br /><br />Marivic has been sustaining her business activities through her own efforts with the help of the loans from NWTF. She dreams to save enough money so that she could afford to send her children to college in the future.","loan_amount":700,"country_code":"PH","country":"Philippines","short_description":"to buy fertilizers and other farm supplies.","id":723005},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Youn","image":"Youn","long_description":"Youn lives with her brother in a village on an island of the Mekong River, about fifteen kilometers from Phnom Penh City. She has six sons and one daughter. Three of her children are married and live away from home, one is a garment factory worker, two attend school and another one works for a hospital. \r\nYoun sells fast food in her local primary school, while her husband works for a hospital. Youn’s home does not have a stair rail (shown in photo), and she is afraid of someone having an accident and falling down from the house. That’s why she decided to apply for a loan to put a stair rail on her house. She will use the rest of the loan to build a restroom for her family's use because she does not have a proper restroom. \r\n","loan_amount":1200,"country_code":"KH","country":"Cambodia","short_description":"To put a stair rail on her house and build a restroom for her family's use","id":723015},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Helen","image":"Helen","long_description":"Helen is running a dressmaking service in her community while her husband in earning income from his work as a carpenter.  She personally cuts fabric and sews it according to orders and customer demand. She also accommodates made-to-order curtains. \r\n\r\nWith these activities, she earns well for their living and she has successfully repaid her previous loan used for this business. This season, classes started and she works sewing school uniforms for students, and she had many orders. Recently, she took a new loan to buy additional fabrics and materials. She is hopeful to gain more revenue from her investment and wants to be able to save for the future.","loan_amount":100,"country_code":"PH","country":"Philippines","short_description":"to buy additional fabrics and materials ","id":722997},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Helen","image":"Helen","long_description":"As a married parent of five children, Helen works hard to support her family.\r\n\r\nShe has a business buying and selling vegetables in the Philippines, and earns additional income from pig fattening. Helen is borrowing PHP 10,000 through NWTF to buy vegetables to sell.\r\n\r\nHelen has been sustaining her business activities through her past 13 loans from NWTF. She hopes that her hard work will help her attain her dream to save money to expand her business.\r\n","loan_amount":250,"country_code":"PH","country":"Philippines","short_description":"to buy vegetables to sell ","id":723014},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Seng Kun","image":"Seng Kun","long_description":"Seng Kun is a weaver and her husband is a farmer. She lives on an island in the Mekong River about 15 kilometers from Phnom Penh City. She has four children, three sons and one daughter. Two of her children are married and live in separate homes, one is a garment factory worker and another one is an auto repairman.\r\n \r\nSeng Kun is asking for a loan to purchase a motorbike for her son for commuting. Seng’s son, who is an auto repairman, needs to stay at his work place. With a motorbike, which she will buy with money from the loan, he will be able to visit his home sometimes on the weekend!\r\n\r\nIn the photo is Seng Kun with her loom.\r\n","loan_amount":900,"country_code":"KH","country":"Cambodia","short_description":"To purchase a motorbike for her son for commuting. ","id":723001},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Rosalinda","image":"Rosalinda","long_description":"As a married parent of seven children, Rosalinda works hard to support her family.\r\n\r\nShe has a food vending business in the Philippines and earns additional income from dressmaking and retailing soft drinks. Rosalinda is borrowing PHP 29,500 through NWTF to purchase more fertilized duck embryos to sell for her food vending business.\r\n\r\nRosalinda has been sustaining her business activities through her past nine loans from NWTF. She hopes that her hard work will help her attain her dream of saving enough money so she can afford to send her children to college.","loan_amount":700,"country_code":"PH","country":"Philippines","short_description":"to purchase more fertilized duck embryos to sell","id":723002},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Norma","image":"Norma","long_description":"Norma is a hardworking entrepreneur who has a food vending business in the Philippines. \r\n\r\nShe is borrowing PHP 20,000 through NWTF to buy ingredients for her food production business.\r\n\r\nNorma has been in this business for 13 years. She earns more income from her general store.\r\n\r\nNorma has been sustaining her business activities through her own efforts with the help of the loans from NWTF. She dreams of saving money to expand her business in the future.\r\n","loan_amount":475,"country_code":"PH","country":"Philippines","short_description":"to buy ingredients for her food production business","id":722998},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Sokkriyas","image":"Sokkriyas","long_description":"Sokkriyas (in the photo), age 40, is a security guard for a nightclub in Phnom Penh city. He lives in a Phnom Penh suburb. He has three children, one son and two daughters. Two of his children have full-time employment and the other one attends school.\r\n\r\nHis wife sells nets and blankets. She orders nets and blankets from Vietnam, one of Cambodia’s neighboring countries, and she resells them at a market in Phnom Penh. She wants to increase the volume of nets and blankets she buys and sells.  \r\n\r\nHence, Sokkriyas applied for a loan to help his wife!\r\n","loan_amount":200,"country_code":"KH","country":"Cambodia","short_description":" to buy additional nets and blankets for resale.  ","id":723010},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Lailani","image":"Lailani","long_description":"Lailani is 42 years old and married with five children.\r\n\r\nShe earns a living by farming rice in the Philippines. Lailani is borrowing PHP 18,000 through NWTF to purchase fertilizers and a new variety of rice and pay the laborers' salaries.\r\n\r\nLailani has been farming rice for 30 years and earns additional income from raising chickens.\r\n\r\nShe is working tirelessly toward the attainment of her dream of saving enough money so she can afford to send her children to college.\r\n","loan_amount":425,"country_code":"PH","country":"Philippines","short_description":"to purchase fertilizers and a new variety of rice and pay labor fees","id":723012},{
                "funded_amount":50,"funded_percentage":6.896551724137931,"borrower_name":"Xuyen","image":"Xuyen","long_description":"Xuyen comes from a small village in Bac Ninh, an area well known for handmade carpentry furniture. Xuyen, a woman who has a very nice smile, is standing next to her son in this picture. She lives in a family of five people. She has one son and two daughters. Xuyen and her husband are carpenters. Her family’s total income is 10,000,000 VND per month.\r\n\r\nXuyen wants to borrow VND 15,300,000 to buy more educational material for her son who is standing next to her in this picture. The son’s name is Hung. Hung is currently studying in second grade. If she is not granted this loan, Hung would not have much chance to buy more educational material and it will affect his studies.\r\n\r\nBecause of his love for children, he would love to become a teacher when he grows up. He wishes to be a useful person who can give his best for society.\r\n\r\nHung and his mother would like to say thanks to every donor all around the world. They would like to see this program expanded so that, like Hung, more students will be able to go to school and follow their dreams.\r\n","loan_amount":725,"country_code":"VN","country":"Vietnam","short_description":"to buy more educational material for her son ","id":723009},{
                "funded_amount":0,"funded_percentage":0,"borrower_name":"Robilyn","image":"Robilyn","long_description":"Robilyn is married with five children. She operates a fishing business together with her husband to earn a living. For more than 15 years in running the business, they have earned well for the family.  She is determined to send her children to school and provide a better education. For this reason, they work with love and they never get tired of working. She borrowed a loan from GDMPC micro credit to buy fishing nets. In the future, she wants to build a concrete home for the family.","loan_amount":125,"country_code":"PH","country":"Philippines","short_description":"to buy fishing nets","id":723013
            }
        ]

        $scope.$watch("fbauth", function(newValue, oldValue){
            console.log("facebook auth");
            console.log(newValue);
        });

        // METHODS
        $scope.init = function(){
            console.log("init...");
            $scope.requestLoans();
        }

        $scope.requestLoans = function() {
            console.log("requestLoans...");
            KivaService.getRecommendedLoans(function(result){
                console.log("getRecommendedLoans:...");
                $scope.createSlidesPerCategoryList(result);
                console.log(result);
                $scope.kivalist = result;
            });
        }

        $scope.createSlidesPerCategoryList = function(argCategoryList){
            _.forEach(argCategoryList, function(item){
                console.log("category..." + item);
               $scope.createSlidesPerCategory(item);
            });
        }

        $scope.createSlidesPerCategory = function(argCategory){
            argCategory.slides = [];
            var start, end;
            for(var i = 0; i < argCategory.loans.length/$scope.ITEMS_PER_SLIDE; i++){
                start = i * $scope.ITEMS_PER_SLIDE;
                end = (i * $scope.ITEMS_PER_SLIDE) + $scope.ITEMS_PER_SLIDE;
                end = end > argCategory.loans.length ? argCategory.loans.length : end;
                argCategory.slides.push(argCategory.loans.slice(start, end));
            }
        }

        $scope.onButtonClick = function(name){
            console.log("button just clicked." + name);
        }

        $scope.setProgress = function(progress) {
            var progressBarWidth = progress * $(".prog-cont").width()/ 100;
            $(".prog-bar").width(progressBarWidth).html(progress + "% ");
        }

        $scope.flipImage = function() {
            console.log(this)
            debugger
            // APPEND A BOX ONTO THE PAGE
            // POPULATE IT WITH THE SOME TEXT!!!
            $('body').append('<div class="loan-show"><h1>NAME</h1></div>')
            console.log("GONNA FLIP THE STUFF!!")
        }
        $scope.incrementCounter = function() {

        }

  }]);
